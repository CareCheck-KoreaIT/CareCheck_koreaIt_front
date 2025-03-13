import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/common/MainLayout/MainLayout";
import MainRoute from "./routes/MainRoute/MainRoute";
import JoinPage from "./pages/JoinPage/JoinPage";
import { Global } from "@emotion/react"
import { global } from "./styles/global"
import OrderPage from "./pages/OrderPage/OrderPage";

function App() {
  return (
    <>
      <Global styles={global} />
      <MainLayout>
        <Routes>
          <Route path="/*" element={<MainRoute />} />
          <Route path="/join" element={<JoinPage />} />
          <Route path="/order" element={<OrderPage />} />
        </Routes>
      </MainLayout>
    </>
  );
}

export default App;
