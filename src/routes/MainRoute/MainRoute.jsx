/**@jsxImportSource @emotion/react */
import * as s from "./style";
import React from "react";
import MainSidebar from "../../components/common/MainSidebar/MainSidebar";
import MainHeader from "../../components/common/MainHeader/MainHeader";
import MainContainer from "../../components/common/MainContainer/MainContainer";
import DetailBillPage from "../../pages/DetailBillPage/DetailBillPage";

function MainRoute() {
  return (
    <div css={s.container}>
      <div css={s.header}>
        <MainHeader />
      </div>
      <div css={s.mainContent}>
        <MainContainer />
      </div>
    </div>
  );
}

export default MainRoute;
