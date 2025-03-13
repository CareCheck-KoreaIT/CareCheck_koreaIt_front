/**@jsxImportSource @emotion/react */
import * as s from "./style";
import React from "react";

function MainHeader() {
  return (
    <div css={s.headContainer}>
      <div>접수</div>
      <div>수납</div>
      <div>처방</div>
      <div>통계</div>
      <div>관리자</div>
      <div>Logout</div>
    </div>
  );
}

export default MainHeader;
