import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/common/MainLayout/MainLayout";
import MainRoute from "./routes/MainRoute/MainRoute";
import JoinPage from "./pages/JoinPage/JoinPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import { Global } from "@emotion/react";
import { global } from "./styles/global";
import ReceiptPage from "./pages/ReceiptPage/ReceiptPage";
import OrderPage from "./pages/OrderPage/OrderPage";
import PatientRegistrationPage from "./pages/PatientRegistrationPage/PatientRegistrationPage";

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
          <Route path="/patient" element={<PatientRegistrationPage />} />
        </Routes>
      </MainLayout>
    </>
  );
}

export default App;
