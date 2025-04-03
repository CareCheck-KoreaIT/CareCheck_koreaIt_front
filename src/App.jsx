import { Route, Routes, useNavigate } from "react-router-dom";
import MainLayout from "./components/common/MainLayout/MainLayout";
import MainRoute from "./routes/MainRoute/MainRoute";
import AuthRoute from "./routes/AuthRoute/AuthRoute";
import { Global } from "@emotion/react";
import { global } from "./styles/global";
import { useEffect, useState } from "react";
import { useUserMeQuery } from "./queries/userQuery";

function App() {
  const navigate = useNavigate();
  const [isAuthChecked, setIsAuthChecked] = useState(false);
  const token = localStorage.getItem("AccessToken");

  useUserMeQuery();

  useEffect(() => {
    if (!token) {
      navigate("/auth/signin");
    }
    setIsAuthChecked(true);
  }, [navigate, token]);

  useEffect(() => {
    const disableZoom = (event) => {
      if (event.ctrlKey) {
        event.preventDefault();
      }
    };

    const disableKeyboardZoom = (event) => {
      if (event.ctrlKey && ["+", "-", "0"].includes(event.key)) {
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

  if (!isAuthChecked) return null;

  return (
    <>
      <Global styles={global} />
      <MainLayout>
        <Routes>
          {token ? (
            <Route path="/*" element={<MainRoute />} />
          ) : (
            <Route path="/auth/*" element={<AuthRoute />} />
          )}
        </Routes>
      </MainLayout>
    </>
  );
}

export default App;
