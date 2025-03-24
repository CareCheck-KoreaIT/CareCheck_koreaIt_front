/**@jsxImportSource @emotion/react */
import { useGetSearchAllWaitingList, useGetSearchPatientInfo } from '../../queries/admissionQuery';
import * as s from './style';
import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

function ReceiptPage() {
    const [keyword, setKeyword] = useState("테스트");
    const [searchTerm, setSearchTerm] = useState(""); // 사용자 입력을 받는 값
    const [filteredWaitingList, setFilteredWaitingList] = useState([]); // 필터링된 리스트를 저장할 상태
    const allWaitingListBykeyword = useGetSearchAllWaitingList(keyword);
    const allWaitingList = allWaitingListBykeyword?.data?.data || [];
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
console.log(keyword);

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


    const handleCancel = (name) => {
        console.log(`${name}의 대기 상태를 취소합니다.`);
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
                                            <button css={s.cancelButton} onClick={() => handleCancel(allWaiting.name)}>
                                            접수취소
                                            </button>
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
