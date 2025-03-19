/**@jsxImportSource @emotion/react */
import * as s from "./style";
import MainHeader from "../../components/common/MainHeader/MainHeader";
import MainContainer from "../../components/common/MainContainer/MainContainer";
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

function MainRoute() {
  useUserMeQuery();

  return (
    <>
      <div css={s.containerStyle}>
        <MainSidebar />
        <div css={s.contentStyle}>
          <NoTitleHeaderMenu />
          <Routes>
            <Route path="/admin/*" element={<UserRoute />} />
            <Route path="/receipt" element={<ReceiptPage />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/table" element={<TablePage />} />
            <Route path="/patient" element={<PatientRegistrationPage />} />
            <Route path="/scorepay" element={<ScorePayPage />} />
            <Route path="/employeenum" element={<EmployeeNumEnrollPage />} />
            <Route
              path="/admission/:admId/detailBill"
              element={<DetailBillPage />}
            />
            <Route path="/manager" element={<MembershipJoinPage />} />
            <Route
              path="/InformationChange"
              element={<InformationChangePage />}
            />
            <Route
              path="/MedicalReception"
              element={<MedicalReceptionPage />}
            />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default MainRoute;
