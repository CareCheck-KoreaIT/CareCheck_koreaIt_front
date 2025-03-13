/**@jsxImportSource @emotion/react */
import * as s from './style';
import React from 'react';
import { IoReceipt } from "react-icons/io5";
import { LiaReceiptSolid } from "react-icons/lia";
import { MdOutlineLocalHospital } from "react-icons/md";
import { ImStatsDots } from "react-icons/im";
import { RiAdminLine } from "react-icons/ri";
import { IoIosLogOut } from "react-icons/io";

function ScorePayPage(props) {
  return (
    <div css={s.layout}>
      <header css={s.header}>
        <h1>CareCheck</h1>
        <div css={s.headerMenu}>
          <IoReceipt />
          접수
        </div>
        <div css={s.headerMenu}>
          <LiaReceiptSolid />
          수납
        </div>
        <div css={s.headerMenu}>
          <MdOutlineLocalHospital />
          처방
        </div>
        <div css={s.headerMenu}>
          <ImStatsDots />
          통계
        </div>
        <div css={s.headerMenu}>
          <RiAdminLine />
          관리자
        </div>
        <button css={s.logoutBtn}>
          <IoIosLogOut />
          Logout
        </button>
      </header>
      <div css={s.titleGroup}>
        <h1 css={s.title1}>carecheck</h1>
        <p css={s.title2}>점수당 단가</p>
      </div>
      <main css={s.inputGroup}>
        <div css={s.input}>
          <label htmlFor="scorePay">단가점수: </label>
          <input type="text"/>
        </div>
      </main>
      <footer css={s.button}>
        <button>정보 변경</button>
      </footer>
    </div>
  );
}

export default ScorePayPage;