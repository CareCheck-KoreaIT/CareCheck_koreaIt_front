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
        <div>환자등록</div>
        <div>진료접수</div>
        <div>접수취소</div>
      </section>
      <footer css={s.footer}>
        <div>logout</div>
      </footer>
    </div>
  );
}

export default MainSidebar;
