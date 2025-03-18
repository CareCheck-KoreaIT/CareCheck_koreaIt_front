import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/common/MainLayout/MainLayout";
import MainRoute from "./routes/MainRoute/MainRoute";
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
import AuthRoute from "./routes/AuthRoute/AuthRoute";
import StatsPage from "./pages/StatsPage/StatsPage";
import { useEffect } from "react";


function App() {
  useEffect(() => {
    // 🔹 Ctrl + 마우스 휠을 이용한 줌 방지
    const disableZoom = (event) => {
      if (event.ctrlKey) {
        event.preventDefault();
      }
    };

    // 🔹 Ctrl + + / - 키 사용한 줌 방지
    const disableKeyboardZoom = (event) => {
      if (event.ctrlKey && (event.key === "+" || event.key === "-" || event.key === "0")) {
        event.preventDefault();
      }
    };

    document.addEventListener("wheel", disableZoom, { passive: false });
    document.addEventListener("keydown", disableKeyboardZoom);

    return () => {
      document.removeEventListener("wheel", disableZoom);
      document.removeEventListener("keydown", disableKeyboardZoom);
    };
  }, []);

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
          <Route path="/stats" element={<StatsPage />} />
        </Routes>
      </MainLayout>
    </>
  );
}  
export default App;
