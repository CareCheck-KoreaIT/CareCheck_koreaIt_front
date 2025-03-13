/**@jsxImportSource @emotion/react */
import * as s from "./style";
import MainHeader from "../../components/common/MainHeader/MainHeader";
import DetailBillPage from "../../pages/DetailBillPage/DetailBillPage";

function MainRoute() {
  return (
    <div css={s.container}>
      <div css={s.header}>
        <MainHeader />
      </div>
      <div css={s.mainContent}>
        <DetailBillPage />
      </div>
    </div>
  );
}

export default MainRoute;
