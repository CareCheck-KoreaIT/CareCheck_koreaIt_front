/**@jsxImportSource @emotion/react */
import { IoReceipt } from "react-icons/io5";
import * as s from "./style";
import React, { useEffect, useState } from "react";
import { LiaReceiptSolid } from "react-icons/lia";
import { MdOutlineLocalHospital } from "react-icons/md";
import { ImStatsDots } from "react-icons/im";
import { RiAdminLine } from "react-icons/ri";
import { IoIosLogOut } from "react-icons/io";
import { NavLink, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { headerMenuState } from "../../atoms/Header/headerMenu";
import Swal from "sweetalert2";
import { QueryClient, useQueryClient } from "@tanstack/react-query";

function NoTitleHeaderMenu() {
  const queryClient = useQueryClient();
  const loginUser = queryClient.getQueryData(["userMeQuery"]);
  const navigate = useNavigate();
  const [ headerState, setHeaderState] = useRecoilState(headerMenuState)
  useEffect(()=>{
    console.log("test값 변경", headerState)
  },[headerState])

  const handleLogout = ()=> {
    Swal.fire({
      title: '로그아웃 하시겠습니까?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: '확인',
      cancelButtonText: '취소',
      reverseButtons: true,
    }).then((result)=>{
      if(result.isConfirmed){
        localStorage.removeItem("AccessToken");
        setHeaderState("");
        navigate("/auth/signin");
      }
      return;
    })

  } 
  return (
    
    <header css={s.header}>
      <div css={s.headerMenu} >
        <NavLink to="/patient" className={({ isActive }) => (isActive ? "active" : "")}
        onClick={()=>setHeaderState("접수메뉴변경")}>
            <div css={s.lconStyle}><IoReceipt /></div>
            <span css={s.titleStyle}>접수</span>
        </NavLink>
      </div>
      <div css={s.headerMenu}>
        <NavLink
          to="/paymentlist"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={() => setHeaderState("수납메뉴변경")}
        >
          <div css={s.lconStyle}>
            <LiaReceiptSolid />
          </div>
          <span css={s.titleStyle}>수납</span>
        </NavLink>
      </div>

      <div css={s.headerMenu} >
        <NavLink to={"/admission"} className={({ isActive }) => (isActive ? "active" : "")}
        onClick={()=>setHeaderState("처방메뉴변경")}>
          <div css={s.lconStyle}><MdOutlineLocalHospital /></div>
          <span css={s.titleStyle}>처방</span>
        </NavLink>
      </div>
      <div css={s.headerMenu} >
        <NavLink to="/summary" className={({ isActive }) => (isActive ? "active" : "")}
        onClick={()=>setHeaderState("통계메뉴변경")}>
        <div css={s.lconStyle}><ImStatsDots /></div> 
        <span css={s.titleStyle}>통계</span>
        </NavLink>
      </div>
      <div css={s.headerMenu} >
        <NavLink to="/admin/users" className={({ isActive }) => (isActive ? "active" : "")}
        onClick={()=>setHeaderState("관리자메뉴변경")}>
        <div css={s.lconStyle}><RiAdminLine /></div>
        <span css={s.titleStyle}>관리자</span>
        </NavLink>
      </div>
      <button css={s.logoutBtn} onClick={handleLogout}>
        <IoIosLogOut />
        Logout
      </button>
    </header>
  );
}

export default NoTitleHeaderMenu;
