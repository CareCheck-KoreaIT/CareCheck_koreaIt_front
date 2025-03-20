/**@jsxImportSource @emotion/react */
import { useQueryClient } from '@tanstack/react-query';
import * as s from './style';
import { useState } from "react";

function AccountPage(props) {
    const queryClient = useQueryClient();
    const loginUser = queryClient.getQueryData(["userMeQuery"]);

    // 비밀번호 변경 모달 상태 관리
    const [showPasswordModal, setShowPasswordModal] = useState(false);
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleOpenPasswordModal = () => {
        setShowPasswordModal(true);
    };

    const handleClosePasswordModal = () => {
        setShowPasswordModal(false);
        setNewPassword("");
        setConfirmPassword("");
    };

    const handlePasswordChange = () => {
        if (newPassword !== confirmPassword) {
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }
        console.log("새 비밀번호:", newPassword);
        handleClosePasswordModal();
    };

    return (
        <>
            <div css={s.container}>
                <div css={s.title}>
                    <p>Account</p>
                </div>
                <div>
                    <div css={s.usernameBox}>
                        <span>{loginUser?.data?.username} 님</span>
                    </div>
                    <div css={s.AccountBox}>
                        <div css={s.userNumber}>사원번호 </div>
                        <div>{loginUser?.data?.usercode}</div>
                    </div>
                    <div css={s.AccountBox}>
                        <div css={s.authority}>권한 </div>
                        <div>{loginUser?.data?.userRole.role.roleName}</div>
                    </div>
                </div>
            </div>
            <div css={s.container}>
                <div css={s.title}>
                    <p>Account security</p>
                </div>
                <div css={s.passwordBox}>
                    <div css={s.passwordMiddle}>Password</div>
                    <div>
                        <button css={s.changeButton} onClick={handleOpenPasswordModal}>변경</button>
                    </div>
                </div>
                <div css={s.emailBox}>
                    <div css={s.emailMiddle}>Email</div>
                    <div>{loginUser?.data?.email}</div>
                    <div>
                        <button css={s.changeButton}>변경</button>
                    </div>
                </div>
                <div css={s.phoneNumberBox}>
                    <div css={s.emailMiddle}>Phone-Number</div>
                    <div>{loginUser?.data?.phoneNumber}</div>
                    <div>
                        <button css={s.changeButton}>변경</button>
                    </div>
                </div>
            </div>

            {/* 비밀번호 변경 모달 */}
            {showPasswordModal && (
                <div css={s.modalOverlay}>
                    <div css={s.modalContent}>
                        <h2>비밀번호 변경</h2>
                        <input
                            type="password"
                            placeholder="새 비밀번호"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            css={s.modalInput}
                        />
                        <input
                            type="password"
                            placeholder="새 비밀번호 확인"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            css={s.modalInput}
                        />
                        <div css={s.modalButtons}>
                            <button onClick={handlePasswordChange} css={s.changeButton}>변경</button>
                            <button onClick={handleClosePasswordModal} css={s.cancelButton}>취소</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default AccountPage;
