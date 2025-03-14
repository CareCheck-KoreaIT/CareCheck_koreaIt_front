/**@jsxImportSource @emotion/react */
import { BsColumnsGap } from "react-icons/bs";
import * as s from "./style";
import React from "react";

function MainSidebar() {
  return (
    <div css={s.sidebar}>
      <header css={s.header}>
        <h2>CareCheck</h2>
      </header>
      <section css={s.section}>
        <div>
          <BsColumnsGap />
          <span>환자등록</span>
        </div>
        <div>
          <BsColumnsGap />
          <span>진료접수</span>
        </div>
        <div>
          <BsColumnsGap />
          <span>접수취소</span>
        </div>
      </section>
      <footer css={s.footer}>
        <div>홍길동님</div>
      </footer>
    </div>
  );
}

export default MainSidebar;
