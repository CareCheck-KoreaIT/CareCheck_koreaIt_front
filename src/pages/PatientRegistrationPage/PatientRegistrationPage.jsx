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

    const patientMutation = usePatientMutation();

    const [ patientData, setPatientData ] = useState({
        patientName: "",
        regidentNum: "",
        phoneNumber: "",
    });

    const handlePatientOnChange = (e) => {
        setPatientData(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const validateInputs = () => {
        const regidentNumRegex = /^\d{6}-\d{7}$/; // 주민번호 형식 (6자리-7자리)
        const phoneNumberRegex = /^\d{3}-\d{3,4}-\d{4}$/; // 휴대폰 번호 형식 (xxx-xxxx-xxxx)

        if (!regidentNumRegex.test(patientData.regidentNum)) {
            Swal.fire({
                icon: 'error',
                title: '❌ 주민등록번호 형식이 올바르지 않습니다. (예: 990919-1111111)',
                confirmButtonColor: '#d33',
                confirmButtonText: '확인',
            });
            return false;
        }

        if (!phoneNumberRegex.test(patientData.phoneNumber)) {
            Swal.fire({
                icon: 'error',
                title: '❌ 휴대폰 번호 형식이 올바르지 않습니다. (예: 010-1234-5678)',
                confirmButtonColor: '#d33',
                confirmButtonText: '확인',
            });
            return false;
        }

        return true;
    }

    const handleSubmitOnClick = async () => {
        if (!validateInputs()) return;
        
        
        try {
            const response = await patientMutation.mutateAsync(newPatient);
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
        } catch (error){
                Swal.fire({
                    icon: "error",
                    title: "❌ 환자 등록 실패",
                    text: error.message,
                    confirmButtonColor: "#d33",
                    confirmButtonText: "확인",
                });
            }
    };
    

    return (
        <>
            <div>
                <MainSidebar />
            </div>
            <div css={s.layout}>
            <NoTitleHeaderMenu />
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
                    <button onClick={handleSubmitOnClick} >
                        등록
                    </button>
                </footer>
                </div>
            </div>
        </>
    );
};

export default PatientRegistrationPage;