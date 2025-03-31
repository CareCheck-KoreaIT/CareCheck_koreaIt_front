/**@jsxImportSource @emotion/react */
import * as s from "./style";
import { useUserMeQuery } from "../../queries/userQuery";
import MainSidebar from "../../components/common/MainSidebar/MainSidebar";
import NoTitleHeaderMenu from "../../components/NoTitleHeaderMenu/NoTitleHeaderMenu";
import OrderPage from "../../pages/OrderPage/OrderPage";
import ScorePayPage from "../../pages/ScorePayPage/ScorePayPage";
import EmployeeNumEnrollPage from "../../pages/EmployeeNumEnrollPage/EmployeeNumEnrollPage";
import { Route, Routes } from "react-router-dom";
import UserRoute from "../UserRoute/UserRoute";
import NoticeWritePage from "../../pages/NoticeWritePage/NoticeWritePage";
import NoticeLsitPage from "../../pages/NoticeListPage/NoticeListPage";
import AccountRoute from "../AccountRoute/AccountRoute";
import SummaryChartPage from "../../pages/SummaryChartPage/SummaryChartPage";
import SummaryChartUsercodePage from "../../pages/SummaryChartUsercodePage/SummaryChartUsercodePage";
import NoticeModifyPage from "../../pages/NoticeModifyPage/NoticeModifyPage";
import ReceiptListPage from "../../pages/ReceiptListPage/ReceiptListPage";
import MainPage from "../../pages/MainPage/MainPage";
import PaymentRoute from "../PaymentRoute/PaymentRoute";
import PatientRoute from "../PatientRoute/PatientRoute";
import AdmissionRoute from "../AdmissionRoute/AdmissionRoute";
import SummaryRoute from "../SummaryRoute/SummaryRoute";
import NoticeRoute from "../NoticeRoute/NoticeRoute";

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
            <Route path="/payment/*" element={<PaymentRoute />} /> 
            <Route path="/patient/*" element={<PatientRoute />} />
            <Route path="/admission/*" element={<AdmissionRoute/>} />
            <Route path="/summary/*" element={<SummaryRoute />} />
            <Route path="/notice/*" element={<NoticeRoute />} />
            <Route path="/scorepay" element={<ScorePayPage />} />
            <Route path="/employeenum" element={<EmployeeNumEnrollPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default MainRoute;
