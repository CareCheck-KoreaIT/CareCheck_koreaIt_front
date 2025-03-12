/**@jsxImportSource @emotion/react */
import * as s from "./style";
import React from "react";
import MainSidebar from "../../components/common/MainSidebar/MainSidebar";
import MainHeader from "../../components/common/MainHeader/MainHeader";
import MainContainer from "../../components/common/MainContainer/MainContainer";

function MainRoute() {
  return (
    <div css={s.layout}>
      <div css={s.sidebar}>
        <MainSidebar />
      </div>
      <div css={s.container}>
        <div css={s.header}>
          <MainHeader />
        </div>
        <div css={s.mainContent}>
          <MainContainer />
        </div>
      </div>
    </div>
  );
}

export default MainRoute;
