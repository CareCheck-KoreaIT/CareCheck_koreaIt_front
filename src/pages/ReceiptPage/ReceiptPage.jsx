/**@jsxImportSource @emotion/react */
import { useGetAllWaitingTotalCount, useGetSearchAllWaitingList } from '../../queries/admissionQuery';
import * as s from './style';
import React, { useEffect, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { useDeleteReceiptMutation } from '../../mutations/admissionMutation';
import DeleteReceiptModal from '../../components/modal/DeleteReceiptModal/DeleteReceiptModal';
import { useQueryClient } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';

function ReceiptPage() {
    const queryClient = useQueryClient();
    const loginUser = queryClient.getQueryData(["userMeQuery"]);
    const navigate = useNavigate();
    
    const [ keyword, setKeyword ] = useState("");
    const [ searchTerm, setSearchTerm ] = useState("");
    const [ filteredWaitingList, setFilteredWaitingList ] = useState([]); 
    const allWaitingListBykeyword = useGetSearchAllWaitingList(keyword);
    const allWaitingList = allWaitingListBykeyword?.data?.data || [];

    const [ isModalOpen, setIsModalOpen ] = useState(false);
    const [ selectedReceipt, setSelectedReceipt ] = useState(null);

    const [ page, setPage ] = useState(1);
    const [ pageNumbers, setPageNumbers ] = useState([]);
    const [ searchAllWaitingList, setsearchAllWaitingList ] = useState(null);
    
    const searchTotalCount = useGetAllWaitingTotalCount({
        startIndex: (page - 1) * 10,
        limitCount: 10,
    });

    useEffect(() => {
        if (searchTotalCount?.data) {
            const currentPage = searchTotalCount.data.page || 1;
            const totalPages = searchTotalCount.data.totalPages || 1;
            const startIndex = Math.floor((currentPage - 1) / 5) * 5 + 1;
            const endIndex = startIndex + 4 > totalPages ? totalPages : startIndex + 4;

            let newPageNumbers = [];
            for (let i = startIndex; i <= endIndex; i++) {
                newPageNumbers.push(i);
            }

            setPageNumbers(newPageNumbers);
            setsearchAllWaitingList(searchTotalCount);
        }
    }, [searchTotalCount, page]);

    const handlePagenumbersOnClick = (number) => {
        setPage(number); // 페이지 변경
    };

    // useEffect(() => {
    //     if (allWaitingList) {
    //     setFilteredWaitingList(allWaitingList.slice(0, 10)); //  초기 렌더링 시 전체 대기자 목록을 10개 까지 보여줌
    //     }
    // }, [allWaitingList]);

    const handleSearchButtonOnClick = () => {
    if (!searchTerm.trim()) { 
        setFilteredWaitingList(allWaitingList.slice(0, 10)); // 공백일 경우 전체 리스트 10개까지 표출
    } else {
        const filtered = allWaitingList.filter(item =>       
            (item.patientName || ``).includes(searchTerm)    // 환자이름이 없다면 공백을 띄우고 검색어에 맞는 환자 검색
        );
        setFilteredWaitingList(filtered); // 검색어에 맞는 환자가 화면에 뜸
    }};

    const { mutate: deleteReceipt } = useDeleteReceiptMutation();

    const handleDeleteReceiptOnClick = (admissionId) => {
        // 삭제 확인 모달 띄우기
        if (!admissionId) return;
        setSelectedReceipt(admissionId);
        setIsModalOpen(true);
    };

    const handleConfirmDeleteOnClick = async () => {
        if (selectedReceipt) {
            deleteReceipt(selectedReceipt, {
                onSuccess: async () => {
                    setIsModalOpen(false);
                    await Swal.fire({
                        titleText: "취소가 완료되었습니다.",
                        icon: "success",
                        confirmButtonText: "확인"
                    });
                    queryClient.invalidateQueries(["useGetSearchAllWaitingList"]) // 대기자 목록 새로고침
                },
                onError: async () => {
                    setIsModalOpen(false);
                    await Swal.fire({
                        titleText: "취소 실패",
                        icon: "error",
                        confirmButtonText: "확인"
                    });
                }
            });
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handlePayment = (admId) => {
        navigate(`/admission/${admId}/detailBill`);
    };

    return (
        <>
            <div>
                <div css={s.searchItems}>
                    <input 
                        css={s.searchInput} 
                        type="text" 
                        value={searchTerm} 
                        onChange={(e) => setSearchTerm(e.target.value)} // 텍스트 변경만 처리
                        onKeyDown={(e) => {
                            if (e.key === "Enter") { handleSearchButtonOnClick(); }}}
                        placeholder="이름으로 검색"
                    />
                    <button css={s.searchButton} onClick={handleSearchButtonOnClick}>
                        <BiSearch />
                    </button>
                </div>
                <div css={s.tableContainer}>
                    <table css={s.table}>
                        <tr css={s.trHeader}>
                            <td>차트번호</td> {/* 환자번호 */}
                            <td>이름</td>
                            <td>전화번호</td>
                            <td>접수시간</td>
                            <td>접수상태</td>
                            <td>계산</td>
                        </tr>

                        <tbody css={s.body}>
                            {filteredWaitingList.length > 0 ? (
                                filteredWaitingList.map((allWaiting) => (
                                    <tr key={allWaiting.admId} css={s.trData}>
                                        <td>{allWaiting.patientId}</td>
                                        <td>{allWaiting.patientName}</td>
                                        <td>{allWaiting.phoneNum}</td>
                                        <td>{allWaiting.admDate}</td>
                                        <td>
                                            <button css={s.cancelButton}
                                                    onClick={() => {
                                                    handleDeleteReceiptOnClick(allWaiting.admId)}}>
                                            접수취소
                                            </button>
                                            {isModalOpen &&
                                            <DeleteReceiptModal
                                            isOpen={isModalOpen}
                                            onCancel={handleCloseModal}
                                            onConfirm={handleConfirmDeleteOnClick}
                                            onClose={handleCloseModal}
                                            />}
                                        </td>
                                        <td>
                                            <button css={s.PaymentButton} onClick={() => handlePayment(allWaiting.admId)}>
                                            결제
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6">진료 대기자가 없습니다.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                {/* 페이지네이션 */}
                <div css={s.footer}>
            <div css={s.pageNumbers}>
                <button
                    disabled={page === 1} // 첫 페이지에서는 왼쪽 버튼 비활성화
                    onClick={() => handlePagenumbersOnClick(page - 1)}
                >
                    <GoChevronLeft />
                </button>
                {pageNumbers.map((number) => (
                    <button
                        key={number}
                        css={s.pageNum(page === number)}
                        onClick={() => handlePagenumbersOnClick(number)}
                    >
                        <span>{number}</span>
                    </button>
                ))}
                <button
                    disabled={page === searchTotalCount?.data?.totalPages} // 마지막 페이지에서는 오른쪽 버튼 비활성화
                    onClick={() => handlePagenumbersOnClick(page + 1)}
                >
                    <GoChevronRight />
                </button>
            </div>
        </div>
            </div>
        </>
    );
}

export default ReceiptPage;
