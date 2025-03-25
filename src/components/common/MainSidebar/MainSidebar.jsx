/**@jsxImportSource @emotion/react */
import { BsColumnsGap } from "react-icons/bs";
import * as s from "./style";
import React from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useRecoilState } from "recoil";
import { headerMenuState } from "../../../atoms/Header/headerMenu";

function MainSidebar() {

  const queryClient = useQueryClient();
  const loginUser = queryClient.getQueryData(["userMeQuery"]);
  const [headerState, setHeaderState] = useRecoilState(headerMenuState)
  console.log("mainsidebar", headerState)

  const renderSidebarMenu = () => {
    switch(headerState) {
      case "접수메뉴변경":
        return (
          <>
            <div><BsColumnsGap /><span>환자 등록</span></div>
            <div><BsColumnsGap /><span>접수 확인</span></div>
            <div><BsColumnsGap /><span>환자 리스트</span></div>
          </>
        );
      case "수납메뉴변경":
      return (
        <>
          <div><BsColumnsGap /><span>수납 신청</span></div>
          <div><BsColumnsGap /><span>수납 확인</span></div>
        </>
      );
      case "처방메뉴변경":
      return (
        <>
          <div><BsColumnsGap /><span>처방 신청</span></div>
          <div><BsColumnsGap /><span>처방 확인</span></div>
        </>
      );
      case "통계메뉴변경":
      return (
        <>
          <div><BsColumnsGap /><span>통계표</span></div>
          <div><BsColumnsGap /><span>통계 확인</span></div>
        </>
      );
      case "관리자메뉴변경":
      return (
        <>
          <div><BsColumnsGap /><span>관리자 설정</span></div>
          <div><BsColumnsGap /><span>관리자 테스트</span></div>
        </>
      );
    }
  }
  return (
    <div css={s.sidebar}>
      <header css={s.header}>
        <h2>CareCheck</h2>
      </header>
      <section css={s.section}>
          {renderSidebarMenu()}
      </section>
      <footer css={s.footer}>
        <div>{loginUser?.data?.username}님</div>
      </footer>
    </div>
  );
}

export default MainSidebar;
