import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/common/MainLayout/MainLayout";
import MainRoute from "./routes/MainRoute/MainRoute";
import JoinPage from "./pages/JoinPage/JoinPage";
import { Global } from "@emotion/react";
import { global } from "./styles/global";
import OrderPage from "./pages/OrderPage/OrderPage";
import DetailBillPage from "./pages/DetailBillPage/DetailBillPage";

function App() {
  return (
    <>
      <Global styles={global} />
      <MainLayout>
        <Routes>
          <Route path="/*" element={<MainRoute />} />
          <Route path="/join" element={<JoinPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/bill/detail" element={<DetailBillPage />} />
        </Routes>
      </MainLayout>
    </>
  );
}

export default App;
