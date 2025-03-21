/**@jsxImportSource @emotion/react */
import { useState } from 'react';
import * as s from './style';
import { useQueryClient } from '@tanstack/react-query';
import { RiCloseCircleFill } from 'react-icons/ri';
import { CgMail } from 'react-icons/cg';
import { useUpdateEmailMutation } from '../../../mutations/userMutation';
import Swal from 'sweetalert2';

function ChangeEmailModal({setOpen}) {
    const queryClient = useQueryClient();
    const loginUser = queryClient.getQueryData(["userMeQuery"]);
    const updateEmailMutation = useUpdateEmailMutation();

    const [ emailValue, setEmailValue ] = useState("");

    const handleEmailInputOnChange = (e) => {
        setEmailValue(e.target.value);
    }

    const handleEmailChangeButtonOnClick = async () => {
        let usercode = loginUser?.data.usercode;
        // console.log(usercode + emailValue);
        await updateEmailMutation.mutateAsync({usercode, email: emailValue});
        await Swal.fire({
            titleText: "이메일 변경 완료",
            confirmButtonText: "확인",
        })
        queryClient.invalidateQueries(["userMeQuery"]);
        setOpen(false);
    }

    const handleInputOnKeyDown = async (e) => {
        if(e.key === "Enter") {
            await handleEmailChangeButtonOnClick();
        }
    }

    const handleCloseButtonOnClick = () => {
        setOpen(false);
    }

    return (
        <div>
            <div css={s.modalTop}>
                <div onClick={handleCloseButtonOnClick}><RiCloseCircleFill /></div>
            </div>
            <div css={s.header}>
                <div css={s.headerIcon}><CgMail /></div>
                <h2 css={s.headerTitle}>Set a email address</h2>
                <p css={s.headerMessage}>변경할 이메일 주소를 입력하세요.</p>
            </div>
            <div css={s.main}>
                <input type="email" name='newEmail' value={emailValue} onChange={handleEmailInputOnChange} onKeyDown={handleInputOnKeyDown} placeholder='Set your email...' />
                <button onClick={handleEmailChangeButtonOnClick}>변경</button>
            </div>
        </div>
    );
}

export default ChangeEmailModal;