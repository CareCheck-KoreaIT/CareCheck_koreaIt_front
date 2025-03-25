/**@jsxImportSource @emotion/react */
import { useGetSearchAllWaitingList, useGetSearchPatientInfo } from '../../queries/admissionQuery';
import * as s from './style';
import React, { useEffect, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useDeleteReceiptMutation } from '../../mutations/admissionMutation';
import DeleteReceiptModal from '../../components/modal/DeleteReceiptModal/DeleteReceiptModal';
import { useQueryClient } from '@tanstack/react-query';

function ReceiptPage() {
    const queryClient = useQueryClient();
    const [keyword, setKeyword] = useState("테스트");
    const [searchTerm, setSearchTerm] = useState(""); // 사용자 입력을 받는 값
    const [filteredWaitingList, setFilteredWaitingList] = useState([]); // 필터링된 리스트를 저장할 상태
    const allWaitingListBykeyword = useGetSearchAllWaitingList(keyword);
    const allWaitingList = allWaitingListBykeyword?.data?.data || [];
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    const [ isModalOpen, setIsModalOpen ] = useState(false);
    const [ selectedReceipt, setSelectedReceipt ] = useState(null);

    const handleSearchButtonOnClick = () => {
    // 검색어가 비어 있지 않으면 필터링 수행
    if (!searchTerm.trim()) { 
        setFilteredWaitingList([]);  // 공백일 경우 필터링된 대기 리스트 비우기
        return;
    }

    // 검색어가 있을 경우 필터링 수행
    const filtered = allWaitingList.filter(item => 
        item.patientName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    // 필터링된 리스트 상태 업데이트
    setFilteredWaitingList(filtered);

    // searchParams 업데이트 (검색어 반영)
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("searchText", searchTerm);
    setSearchParams(newSearchParams);
    };

    // const deleteReceiptMutation = useDeleteReceiptMutation();
    const { mutate: deleteReceipt } = useDeleteReceiptMutation();

    const handleDeleteReceiptOnClick = (admissionId) => {
        // 삭제 확인 모달 띄우기
        if (!admissionId) {
            console.error("❌ admissionId가 undefined입니다.");
            return;
        }
        // console.log(admissionId);
        setSelectedReceipt(admissionId);
        setIsModalOpen(true);
    };

    useEffect(() => {
    }, [isModalOpen]);

    useEffect(() => {
        allWaitingListBykeyword.refetch()
    }, [searchParams]);

    const handleConfirmDeleteOnClick = async () => {
        // await deleteReceiptMutation.mutateAsync(admissionId)

        if (selectedReceipt) {
            deleteReceipt(selectedReceipt, {
                onSuccess: async () => {
                    console.log("취소성공");
                    setIsModalOpen(false);
                    await Swal.fire({
                        titleText: "취소가 완료되었습니다.",
                        icon: "success",
                        confirmButtonText: "확인"
                    });
                    await allWaitingListBykeyword.refetch();
                    queryClient.invalidateQueries(["useGetSearchAllWaitingList"])
                },
                onError: async (error) => {
                    console.log("취소실패", error);
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

    const handleCancelDeleteOnClick = () => {
        setIsModalOpen(false);
    }
    
    const handleCloseModalOnClick = () => {
        setIsModalOpen(false);
    };

    const handlePayment = (usercode, admissionId) =>{
        navigate(`/${usercode}/admission/${admissionId}/certificate`);
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
                            if (e.key === "Enter") {
                                handleSearchButtonOnClick();
                            }
                        }}
                        placeholder="이름으로 검색"  // 검색 placeholder 추가
                    />
                    <button css={s.searchButton} onClick={handleSearchButtonOnClick}>
                        <BiSearch />
                    </button>
                </div>
                <div css={s.tableContainer}>
                    <table css={s.table}>
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>이름</th>
                                <th>전화번호</th>
                                <th>접수날짜</th>
                                <th>접수상태</th>
                                <th>계산</th>
                            </tr>
                        </thead>

                        <tbody>
                            {filteredWaitingList.length > 0 ? (
                                filteredWaitingList.map((allWaiting) => (
                                    <tr key={allWaiting.patientId}>
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
                                            onCancel={handleCancelDeleteOnClick}
                                            onConfirm={handleConfirmDeleteOnClick}
                                            onClose={handleCloseModalOnClick}
                                            />}
                                        </td>
                                        <td>
                                            <button css={s.PaymentButton} onClick={() => handlePayment(allWaiting.usercode, allWaiting.admissionId)}>
                                            영수증
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
            </div>
        </>
    );
}

export default ReceiptPage;
