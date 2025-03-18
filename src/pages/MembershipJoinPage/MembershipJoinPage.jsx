/**@jsxImportSource @emotion/react */
import { RiUser3Fill } from 'react-icons/ri';
import * as s from './style';
import { FaLock } from 'react-icons/fa';
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu';

function MembershipJoinPage(props) {
    return (
        <>
            <div css={s.layout}>
                <div>
                    <div css={s.button}>
                        <button>사번등록</button>
                    </div>
                    <div css={s.button}>
                        <button>수가관리</button>
                    </div>
                    <div css={s.button}>
                        <button>오더등록</button>
                    </div>
                    <div css={s.button}>
                        <button>집계현황</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MembershipJoinPage;