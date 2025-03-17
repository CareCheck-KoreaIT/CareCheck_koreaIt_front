/**@jsxImportSource @emotion/react */
import { RiUser3Fill } from 'react-icons/ri';
import * as s from './style';
import { FaLock } from 'react-icons/fa';
import MainSidebar from '../../components/common/MainSidebar/MainSidebar';
import NoTitleHeaderMenu from '../../components/NoTitleHeaderMenu/NoTitleHeaderMenu';

function PatientRegistrationPage(props) {
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
                            <input type="text"/>
                        </div>
                    </div>
                    <div css={s.inputLineGroup}>
                        <div css={s.input2}>
                            <label htmlFor="regidentNum">주민번호</label>
                            <input type="text" placeholder='950915-1111111'/>
                        </div>
                    </div>
                    <div css={s.inputLineGroup}>
                        <div css={s.input2}>
                            <label htmlFor="patientPhonenumber">휴대전화</label>
                            <input type="text" placeholder='010-1234-5678' />
                        </div>
                    </div>
                </main>
                <footer css={s.button}>
                    <button>등록</button>
                </footer>
                </div>
            </div>
        </>
    );
}

export default PatientRegistrationPage;