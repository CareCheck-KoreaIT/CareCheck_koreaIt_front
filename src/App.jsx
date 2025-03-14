import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/common/MainLayout/MainLayout";
import MainRoute from "./routes/MainRoute/MainRoute";
import JoinPage from "./pages/JoinPage/JoinPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import { Global } from "@emotion/react";
import { global } from "./styles/global";
import ReceiptPage from "./pages/ReceiptPage/ReceiptPage";
import OrderPage from "./pages/OrderPage/OrderPage";
import TablePage from "./pages/TablePage/TablePage";
import PatientRegistrationPage from "./pages/PatientRegistrationPage/PatientRegistrationPage";
import ScorePayPage from "./pages/ScorePayPage/ScorePayPage";
import EmployeeNumEnrollPage from "./pages/EmployeeNumEnrollPage/EmployeeNumEnrollPage";
import DetailBillPage from "./pages/DetailBillPage/DetailBillPage";
import MembershipJoinPage from "./pages/MembershipJoinPage/MembershipJoinPage";
import InformationPage from "./pages/informationPage/informationPage";
import InformationChangePage from "./pages/InformationChangePage/InformationChangePage";
import MedicalReceptionPage from "./pages/MedicalReceptionPage/MedicalReceptionPage";
import { useUserMeQuery } from "./queries/userQuery";
import AuthRoute from "./routes/AuthRoute/AuthRoute";


function App() {

  useUserMeQuery();

  return (
    <>
      <Global styles={global} />
      <MainLayout>
        <Routes>
          <Route path="/*" element={<MainRoute />} />
          <Route path="/auth/*" element={<AuthRoute />} />
          <Route path="/receipt" element={<ReceiptPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/table" element={<TablePage />} />
          <Route path="/patient" element={<PatientRegistrationPage />} />
          <Route path="/scorepay" element={<ScorePayPage />} />
          <Route path="/employeenum" element={<EmployeeNumEnrollPage />} />
          <Route path="/detailBill" element={<DetailBillPage />} />
          <Route path="/manager" element={<MembershipJoinPage />} />
          <Route path="/information" element={<InformationPage />} />
          <Route path="/InformationChange" element={<InformationChangePage />} />
          <Route path="/MedicalReception" element={<MedicalReceptionPage />} />
        </Routes>
      </MainLayout>
    </>
  );
}

export default App;
