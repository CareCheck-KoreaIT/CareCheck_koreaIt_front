/**@jsxImportSource @emotion/react */
import { BsColumnsGap } from "react-icons/bs";
import * as s from "./style";
import React, { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useRecoilState } from "recoil";
import { headerMenuState } from "../../../atoms/Header/headerMenu";
import { NavLink, useLocation } from "react-router-dom";

function MainSidebar() {
  const queryClient = useQueryClient();
  const loginUser = queryClient.getQueryData(["userMeQuery"]);
  const [headerState, setHeaderState] = useRecoilState(headerMenuState);
  const location = useLocation();

  useEffect(() => {
    const savedState = sessionStorage.getItem("headerState");
    if (savedState) {
      setHeaderState(savedState);
    } else {
      setHeaderState("접수메뉴변경");
    }
  }, [setHeaderState]);

  useEffect(() => {
    sessionStorage.setItem("headerState", headerState);
  }, [headerState]);

  const menuItems = {
    "메인메뉴": [
      { name:"테스트1", path: "/manager"},
      { name: "테스트2", path: "/MedicalReception"},
      {name: "테스트3", path: "/summary/usercode"},
    ],
    "접수메뉴변경": [
      { name: "환자 등록", path: "/patient" },
      { name: "접수 확인", path: "/patient/qwe" },
      { name: "환자 리스트", path: "/patient/list" },
    ],
    "수납메뉴변경": [
      { name: "수납 신청", path: "/receipt" },
      { name: "수납 확인", path: "/receipt/qwer" },
    ],
    "처방메뉴변경": [
      { name: "처방 신청", path: "/prescription/request" },
      { name: "처방 확인", path: "/prescription/check" },
    ],
    "통계메뉴변경": [
      { name: "통계표", path: "/employeenum" },
      { name: "통계 확인", path: "/scorepay" },
    ],
    "관리자메뉴변경": [
      { name: "관리자 설정", path: "/notice/write" },
      { name: "관리자 테스트", path: "/notice/list" },
    ],
  };

  const renderSidebarMenu = () => {
    const items = menuItems[headerState] || [];
    return (
      <>
        {items.map((item, index) => {
          return (
            <NavLink
              key={index}
              to={item.path}
              css={s.menuItem}
              className={location.pathname === item.path ? "active" : ""}
            >
              <BsColumnsGap />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </>
    );
  };

  return (
    <div css={s.sidebar}>
      <header css={s.header} className="header">
        <NavLink
          to="/"
          className={headerState === "메인메뉴" ? "active" : ""}
          onClick={() => setHeaderState("메인메뉴")}
        >
          <h2>CareCheck</h2>
        </NavLink>
      </header>
      <section css={s.section}>{renderSidebarMenu()}</section>
      <footer css={s.footer}>
        <div>{loginUser?.data?.username}님</div>
      </footer>
    </div>
  );
}

export default MainSidebar;
