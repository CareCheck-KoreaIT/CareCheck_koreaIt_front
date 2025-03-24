/**@jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import * as s from './style';
import { RiCloseCircleFill } from 'react-icons/ri';
import { CgUserlane } from 'react-icons/cg';

function ChangeUserModal({setOpen, user}) {
    const [ inputValue, setInputValue ] = useState({
        username: "",
        email: "",
        phoneNumber: "",
    });
    useEffect(() => {
        setInputValue(prev => ({
            ...prev,
            usercode: user.usercode,
            username: user.username,
            email: user.email,
            phoneNumber: user.phoneNumber,
        }));
    }, [user]);

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneNumberRegex = /^010-\d{4}-\d{4}$/;
    const [ emailValidMessage, setEmailValidMessage ] = useState("");
    const [ phoneNumberValidMessage, setPhoneNumberValidMessage ] = useState("");

    const handleInputOnChange = (e) => {
        setInputValue(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    useEffect(() => {
        if (!inputValue.email) {
          setEmailValidMessage(""); // 빈 값이면 에러 메시지 제거
        } else if (!emailRegex.test(inputValue.email)) {
          setEmailValidMessage("올바른 이메일 형식이 아닙니다.");
        } else {
          setEmailValidMessage(""); // 올바른 값이면 에러 메시지 제거
        }
      }, [inputValue.email]);
      useEffect(() => {
        if (!inputValue.phoneNumber) {
          setPhoneNumberValidMessage("");
        } else if (!phoneNumberRegex.test(inputValue.phoneNumber)) {
          setPhoneNumberValidMessage("올바른 전화번호 형식이 아닙니다. 010-0000-0000 형식으로 작성해주세요.");
        } else {
          setPhoneNumberValidMessage("");
        }
      }, [inputValue.phoneNumber]);
      

    const handleCloseButtonOnClick = () => {
        setOpen(false);
    }

    return (
        <div>
            <div css={s.modalTop}>
                <div onClick={handleCloseButtonOnClick}><RiCloseCircleFill /></div>
            </div>
            <div css={s.header}>
                <div css={s.headerIcon}><CgUserlane /></div>
                <h2 css={s.headerTitle}>Set user information</h2>
                <p css={s.headerMessage}>직원 정보 수정</p>
            </div>
            <div css={s.main}>
                <div css={s.inputBox}>
                    <label htmlFor="usercode">사원번호</label>
                    <input type="text" name='usercode' value={inputValue.usercode} disabled={true} />
                </div>
                <div css={s.inputBox}>
                    <label htmlFor="username">직원이름</label>
                    <input type="text" name='username' value={inputValue.username} />
                </div>
                <div css={s.inputBox}>
                    <label htmlFor="email">이메일</label>
                    <input type="text" name='email' value={inputValue.email} />
                </div>
                {
                    !!emailValidMessage &&
                    <div css={s.errorMessage}>
                        <p>{emailValidMessage}</p>
                    </div>
                }
                <div css={s.inputBox}>
                    <label htmlFor="phoneNumber">휴대전화</label>
                    <input type="text" name='phoneNumber' value={inputValue.phoneNumber} />
                </div>
                {
                    !!phoneNumberValidMessage &&
                    <div css={s.errorMessage}>
                        <p>{phoneNumberValidMessage}</p>
                    </div>
                }
                <div css={s.changeButtonBox}>
                    <button css={s.changeButton}>변경</button>
                </div>
            </div>
        </div>
    );
}

export default ChangeUserModal;