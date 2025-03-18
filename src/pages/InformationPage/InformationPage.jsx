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

function InformationPage(props) {
  return (
    <div css={s.layout}>
      <div css={s.titleGroup}>
        <h1 css={s.title1}>carecheck</h1>
        <p css={s.title2}>정보입력</p>
      </div>
      <main css={s.inputGroup}>
        <div css={s.input}>
          <label htmlFor="cleanup">사원번호</label>
          <input type="text" />
        </div>
        <div css={s.input}>
          <label htmlFor="password">비밀번호</label>
          <input type="text" placeholder="8~12자 영문, 숫자, 특수문자"/>
        </div>
        <div css={s.input}>
            <label htmlFor="employeeId">이름</label>
            <input type="text" />
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

export default InformationPage;
