/**@jsxImportSource @emotion/react */
import { useQueryClient } from '@tanstack/react-query';
import * as s from './style';
// 추후 수정 예정
function AccountPage(props) {
    const queryClient = useQueryClient();
    const loginUser = queryClient.getQueryData(["userMeQuery"]);

    return (
        <>
            <div css={s.container}>
                <div css={s.title}>
                <p>정보 변경</p>
                </div>
                <div css={s.informationContainer}>
                    <div css={s.informationBox}>
                        <div css={s.usernameBox}>
                        <p>{loginUser?.data?.username} 님</p>
                        <p>사번: {loginUser?.data?.usercode}</p>
                        <p>권한: {loginUser?.data?.userRole.role.roleName}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AccountPage;