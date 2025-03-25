/**@jsxImportSource @emotion/react */
import * as s from "./style";
import React from "react";
import { IoReceipt } from "react-icons/io5";
import { LiaReceiptSolid } from "react-icons/lia";
import { MdOutlineLocalHospital } from "react-icons/md";
import { ImStatsDots } from "react-icons/im";
import { RiAdminLine } from "react-icons/ri";
import { IoIosLogOut } from "react-icons/io";
import HeaderMenu from "../../components/HeaderMenu/HeaderMenu";

function ScorePayPage(props) {
  return (
    <div css={s.layout}>
      <div css={s.titleGroup}>
        <h1 css={s.title1}>carecheck</h1>
        <p css={s.title2}>점수당 단가</p>
      </div>
      <main css={s.inputGroup}>
        <div css={s.input}>
          <label htmlFor="scorePay">단가점수: </label>
          <input type="text" />
        </div>
      </main>
      <footer css={s.button}>
        <button>정보 변경</button>
      </footer>
    </div>
  );
}

export default ScorePayPage;
