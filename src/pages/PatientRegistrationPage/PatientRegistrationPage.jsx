/**@jsxImportSource @emotion/react */
import * as s from './style';
import MainSidebar from '../../components/common/MainSidebar/MainSidebar';
import NoTitleHeaderMenu from '../../components/NoTitleHeaderMenu/NoTitleHeaderMenu';
import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { usePatientMutation } from '../../mutations/patientMutation';

function PatientRegistrationPage(props) {
    const queryClient = useQueryClient();

    const { mutate, isLoading, } = usePatientMutation();

    const [ patientData, setPatientData ] = useState({
        patientName: "",
        regidentNum: "",
        phoneNumber: "",
    });

    const handlePatientOnChange = (e) => {
        const { name, value } = e.target;
        setPatientData({ ...patientData, [name]: value });
    };

    

    const handleSubmitOnClick = (e) => {
        e.preventDefault();
        
        // mutate를 사용하여 API 호출
        mutate(patientData, {
            onSuccess: () => {
                Swal.fire({
                    icon: "success",
                    title: "✅ 환자 등록 완료!",
                    text: "환자 정보가 성공적으로 등록되었습니다.",
                    confirmButtonColor: "#3085d6",
                    confirmButtonText: "확인",
                });

                // 환자 목록 새로고침
                queryClient.invalidateQueries(["patients"]);

                // 입력 폼 초기화
                setPatientData({ patientName: "", regidentNum: "", phoneNumber: "" });
            },
            onError: (error) => {
                Swal.fire({
                    icon: "error",
                    title: "❌ 오류 발생!",
                    text: error.message,
                    confirmButtonColor: "#d33",
                    confirmButtonText: "확인",
                });
            },
        });
    };
    

    return (
        <>
            <div css={s.layout}>
                <div>
                <header css={s.titleGroup}>
                    <h1 css={s.title1}>CareCheck</h1>
                    <p css={s.title2}>환자 등록</p>
                </header>
                <main css={s.inputGroup}>
                    <div css={s.inputLineGroup}>
                        <div css={s.input2}>
                            <label htmlFor="patientName">이름</label>
                            <input 
                                type="text"
                                name="patientName"
                                value={patientData.patientName}
                                onChange={handlePatientOnChange}    
                            />
                        </div>
                    </div>
                    <div css={s.inputLineGroup}>
                        <div css={s.input2}>
                            <label htmlFor="regidentNum">주민번호</label>
                            <input 
                                type="text"
                                name="regidentNum" 
                                value={patientData.regidentNum}
                                onChange={handlePatientOnChange}
                                placeholder='950915-1111111'
                            />
                        </div>
                    </div>
                    <div css={s.inputLineGroup}>
                        <div css={s.input2}>
                            <label htmlFor="phoneNumber">휴대전화</label>
                            <input 
                                type="text"
                                name="phoneNumber" 
                                value={patientData.phoneNumber}
                                onChange={handlePatientOnChange}
                                placeholder='010-1234-5678' />
                        </div>
                    </div>
                </main>
                <footer css={s.button}>
                    <button onClick={handleSubmitOnClick} disabled={isLoading}>
                        {isLoading ? "등록 중..." : "등록"}
                    </button>
                </footer>
                </div>
            </div>
        </>
    );
};

export default PatientRegistrationPage;