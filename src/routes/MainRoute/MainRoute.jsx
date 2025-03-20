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
import InformationChangePage from "../../pages/InformationChangePage/InformationChangePage";
import MedicalReceptionPage from "../../pages/MedicalReceptionPage/MedicalReceptionPage";
import { Route, Routes } from "react-router-dom";
import UserRoute from "../UserRoute/UserRoute";
import NoticeWritePage from "../../pages/NoticeWritePage/NoticeWritePage";
import AccountRoute from "../AccountRoute/AccountRoute";
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
            <Route path="/receipt" element={<ReceiptPage />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/patient" element={<PatientRegistrationPage />} />
            <Route path="/scorepay" element={<ScorePayPage />} />
            <Route path="/employeenum" element={<EmployeeNumEnrollPage />} />
            <Route path="/noticewrite" element={<NoticeWritePage />} />

            <Route
              path="/:usercode/admission/:admissionId/detailBill"
              element={<DetailBillPage />}
            />
            <Route path="/manager" element={<MembershipJoinPage />} />
            <Route
              path="/InformationChange"
              element={<InformationChangePage />}
            />
            <Route
              path="/:usercode/admission/:admissionId/table"
              element={<TablePage />}
            />
            <Route
              path="/MedicalReception"
              element={<MedicalReceptionPage />}
            />
        </div>
      </div>
    </>
  );
}

export default MainRoute;
