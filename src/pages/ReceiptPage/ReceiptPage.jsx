/**@jsxImportSource @emotion/react */
import { useGetAllWaitingTotalCount, useGetSearchAllWaitingList } from '../../queries/admissionQuery';
import * as s from './style';
import React, { useEffect, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { Await, useNavigate } from 'react-router-dom';
import { useDeleteReceiptMutation } from '../../mutations/admissionMutation';
import DeleteReceiptModal from '../../components/modal/DeleteReceiptModal/DeleteReceiptModal';
import Swal from 'sweetalert2';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';

function ReceiptPage() {
    const navigate = useNavigate();
    
    const [ keyword, setKeyword ] = useState("");
    const [ page, setPage ] = useState(1);
    const [ limit ] = useState(10);
    const [waitingList, setWaitingList] = useState([]);
    const { data: totalCountData } = useGetAllWaitingTotalCount(keyword);
    console.log("totalCountData:", totalCountData); 
    const totalCount = totalCountData?.data || 0;

    const { data: waitingListData } = useGetSearchAllWaitingList(keyword, page, limit);  // 대기자 목록을 받아옴
    // const waitingList = waitingListData?.data || [];  // 대기자 목록
    const totalPages = Math.ceil(totalCount / limit) || 1;
    
    const [ isModalOpen, setIsModalOpen ] = useState(false);
    const [ selectedReceipt, setSelectedReceipt ] = useState(null);

    const handlePageChange = (newPage) => {
        if (newPage < 1 || newPage > totalPages) return;  // 페이지가 1보다 작거나 totalPages보다 큰 경우 방지
        setPage(newPage);  // 페이지 상태 업데이트
    };

    useEffect(() => {
        if (waitingListData?.data) {
            setWaitingList(waitingListData.data); // 대기자 목록 상태 업데이트
        }
    }, [waitingListData]);
    
    useEffect(() => {
        console.log("totalCount:", totalCount);
        console.log("현재 페이지: ", totalPages);
        console.log("대기자 목록:", waitingListData);
    }, [page, waitingList]);

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

    const handleSearchButtonOnClick = () => {
        setPage(1); // 검색 시 첫 페이지로 돌아가도록 설정
      };

    return (
        <>
            <div>
                <div css={s.searchItems}>
                    <input 
                        css={s.searchInput} 
                        type="text" 
                        value={keyword} 
                        onChange={(e) => setKeyword(e.target.value)} // 텍스트 변경만 처리
                        onKeyDown={(e) => { if (e.key === "Enter") { handleSearchButtonOnClick(); }}}
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
                        {waitingList.length > 0 ? (
                            waitingList.map((allWaiting) => (
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
                        <button
                            disabled={page === 1} // 첫 페이지에서는 왼쪽 버튼 비활성화
                            onClick={() => handlePageChange(page - 1)}>
                            <GoChevronLeft />
                        </button>
                        {(() => {
                            const pageButtons = [];
                            for (let i = 0; i < totalPages; i++) {
                                pageButtons.push(
                                    <button
                                        key={i}
                                        css={s.pageNum(page === i + 1)}
                                        onClick={() => handlePageChange(i + 1)}>
                                        <span>{i + 1}</span>
                                    </button>
                                );
                            }
                            return pageButtons;
                        })()}
                        <button
                            disabled={page === totalPages}  // 마지막 페이지에서는 오른쪽 버튼 비활성화
                            onClick={() => handlePageChange(page + 1)}>
                            <GoChevronRight />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ReceiptPage;
