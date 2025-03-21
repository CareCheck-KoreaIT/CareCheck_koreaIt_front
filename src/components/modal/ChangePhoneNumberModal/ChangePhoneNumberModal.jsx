/**@jsxImportSource @emotion/react */
import { CgPhone } from 'react-icons/cg';
import * as s from './style';
import { useQueryClient } from '@tanstack/react-query';
import { useUpdatePhoneNumberMutation } from '../../../mutations/userMutation';
import { useEffect, useState } from 'react';
import { RiCloseCircleFill } from 'react-icons/ri';
import Swal from 'sweetalert2';
import { useUserMeQuery } from '../../../queries/userQuery';

function ChangePhoneNumberModal({setOpen}) {
    const queryClient = useQueryClient();
    const loginUser = queryClient.getQueryData(["userMeQuery"]);
    const updatePhoneNumberMutation = useUpdatePhoneNumberMutation();

    const [ phoneNumberValue, setPhoneNumberValue ] = useState("");

    const handlePhoneNumberInputOnChange = (e) => {
        setPhoneNumberValue(e.target.value);
    }

    const handlePhoneNumberChangeButtonOnClick = async () => {
        let usercode = loginUser?.data.usercode;
        // console.log(usercode + emailValue);
        await updatePhoneNumberMutation.mutateAsync({usercode, phoneNumber: phoneNumberValue});
        await Swal.fire({
            titleText: "전화번호 변경 완료",
            confirmButtonText: "확인",
        })
        queryClient.invalidateQueries(["userMeQuery"]);
        setOpen(false);
    }

    const handleInputOnKeyDown = async (e) => {
        if(e.key === "Enter") {
            await handlePhoneNumberChangeButtonOnClick();
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
                <div css={s.headerIcon}><CgPhone /></div>
                <h2 css={s.headerTitle}>Set a phone-number</h2>
                <p css={s.headerMessage}>변경할 전화번호를 입력하세요.</p>
            </div>
            <div css={s.main}>
                <input type="text" name='newPhoneNumber' value={phoneNumberValue} onChange={handlePhoneNumberInputOnChange} onKeyDown={handleInputOnKeyDown} placeholder='ex) 010-1234-5678' />
                <button onClick={handlePhoneNumberChangeButtonOnClick}>변경</button>
            </div>
        </div>
    );
}

export default ChangePhoneNumberModal;