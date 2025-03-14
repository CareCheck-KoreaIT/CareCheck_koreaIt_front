/**@jsxImportSource @emotion/react */
import { IoReceipt } from "react-icons/io5";
import * as s from "./style";
import React from "react";
import { LiaReceiptSolid } from "react-icons/lia";
import { MdOutlineLocalHospital } from "react-icons/md";
import { ImStatsDots } from "react-icons/im";
import { RiAdminLine } from "react-icons/ri";
import { IoIosLogOut } from "react-icons/io";

function NoTitleHeaderMenu() {
  return (
    <header css={s.header}>
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
  );
}

export default NoTitleHeaderMenu;
