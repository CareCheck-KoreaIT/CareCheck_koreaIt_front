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

function App() {
  return (
    <>

      <Global styles={global}/>
      <MainLayout>
        <Routes>
          <Route path="/*" element={<MainRoute />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/receipt" element={<ReceiptPage />} />
          <Route path="/join" element={<JoinPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/table" element={<TablePage />} />
          <Route path="/patient" element={<PatientRegistrationPage />} />
          <Route path="/scorepay" element={<ScorePayPage />} />
          <Route path="/employeenum" element={<EmployeeNumEnrollPage />} />
        </Routes>
      </MainLayout>
    </>
  );
}

export default App;
