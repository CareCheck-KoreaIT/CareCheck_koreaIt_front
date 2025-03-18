/**@jsxImportSource @emotion/react */
import { IoReceipt } from "react-icons/io5";
import MainContainer from "../../components/common/MainContainer/MainContainer";
import MainSidebar from "../../components/common/MainSidebar/MainSidebar";
import * as s from "./style";
import React from "react";
import NoTitleHeaderMenu from "../../components/NoTitleHeaderMenu/NoTitleHeaderMenu";

const waitingList = "진료 대기자 명단";
const patientInfo = "환자정보";
const diagnosisRegister = "상병 등록";
const prescriptionRegister = "처방 등록";

function TablePage() {
  return (
    <>
      <div>
        <MainSidebar />
      </div>
      <div css={s.layout}>
        <NoTitleHeaderMenu />
        <div css={s.parent}>
          <div>
            <table css={s.headerTable}>
              <tr>
                <td>진료 대기자 명단</td>
              </tr>
            </table>

            <table>
              <tr css={s.waitingList}>
                <td>차트번호</td>
                <td>환자명</td>
                <td>나이</td>
              </tr>
            </table>
            <table css={s.t1}>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </div>
          {/*진료 대기자 명단 끝*/}
          <div css={s.child2}>
            <div>
              <table css={s.headerTable}>
                <tr>
                  <td>환자정보</td>
                </tr>
              </table>
            </div>

            <div>
              <table>
                <tr css={s.patientInfo}>
                  <td>차트번호</td>
                  <td>환자명</td>
                  <td>나이</td>
                  <td>키</td>
                  <td>몸무게</td>
                </tr>
              </table>

              <table css={s.t1}>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </table>
            </div>
            {/*환자정보 끝*/}
            <div>
              <div>
                <table css={s.headerTable}>
                  <tr>
                    <td>상병 등록</td>
                  </tr>
                </table>
              </div>

              <div>
                <table>
                  <tr css={s.diagnosisRegister}>
                    <td>상병코드</td>
                    <td>병명</td>
                  </tr>
                </table>

                <table css={s.t1}>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                </table>
              </div>
            </div>
            {/*상병등록 끝*/}
            <div>
              <div>
                <table css={s.headerTable}>
                  <tr>
                    <td>처방 등록</td>
                  </tr>
                </table>
              </div>

              <div>
                <table>
                  <tr css={s.prescriptionRegister}>
                    <td>처방코드</td>
                    <td>처방명</td>
                    <td>용량</td>
                    <td>횟수</td>
                    <td>일수</td>
                    <td>용법</td>
                  </tr>
                </table>

                <table css={s.t1}>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TablePage;
