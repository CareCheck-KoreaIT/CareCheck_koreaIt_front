/**@jsxImportSource @emotion/react */
import MainSidebar from '../../components/common/MainSidebar/MainSidebar';
import NoTitleHeaderMenu from '../../components/NoTitleHeaderMenu/NoTitleHeaderMenu';
import * as s from './style';
import React from 'react';

function Yeongsujeungpage(props) {
    return (
        <>
        <div>
            <MainSidebar />
        </div>
        <div css={s.layout}>
            <NoTitleHeaderMenu />
                <div>
                    <table css={s.table}>
                        <tr>
                            <td colspan="4" css={s.Yeongsujeung}>
                                <div css={s.YeongsujeungDiv}>영수증</div>
                            </td>
                        </tr>
                        <tr>
                            <td css={s.Number}>환자번호</td>
                            <td></td>
                            <td css={s.Department}>진료과</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td css={s.Receipt}>영수액</td>
                            <td colspan="3" css={s.money}>
                                <span>일금</span>
                                <span class="right">원(₩</span>
                                <span></span>
                                <span>)</span>
                            </td>
                        </tr>
                        <tr>
                            <td css={s.Detail}>내용</td>
                            <td colspan="3"></td>
                        </tr>
                        <tr>
                            <td colspan="4" css={s.note}>
                                <span>위 금액을 영수함</span>
                                <div>
                                    <span>202</span>
                                    <span> . . .</span>
                                </div>
                                <div css={s.bottomSpace}>
                                    <span>담당확인:</span>
                                    <span></span>
                                    <span>(인)</span>
                                </div>
                                <div>이 계산서는 소득공제 납입 증명서로 사용할 수 있습니다.</div>
                                <div>담당자 확인이 없는 것은 무효입니다.</div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Yeongsujeungpage;