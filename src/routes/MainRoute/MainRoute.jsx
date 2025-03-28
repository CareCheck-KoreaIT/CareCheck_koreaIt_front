/**@jsxImportSource @emotion/react */
import * as s from "./style";
import { useUserMeQuery } from "../../queries/userQuery";
import MainSidebar from "../../components/common/MainSidebar/MainSidebar";
import NoTitleHeaderMenu from "../../components/NoTitleHeaderMenu/NoTitleHeaderMenu";
import OrderPage from "../../pages/OrderPage/OrderPage";
import TablePage from "../../pages/TablePage/TablePage";
import ScorePayPage from "../../pages/ScorePayPage/ScorePayPage";
import EmployeeNumEnrollPage from "../../pages/EmployeeNumEnrollPage/EmployeeNumEnrollPage";
import DetailBillPage from "../../pages/DetailBillPage/DetailBillPage";
import MembershipJoinPage from "../../pages/MembershipJoinPage/MembershipJoinPage";
import { Route, Routes } from "react-router-dom";
import UserRoute from "../UserRoute/UserRoute";
import NoticeWritePage from "../../pages/NoticeWritePage/NoticeWritePage";
import NoticeLsitPage from "../../pages/NoticeListPage/NoticeListPage";
import AccountRoute from "../AccountRoute/AccountRoute";
import PaymentCertificatePage from "../../pages/PaymentCertificatePage/PaymentCertificatePage";
import SummaryChartPage from "../../pages/SummaryChartPage/SummaryChartPage";
import SummaryChartUsercodePage from "../../pages/SummaryChartUsercodePage/SummaryChartUsercodePage";
import NoticeMyListPage from "../../pages/NoticeMyListpage/NoticeMyListPage";
import NoticeModifyPage from "../../pages/NoticeModifyPage/NoticeModifyPage";
import ReceiptListPage from "../../pages/ReceiptListPage/ReceiptListPage";
import MainPage from "../../pages/MainPage/MainPage";
import PaymentRoute from "../PaymentRoute/PaymentRoute";
import PatientRoute from "../PatientRoute/PatientRoute";

function MainRoute() {
  useUserMeQuery();

  return (
    <>
      <div css={s.containerStyle}>
        <MainSidebar />
        <div css={s.contentStyle}>
          <NoTitleHeaderMenu />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/account/*" element={<AccountRoute />} />
            <Route path="/admin/*" element={<UserRoute />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/payment" element={<PaymentRoute />} /> 
            <Route path="/patient" element={<PatientRoute />} />
            <Route
              path="/admission/:admissionId/certificate"
              element={<PaymentCertificatePage />}
            />

            <Route
              path={`/admission/:admissionId/detailbill`}
              element={<DetailBillPage />}
            />

            <Route path="/admission/table" element={<TablePage />} />
            <Route path="/manager" element={<MembershipJoinPage />} />

            <Route path="/scorepay" element={<ScorePayPage />} />
            <Route path="/employeenum" element={<EmployeeNumEnrollPage />} />
            <Route path="/notice/write" element={<NoticeWritePage />} />
            <Route path="/notice/list" element={<NoticeLsitPage />} />
            <Route path="/notice/:usercode" element={<NoticeMyListPage />} />
            <Route
              path="/notice/:usercode/modify/:noticeId"
              element={<NoticeModifyPage />}
            />
            <Route path="/admission/:usercode/" element={<TablePage />} />
            <Route path="/manager" element={<MembershipJoinPage />} />
            <Route path="/summary" element={<SummaryChartPage />} />
            <Route
              path="/summary/usercode"
              element={<SummaryChartUsercodePage />}
            />
            <Route path="/payment/list" element={<ReceiptListPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default MainRoute;
