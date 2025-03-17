/**@jsxImportSource @emotion/react */
import * as s from "./style";
import React from "react";
import MainSidebar from "../../components/common/MainSidebar/MainSidebar";
import NoTitleHeaderMenu from "../../components/NoTitleHeaderMenu/NoTitleHeaderMenu";

function MedicalReceptionPage(props) {
  return (
    <>
        <div>
            <MainSidebar />
        </div>
        <div css={s.layout}>
            <NoTitleHeaderMenu />
        <div css={s.titleGroup}>
            <h1 css={s.title1}>carecheck</h1>
            <p css={s.title2}>진료접수</p>
        </div>
        <main css={s.inputGroup}>
                <div css={s.input}>
                  <label htmlFor="chartNumber">차트번호</label>
                  <input type="text" />
                </div>
                <div css={s.input}>
                  <label htmlFor="department">진료과</label>
                  <input type="text" />
                </div>
                <div css={s.input}>
                  <label htmlFor="exaggeration">진료과장</label>
                  <input type="text" />
                </div>
              </main>
        <footer css={s.button}>
            <button>등록</button>
        </footer>
    </div>
    </>
  );
}

export default MedicalReceptionPage;
