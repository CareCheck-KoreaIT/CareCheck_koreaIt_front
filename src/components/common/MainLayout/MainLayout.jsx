/**@jsxImportSource @emotion/react */
import * as s from "./style";
import React from "react";

function MainLayout({ children }) {
  return (
    <div css={s.layout}>
      <div css={s.container}>{children}</div>
    </div>
  );
}

export default MainLayout;
