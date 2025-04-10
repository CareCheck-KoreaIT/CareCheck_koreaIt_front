import { Route, Routes, useNavigate } from "react-router-dom";
import MainLayout from "./components/common/MainLayout/MainLayout";
import MainRoute from "./routes/MainRoute/MainRoute";
import AuthRoute from "./routes/AuthRoute/AuthRoute";
import { Global } from "@emotion/react";
import { global } from "./styles/global";
import { useUserMeQuery } from "./queries/userQuery";

function App() {

  useUserMeQuery();

  return (
    <>
      <Global styles={global} />
      <MainLayout>
        <Routes>
          <Route path="/auth/*" element={<AuthRoute />} />
          <Route path="/*" element={<MainRoute />} />
        </Routes>
      </MainLayout>
    </>
  );
}

export default App;
