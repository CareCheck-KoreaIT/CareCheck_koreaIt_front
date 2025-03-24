/**@jsxImportSource @emotion/react */
import { IoReceipt } from "react-icons/io5";
import * as s from "./style";
import React, { useEffect, useState } from "react";
import { LiaReceiptSolid } from "react-icons/lia";
import { MdOutlineLocalHospital } from "react-icons/md";
import { ImStatsDots } from "react-icons/im";
import { RiAdminLine } from "react-icons/ri";
import { IoIosLogOut } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { useRecoilState } from "recoil";
import { headerMenuState } from "../../atoms/Header/headerMenu";


function NoTitleHeaderMenu() {
  const [headerState, setHeaderState] = useRecoilState(headerMenuState)
  useEffect(()=>{
    console.log("test값 변경", headerState)
  },[headerState])
  return (
    
    <header css={s.header}>
      <div css={s.headerMenu} onClick={()=>setHeaderState("접수메뉴변경")}>
        <NavLink to="/patient" className={({ isActive }) => (isActive ? "active" : "")} >
            <div css={s.lconStyle}><IoReceipt /></div>
            <span css={s.titleStyle}>접수</span>
        </NavLink>
      </div>
      <div css={s.headerMenu} onClick={()=>setHeaderState("수납메뉴변경")}>
        <NavLink to="/receipt/" className={({ isActive }) => (isActive ? "active" : "")} >
        <div css={s.lconStyle}><LiaReceiptSolid /></div>
        <span css={s.titleStyle}>수납</span>
        </NavLink>
      </div>
      <div css={s.headerMenu} onClick={()=>setHeaderState("처방메뉴변경")}>
        <NavLink to="/notice/" className={({ isActive }) => (isActive ? "active" : "")}>
          <div css={s.lconStyle}><MdOutlineLocalHospital /></div>
          <span css={s.titleStyle}>처방</span>
        </NavLink>
      </div>
      <div css={s.headerMenu} onClick={()=>setHeaderState("통계메뉴변경")}>
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        <div css={s.lconStyle}><ImStatsDots /></div> 
        <span css={s.titleStyle}>통계</span>
        </NavLink>
      </div>
      <div css={s.headerMenu} onClick={()=>setHeaderState("관리자메뉴변경")}>
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
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
