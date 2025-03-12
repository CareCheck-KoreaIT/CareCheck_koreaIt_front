/**@jsxImportSource @emotion/react */
import * as s from "./style";
import React from "react";

function MainSidebar() {
  return (
    <div css={s.sidebar}>
      <header css={s.header}>
        <h2>CareCheck</h2>
      </header>
      <section css={s.section}>
        <div>접수</div>
        <div>수납</div>
        <div>관리자</div>
      </section>
      <footer>
        <div>logout</div>
      </footer>
    </div>
  );
}

export default MainSidebar;
