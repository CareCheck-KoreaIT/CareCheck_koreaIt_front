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

function EmployeeNumEnrollPage(props) {
  return (
    <div css={s.layout}>
      {/* <header css={s.header}>
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
      </header> */}
      <HeaderMenu />
      <div css={s.titleGroup}>
        <h1 css={s.title1}>carecheck</h1>
        <p css={s.title2}>사번 등록</p>
      </div>
      <main css={s.inputGroup}>
        <div css={s.input}>
          <label htmlFor="employeeId">이름</label>
          <input type="text" />
        </div>
        <div css={s.input}>
          <label htmlFor="password">비밀번호</label>
          <input />
        </div>
        <div css={s.input}>
          <label htmlFor="email">이메일</label>
          <input type="email" />
          <select name="" id=""></select>
        </div>
        <div css={s.input}>
          <label htmlFor="phoneNumber">휴대전화</label>
          <input type="text" placeholder="010-1234-5678" />
        </div>
        <div css={s.input2}>
          <label htmlFor="authority">권한</label>
          <select name="" id=""></select>
        </div>
      </main>
    </div>
  );
}

export default EmployeeNumEnrollPage;
