/**@jsxImportSource @emotion/react */
import { useGetAllWaitingTotalCount, useGetSearchAdmissionListByPatientName, useGetSearchAllWaitingList } from '../../queries/admissionQuery';
import * as s from './style';
import React, { useEffect, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { useDeleteReceiptMutation } from '../../mutations/admissionMutation';
import DeleteReceiptModal from '../../components/modal/DeleteReceiptModal/DeleteReceiptModal';
import Swal from 'sweetalert2';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';

function ReceiptPage() {
    const navigate = useNavigate();
    const [ searchParams, setSearchParams ] = useSearchParams();
    const page = parseInt(searchParams.get("page") || "1");
    const keyword = searchParams.get("keyword") || "";
    const searchAllList = useGetSearchAllWaitingList({
        page,
        limitCount: 10,
        keyword,
    });

    const [ pageNumbers, setPageNumbers ] = useState([]);
    const [ searchValue, setSearchValue ] = useState(keyword);

    // useEffect(() => {
    //     if(!searchAllList.isLoading) {
    //         const currentPage = searchAllList?.data?.data.page || 1;
    //         const totalPages = searchAllList?.data?.data.totalPages || 1;
    //         const startIndex = (Math.floor((currentPage - 1) / 5) * 5) + 1;
    //         const endIndex = startIndex + 4 > totalPages ? totalPages : startIndex + 4;

    //         let newPageNumbers = [];
    //         for(let i = startIndex; i <= endIndex; i++) {
    //             newPageNumbers.push(i);
    //         }
    //         setPageNumbers(newPageNumbers);
    //     }
    // },[searchAllList.data])

    // useEffect(() => {
    //     searchAllList.refetch();
    // }, [searchParams]);
    
    const handleSearchInputOnChange = (e) => {
        setSearchValue(e.target.value);
    }
    
    const handleSearchInputOnKeyDown = (e) => {
        if(e.key === "Enter") {
            handleSearchButtonOnClick();
        }
    }
    
    const handlePageNumbersOnClick = (pageNumber) => {
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.set("page", pageNumber);
        setSearchParams(newSearchParams);
    }

    const handleSearchButtonOnClick = () => {
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.set("keyword", searchValue);
        newSearchParams.set("page", 1);
        setSearchParams(newSearchParams);
    }
    const queryClient = useQueryClient();
    const mutation = useDeleteReceiptMutation();
    const handleDeleteReceiptOnClick = (admissionId) => {
        // 삭제 확인 모달 띄우기
        if (!admissionId) return;
        setSelectedReceipt(admissionId);
        setIsModalOpen(true);
    };

    const handleConfirmDeleteOnClick = async () => {
        if (selectedReceipt) {
            mutation.mutate(selectedReceipt, {
                onSuccess: async () => {
                    setWaitingList((prevList) => prevList.filter(item => item.admId != selectedReceipt))
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

    const [ isModalOpen, setIsModalOpen ] = useState(false);

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
                        value={searchValue}
                        onChange={handleSearchInputOnChange} // 텍스트 변경만 처리
                        onKeyDown={handleSearchInputOnKeyDown}
                        placeholder="이름으로 검색"
                    />
                    <button css={s.searchButton} onClick={handleSearchButtonOnClick}>
                        <BiSearch />
                    </button>
                </div>
                <div css={s.tableContainer}>
                <table css={s.table}>
                    <thead>
                        <tr css={s.trHeader}>
                            <td>차트번호</td>
                            <td>이름</td>
                            <td>전화번호</td>
                            <td>접수시간</td>
                            <td>접수상태</td>
                            <td>계산</td>
                        </tr>
                    </thead>

                    <tbody css={s.body}>
                        {searchAllList.length > 0 ? (
                            searchAllList.map((allWaiting) => (
                                <tr key={allWaiting.admId} css={s.trData}>
                                    <td>{allWaiting.patientId}</td>
                                    <td>{allWaiting.patientName}</td>
                                    <td>{allWaiting.phoneNum}</td>
                                    <td>{allWaiting.admDate}</td>
                                    <td>
                                        <button 
                                            css={s.cancelButton}
                                            onClick={() => handleDeleteReceiptOnClick(allWaiting.admId)}
                                        >
                                            접수취소
                                        </button>
                                        {isModalOpen && (
                                            <DeleteReceiptModal
                                                isOpen={isModalOpen}
                                                onCancel={handleCloseModal}
                                                onConfirm={handleConfirmDeleteOnClick}
                                                onClose={handleCloseModal}
                                            />
                                        )}
                                    </td>
                                    <td>
                                        <button
                                            css={s.PaymentButton}
                                            onClick={() => handlePayment(allWaiting.admId)}
                                        >
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
                        <button disabled={searchAllList?.data?.data.firstPage} onClick={() => handlePageNumbersOnClick(page - 1)}><GoChevronLeft /></button>
                        {
                            pageNumbers.map(number =>
                                <button key={number} css={s.pageNum(page === number)} onClick={() => handlePageNumbersOnClick(number)}><span>{number}</span></button>
                            )
                        }
                        <button disabled={searchAllList?.data?.data.lastPage} onClick={() => handlePageNumbersOnClick(page + 1)}><GoChevronRight /></button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ReceiptPage;
