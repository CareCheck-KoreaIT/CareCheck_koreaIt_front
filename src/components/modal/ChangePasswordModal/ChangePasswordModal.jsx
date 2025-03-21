/**@jsxImportSource @emotion/react */
import { CgPassword } from 'react-icons/cg';
import * as s from './style';
import { RiCloseCircleFill } from 'react-icons/ri';
import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { useUpdatePasswordMutation } from '../../../mutations/userMutation';
import Swal from 'sweetalert2';

function ChangePasswordModal({setOpen}) {
    const queryClient = useQueryClient();
    const updatePasswordMutation = useUpdatePasswordMutation();

    const [ inputValue, setInputValue ] = useState({
        currentPassword: "",
        newPassword: "",
        newPasswordCheck: "",
    });

    const handleInputOnChange = (e) => {
        setInputValue(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    const isError = () => {
        const isEmpty = Object.values(inputValue).map(value => !!value).includes(false);
        const notSame = inputValue.newPassword !== inputValue.newPasswordCheck;

        return isEmpty || notSame;
    }

    const handlePasswordChangeButtonOnClick = async () => {
        updatePasswordMutation.mutateAsync({currentPassword: inputValue.currentPassword, newPassword: inputValue.newPassword})
        .then(response => {
            Swal.fire({
                icon: "success",
                title: "비밀번호 변경 완료",
                confirmButtonText: "확인",
            }).then(response => {
                queryClient.invalidateQueries(["userMeQuery"]);
                setOpen(false);
            });
        }).catch(error => {
            Swal.fire({
                icon: "error",
                title: "사용자 정보를 다시 확인해주세요",
                confirmButtonText: "확인",
            }).then(response => {
                setInputValue({
                    currentPassword: "",
                    newPassword: "",
                    newPasswordCheck: "",
                });
            });
        })
    }

    const handleInputOnKeyDown = async (e) => {
        if(e.key === "Enter") {
            await handlePasswordChangeButtonOnClick();
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
                <div css={s.headerIcon}><CgPassword /></div>
                <h2 css={s.headerTitle}>Set your password</h2>
                <p css={s.headerMessage}>변경할 비밀번호를 입력하세요.</p>
            </div>
            <div css={s.main}>
                <div>
                    <input type="password" name='currentPassword' value={inputValue.currentPassword} onChange={handleInputOnChange} placeholder='현재 비밀번호' />
                </div>
                <div>
                    <input type="password" name='newPassword' value={inputValue.newPassword} onChange={handleInputOnChange} placeholder='새 비밀번호' />
                </div>
                <div>
                    <input type="password" name='newPasswordCheck' value={inputValue.newPasswordCheck} onChange={handleInputOnChange} onKeyDown={handleInputOnKeyDown} placeholder='새 비밀번호 확인' />
                    <button onClick={handlePasswordChangeButtonOnClick} disabled={isError()}>변경</button>
                </div>
                {
                    inputValue.newPassword !== inputValue.newPasswordCheck &&
                    <div css={s.errorMessage}>
                        <p>새 비밀번호와 일치하지 않습니다</p>
                    </div>
                }
            </div>
        </div>
    );
}

export default ChangePasswordModal;