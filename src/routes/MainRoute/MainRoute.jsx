/**@jsxImportSource @emotion/react */
import * as s from "./style";
import { useUserMeQuery } from "../../queries/userQuery";
import MainSidebar from "../../components/common/MainSidebar/MainSidebar";
import NoTitleHeaderMenu from "../../components/NoTitleHeaderMenu/NoTitleHeaderMenu";
import ScorePayPage from "../../pages/ScorePayPage/ScorePayPage";
import EmployeeNumEnrollPage from "../../pages/EmployeeNumEnrollPage/EmployeeNumEnrollPage";
import { Route, Routes } from "react-router-dom";
import UserRoute from "../UserRoute/UserRoute";
import AccountRoute from "../AccountRoute/AccountRoute";
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
            <Route path="/payment/*" element={<PaymentRoute />} /> 
            <Route path="/patient/*" element={<PatientRoute />} />
            <Route path="/admission/*" element={<AdmissionRoute/>} />
            <Route path="/summary/*" element={<SummaryRoute />} />
            <Route path="/notice/*" element={<NoticeRoute />} />
            <Route path="/employeenum" element={<EmployeeNumEnrollPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default MainRoute;
