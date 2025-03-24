/**@jsxImportSource @emotion/react */
import { IoReceipt } from "react-icons/io5";
import * as s from "./style";
import React from "react";
import { LiaReceiptSolid } from "react-icons/lia";
import { MdOutlineLocalHospital } from "react-icons/md";
import { ImStatsDots } from "react-icons/im";
import { RiAdminLine } from "react-icons/ri";
import { IoIosLogOut } from "react-icons/io";
import { NavLink } from "react-router-dom";


function NoTitleHeaderMenu() {
  return (
    <header css={s.header}>
      <div css={s.headerMenu} className={({ isActive }) => (isActive ? "active" : "")}>
        <NavLink to="/patient" >
            <div css={s.lconStyle}><IoReceipt /></div>
            <span css={s.titleStyle}>접수</span>
        </NavLink>
      </div>
      <div css={s.headerMenu}>
        <NavLink to="/receipt/" className={({ isActive }) => (isActive ? "active" : "")} >
        <div css={s.lconStyle}><LiaReceiptSolid /></div>
        <span css={s.titleStyle}>수납</span>
        </NavLink>
      </div>
      <div css={s.headerMenu}>
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
          <div css={s.lconStyle}><MdOutlineLocalHospital /></div>
          <span css={s.titleStyle}>처방</span>
        </NavLink>
      </div>
      <div css={s.headerMenu}>
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        <div css={s.lconStyle}><ImStatsDots /></div> 
        <span css={s.titleStyle}>통계</span>
        </NavLink>
      </div>
      <div css={s.headerMenu}>
        <NavLink to="/notice/write" className={({ isActive }) => (isActive ? "active" : "")}>
        <div css={s.lconStyle}><RiAdminLine /></div>
        <span css={s.titleStyle}>관리자</span>
        </NavLink>
      </div>
      <button css={s.logoutBtn}>
        <IoIosLogOut />
        Logout
      </button>
    </header>
  );
}

export default NoTitleHeaderMenu;
