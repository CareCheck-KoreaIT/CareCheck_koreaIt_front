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
import NoticeMyListPage from "../../pages/NoticeMyListpage/NoticeMyListPage";
import AdmPatientVital from "../../components/TablePageComponents/AdmPatientViatal/AdmPatientVital";


function MainRoute() {
  useUserMeQuery();

  return (
    <>
      <div css={s.containerStyle}>
        <MainSidebar />
        <div css={s.contentStyle}>
          <NoTitleHeaderMenu />
          <Routes>
            <Route path="/account/*" element={<AccountRoute />} />
            <Route path="/admin/*" element={<UserRoute />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/patient" element={<PatientRegistrationPage />} />
            <Route path="/scorepay" element={<ScorePayPage />} />
            <Route path="/employeenum" element={<EmployeeNumEnrollPage />} />
            <Route path="/notice/write" element={<NoticeWritePage />} />
            <Route path="/notice/list" element={<NoticeLsitPage />} />
            <Route path="/notice/:usercode" element={<NoticeMyListPage />} />
            <Route path="/:usercode/admission/:admissionId/certificate" element={<PaymentCertificatePage />} />

            <Route 
              path="/receipt" element={<ReceiptPage />} 
            
            />
            
            <Route
              path="/:usercode/admission/:admissionId/detailBill"
              element={<DetailBillPage />}
            />
            <Route path="/:usercode/admission/table" element={<TablePage />} />
            <Route path="/manager" element={<MembershipJoinPage />} />

            <Route
              path="/MedicalReception"
              element={<MedicalReceptionPage />}
            />
            <Route path="/test" element={<AdmPatientVital />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default MainRoute;
