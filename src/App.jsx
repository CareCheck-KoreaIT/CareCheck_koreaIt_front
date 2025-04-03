import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/common/MainLayout/MainLayout";
import MainRoute from "./routes/MainRoute/MainRoute";
import AuthRoute from "./routes/AuthRoute/AuthRoute";
import { Global } from "@emotion/react";
import { global } from "./styles/global";
import { useEffect } from "react";
import { useUserMeQuery } from "./queries/userQuery";
import { useQueryClient } from "@tanstack/react-query";

function App() {
  useUserMeQuery();

  useEffect(() => {
    // 🔹 Ctrl + 마우스 휠을 이용한 줌 방지
    const disableZoom = (event) => {
      if (event.ctrlKey) {
        event.preventDefault();
      }
    };

    // 🔹 Ctrl + + / - 키 사용한 줌 방지
    const disableKeyboardZoom = (event) => {
      if (
        event.ctrlKey &&
        (event.key === "+" || event.key === "-" || event.key === "0")
      ) {
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
          <Route path="/auth/*" element={<AuthRoute />} />
          <Route path="/*" element={<MainRoute />} />
        </Routes>
      </MainLayout>
    </>
  );
}
export default App;
