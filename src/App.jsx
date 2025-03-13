import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/common/MainLayout/MainLayout";
import MainRoute from "./routes/MainRoute/MainRoute";
import LoginPage from "./pages/LoginPage/LoginPage";
import { Global } from "@emotion/react";
import { global } from "./styles/global";
import ReceiptPage from "./pages/ReceiptPage/ReceiptPage";

function App() {
  return (
    <>
      <Global styles={global}/>
      <MainLayout>
        <Routes>
          <Route path="/*" element={<MainRoute />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/receipt" element={<ReceiptPage />} />
        </Routes>
      </MainLayout>
    </>
  );
}

export default App;
