/**@jsxImportSource @emotion/react */
import * as s from "./style";
import { useUserMeQuery } from "../../queries/userQuery";
import MainSidebar from "../../components/common/MainSidebar/MainSidebar";
import NoTitleHeaderMenu from "../../components/NoTitleHeaderMenu/NoTitleHeaderMenu";
import ReceiptPage from "../../pages/ReceiptPage/ReceiptPage";
import OrderPage from "../../pages/OrderPage/OrderPage";
import TablePage from "../../pages/TablePage/TablePage";
import PatientRegistrationPage from "../../pages/PatientRegistrationPage/PatientRegistrationPage";
import ScorePayPage from "../../pages/ScorePayPage/ScorePayPage";
import EmployeeNumEnrollPage from "../../pages/EmployeeNumEnrollPage/EmployeeNumEnrollPage";
import DetailBillPage from "../../pages/DetailBillPage/DetailBillPage";
import MembershipJoinPage from "../../pages/MembershipJoinPage/MembershipJoinPage";
import MedicalReceptionPage from "../../pages/MedicalReceptionPage/MedicalReceptionPage";
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

            {/* 환자 등록 */}
            <Route path="/patient" element={<PatientRegistrationPage />} />
            {/* 환자 진료접수 */}
            <Route path="/patient/medical-reception" element={<MedicalReceptionPage />}/>
            {/* 접수된 환자 리스트 */}
            <Route path="/patient/admission-list" element={<ReceiptPage />} />
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
            <Route path="/admission/:usercode/table" element={<TablePage />} />
            <Route path="/manager" element={<MembershipJoinPage />} />
            <Route path="/summary/" element={<SummaryChartPage />} />
            <Route
              path="/summary/usercode"
              element={<SummaryChartUsercodePage />}
            />
            <Route path="/paymentlist" element={<ReceiptListPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default MainRoute;
