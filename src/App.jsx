import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/common/MainLayout/MainLayout";
import MainRoute from "./routes/MainRoute/MainRoute";

function App() {
  return (
    <>
      <MainLayout>
        <Routes>
          <Route path="/*" element={<MainRoute />} />
        </Routes>
      </MainLayout>
    </>
  );
}

export default App;
