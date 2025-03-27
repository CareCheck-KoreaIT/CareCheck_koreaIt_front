/**@jsxImportSource @emotion/react */
import { useQueryClient } from '@tanstack/react-query';
import * as s from './style';
import { useEffect, useState } from "react";
import { RiAdminFill } from 'react-icons/ri';
import { FaUserDoctor, FaUserNurse } from 'react-icons/fa6';
import { BiSupport } from 'react-icons/bi';
import ReactModal from 'react-modal';
import ChangePassrodModal from '../../components/modal/ChangePasswordModal/ChangePasswordModal';
import ChangeEmailModal from '../../components/modal/ChangeEmailModal/ChangeEmailModal';
import ChangePhoneNumberModal from '../../components/modal/ChangePhoneNumberModal/ChangePhoneNumberModal';
import { useNavigate } from 'react-router-dom';
import { useUserMeQuery } from '../../queries/userQuery';

function AccountPage(props) {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const loginUser = queryClient.getQueryData(["userMeQuery"]);
    const userme = useUserMeQuery();

    const [ passwordModalOpen, setPasswordModalOpen ] = useState(false);
    const [ emailModalOpen, setEmailModalOpen ] = useState(false);
    const [ phoneNumberModalOpen, setPhoneNumberModalOpen ] = useState(false);

    const handleMyNoticeButtonOnClick = () => {
        navigate(`/notice/${loginUser?.data?.usercode}`);
    }

    const handleChangePasswordButtonOnClick = () => {
        setPasswordModalOpen(true);
    }
    const handleChangeEmailButtonOnClick = () => {
        setEmailModalOpen(true);
    }
    const handleChangePhoneNumberButtonOnClick = () => {
        setPhoneNumberModalOpen(true);
    }
    
    return (
        <>
            <div css={s.layout}>
                <div css={s.container}>
                    <div css={s.title}>
                        <p>Account</p>
                    </div>
                    <div css={s.accountBox}>
                        <div css={s.profileBox}>
                            {
                                loginUser?.data?.userRole.roleId === 1 &&
                                <RiAdminFill />
                            }
                            {
                                loginUser?.data?.userRole.roleId === 2 &&
                                <FaUserDoctor />
                            }
                            {
                                loginUser?.data?.userRole.roleId === 3 &&
                                <FaUserNurse />
                            }
                            {
                                loginUser?.data?.userRole.roleId === 4 &&
                                <BiSupport />
                            }
                        </div>
                        <div css={s.userInfoBox}>
                            <div css={s.userBox}>
                                <div css={s.usernameBox}>
                                    <span>{loginUser?.data?.username}</span>
                                    <span> 님</span>
                                </div>
                                <div css={s.myNoticeButton}>
                                    <button onClick={handleMyNoticeButtonOnClick}>내가 쓴 게시글</button>
                                </div>
                            </div>
                            <div css={s.AccountBox}>
                                <div css={s.AccountLine}>
                                    <div css={s.infoTitle}>
                                        사 원 번 호
                                    </div>
                                    <div>{loginUser?.data?.usercode}</div>
                                </div>
                                <div css={s.AccountLine}>
                                    <div css={s.infoTitle}>
                                        권 한
                                    </div>
                                    <div>{loginUser?.data?.userRole.role.roleName}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div css={s.container}>
                    <div css={s.title}>
                        <p>Account Security</p>
                    </div>
                    <div css={s.elementBox}>
                        <div css={s.contentBox}>
                            <div>Password</div>
                            <span>비밀번호를 재설정합니다</span>
                        </div>
                        <div>
                            <button css={s.changeButton} onClick={handleChangePasswordButtonOnClick}>변경</button>
                        </div>
                    </div>
                    <div css={s.elementBox}>
                        <div css={s.contentBox}>
                            <div>Email</div>
                            <div>{loginUser?.data?.email}</div>
                        </div>
                        <div>
                            <button css={s.changeButton} onClick={handleChangeEmailButtonOnClick}>변경</button>
                        </div>
                    </div>
                    <div css={s.elementBox}>
                        <div css={s.contentBox}>
                            <div>Phone-Number</div>
                            <div>{loginUser?.data?.phoneNumber}</div>
                        </div>
                        <div>
                            <button css={s.changeButton} onClick={handleChangePhoneNumberButtonOnClick}>변경</button>
                        </div>
                    </div>
                </div>
                <ReactModal 
                    isOpen={passwordModalOpen}
                    onRequestClose={() => setPasswordModalOpen(false)}
                    style={{
                        overlay: {
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "#00000088"
                        },
                        content: {
                            position: "static",
                            boxSizing: "border-box",
                            borderRadius: "1.5rem",
                            width: "60rem",
                        }
                    }}
                    children={<ChangePassrodModal setOpen={setPasswordModalOpen} />}
                />
                <ReactModal 
                    ariaHideApp={false}
                    isOpen={emailModalOpen}
                    onRequestClose={() => setEmailModalOpen(false)}
                    style={{
                        overlay: {
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "#00000088"
                        },
                        content: {
                            position: "static",
                            boxSizing: "border-box",
                            borderRadius: "1.5rem",
                            width: "60rem",
                        }
                    }}
                    children={<ChangeEmailModal setOpen={setEmailModalOpen} />}
                />
                <ReactModal 
                    isOpen={phoneNumberModalOpen}
                    onRequestClose={() => setPhoneNumberModalOpen(false)}
                    style={{
                        overlay: {
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "#00000088"
                        },
                        content: {
                            position: "static",
                            boxSizing: "border-box",
                            borderRadius: "1.5rem",
                            width: "60rem",
                        }
                    }}
                    children={<ChangePhoneNumberModal setOpen={setPhoneNumberModalOpen} />}
                />
            </div>
        </>
    );
}

export default AccountPage;
