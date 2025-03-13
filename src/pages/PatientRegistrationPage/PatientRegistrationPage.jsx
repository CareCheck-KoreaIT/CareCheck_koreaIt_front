/**@jsxImportSource @emotion/react */
import { RiUser3Fill } from 'react-icons/ri';
import * as s from './style';
import { FaLock } from 'react-icons/fa';
import MainSidebar from '../../components/common/MainSidebar/MainSidebar';

function PatientRegistrationPage(props) {
    return (
        <div css={s.layout}>
            <div>
            <header css={s.titleGroup}>
                <h1 css={s.title1}>CareCheck</h1>
                <p css={s.title2}>환자 등록</p>
            </header>
            <main css={s.inputGroup}>
                <div css={s.inputLineGroup}>
                    <div css={s.input}>
                        <label htmlFor="patientName">이름</label>
                        <input type="text"/>
                    </div>
                    <div css={s.input}>
                        <label htmlFor="patientAge">나이</label>
                        <input type="text"/>
                    </div>
                </div>
                <div css={s.inputLineGroup}>
                    <div css={s.input}>
                        <label htmlFor="patientHeight">키</label>
                        <input type="text"/>
                    </div>
                    <div css={s.input}>
                        <label htmlFor="patientWeight">몸무게</label>
                        <input type="text"/>
                    </div>
                </div>
                <div css={s.inputLineGroup}>
                    <div css={s.input}>
                        <label htmlFor="patientFever">체온</label>
                        <input type="text"/>
                    </div>
                </div>
                <div css={s.inputLineGroup}>
                    <div css={s.input2}>
                        <label htmlFor="patientEmail">이메일</label>
                        <input type="text" placeholder='test1234@gmail.com'/>
                    </div>
                </div>
                <div css={s.inputLineGroup}>
                    <div css={s.input2}>
                        <label htmlFor="patientPhonenumber">휴대전화</label>
                        <input type="text" placeholder='010-1234-5678' />
                    </div>
                </div>
                <div css={s.inputLineGroup}>
                    <div css={s.input2}>
                        <label htmlFor="note">비고</label>
                        <input type="text"/>
                    </div>
                </div>
            </main>
            <footer css={s.button}>
                <button>등록</button>
            </footer>
            </div>
        </div>
    );
}

export default PatientRegistrationPage;