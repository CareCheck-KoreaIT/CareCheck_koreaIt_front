/**@jsxImportSource @emotion/react */
import * as s from "./style";
import React from "react";
import MainSidebar from "../../components/common/MainSidebar/MainSidebar";

function DetailBillPage() {
  return (
    <div css={s.layout}>
      <MainSidebar />
      <div>
        <header>헤더가 입력됩니다.</header>
        <div css={s.container}>
          <main>
            <h2 css={s.title}>진료비세부내역서</h2>
            <div css={s.patientInfo}>
              <div css={s.patientInfoHead}>
                <div>차트번호</div>
                <div>환자명</div>
                <div>접수시간</div>
              </div>
              <table css={s.patientTable}>
                <tr>
                  <td>00000001</td>
                  <td>홍길동</td>
                  <td>2025/03/13 16:00</td>
                </tr>
              </table>
            </div>

            <div css={s.billDetailInfo}>
              <div css={s.billDetailHead}>
                <div>코드</div>
                <div>명칭</div>
                <div>금액</div>
                <div>횟수</div>
                <div>일수</div>
                <div>총액</div>
              </div>
              <table css={s.billDetailTable}>
                <tr>
                  <td>AA156</td>
                  <td>초진진찰료</td>
                  <td>18400</td>
                  <td>1</td>
                  <td>1</td>
                  <td>18400</td>
                </tr>
                <tr>
                  <td>AA156</td>
                  <td>초진진찰료</td>
                  <td>18400</td>
                  <td>1</td>
                  <td>1</td>
                  <td>18400</td>
                </tr>
                <tr>
                  <td>AA156</td>
                  <td>초진진찰료</td>
                  <td>18400</td>
                  <td>1</td>
                  <td>1</td>
                  <td>18400</td>
                </tr>
                <tr>
                  <td>AA156</td>
                  <td>초진진찰료</td>
                  <td>18400</td>
                  <td>1</td>
                  <td>1</td>
                  <td>18400</td>
                </tr>
                <tr>
                  <td>AA156</td>
                  <td>초진진찰료</td>
                  <td>18400</td>
                  <td>1</td>
                  <td>1</td>
                  <td>18400</td>
                </tr>
              </table>
            </div>
            <div css={s.totalPayInfo}>
              <div css={s.totalPayHead}>
                <div>총액</div>
              </div>
              <table css={s.totalPayTable}>
                <tr>
                  <td>50000</td>
                </tr>
              </table>
            </div>
            <div css={s.script}>
              <span>신청인 홍길동 (환자와의 관계: 본인)의 요청에 따라</span>
              <span>진료비 계산서, 영수증 세부내역서를 발급합니다.</span>
              <span>2025년 03월 13일</span>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default DetailBillPage;
