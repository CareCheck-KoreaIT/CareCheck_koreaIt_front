/**@jsxImportSource @emotion/react */
import * as s from "./style";
import React, { useEffect, useState } from "react";
import MainSidebar from "../../components/common/MainSidebar/MainSidebar";
import NoTitleHeaderMenu from "../../components/NoTitleHeaderMenu/NoTitleHeaderMenu";
import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useGetSearchDetailBill } from "../../queries/admissionQuery";

function DetailBillPage() {
  const param = useParams();
  const [admDate, setAdmDate] = useState("2025-03-17");
  const detailBillAdmId = useGetSearchDetailBill(Number(param.admId), admDate);
  const queryClient = useQueryClient();
  if (detailBillAdmId.isError) return <div>오류가 발생했습니다.</div>;
  const detailBillData = detailBillAdmId?.data?.data?.[0];
  if (!detailBillData) return <div>데이터가 없습니다.</div>;
  const today = new Date();
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const handleDateOnChange = (e) => {
    setAdmDate(e.target.value);
  };
  return (
    <div css={s.layout}>
      <div>
        <MainSidebar />
      </div>
      <div>
        <header css={s.header}>
          <NoTitleHeaderMenu />
        </header>
        <div css={s.container}>
          <main>
            <h2 css={s.title}>진료비세부내역서</h2>
            <div css={s.patientInfo}>
              <div css={s.patientInfoHead}>
                <div>차트번호</div>
                <div>환자명</div>
                <div>진료일자</div>
              </div>
              <table css={s.patientTable}>
                <tr>
                  <td>{detailBillData.patientId}</td>
                  <td>{detailBillData.patientName}</td>
                  <td>
                    <input
                      type="date"
                      value={admDate}
                      onChange={handleDateOnChange}
                    />
                  </td>
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
                <tbody>
                  {detailBillData.diagnosisOrder.map((order) => (
                    <tr key={order.diagnosisOrderId}>
                      <td>{order.orderCode}</td>
                      <td>{order.orderName}</td>
                      <td>{order.orderPay}</td>
                      <td>{order.orderCount}</td>
                      <td>{order.orderDays}</td>
                      <td>{order.totalOrderPay}</td>
                    </tr>
                  ))}
                </tbody>
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
              <span>
                신청인 {detailBillData.patientName} (환자와의 관계: 본인)의
                요청에 따라
              </span>
              <span>진료비 계산서, 영수증 세부내역서를 발급합니다.</span>
              <span> {dateString}</span>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default DetailBillPage;
