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
  const [headerState, setHeaderState] = useRecoilState(headerMenuState)
  console.log("mainsidebar", headerState)
  const location = useLocation();

  useEffect(() => {
    const savedState = sessionStorage.getItem("headerState");
    if(savedState) {
      setHeaderState(savedState);
    } else {
      setHeaderState("접수메뉴변경") //
    }
  },[setHeaderState]);

  useEffect(() => {
    sessionStorage.setItem("headerState", headerState);
  },[headerState]);

  const renderSidebarMenu = () => {
    switch(headerState) {
      case "메인메뉴":
        return (
          <>
            <div><BsColumnsGap/>
            <NavLink to="/manager" className="NavLinkStyle"><span>테스트1</span></NavLink>
            </div>
            <div><BsColumnsGap/><span>테스트2</span></div>
            <div><BsColumnsGap/><span>테스트3</span></div>
          </>
        )

      case "접수메뉴변경":
        return (
          <>
            <div><BsColumnsGap />
            <NavLink to="/patient" className="NavLinkStyle"><span>환자 등록</span></NavLink>
            </div>
            <div><BsColumnsGap />
            <NavLink to="/patient/medical-reception" className="NavLinkStyle"><span>접수 확인</span></NavLink>
            </div>
            <div><BsColumnsGap />
            <NavLink to="/patient/admission-list" className="NavLinkStyle"><span>환자 리스트</span></NavLink>
            </div>
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
          <div><BsColumnsGap />
          <NavLink to={`/admission/${loginUser?.data?.usercode}/table`} className="NavLinkStyle"><span>처방 신청</span></NavLink>
          </div>
          <div><BsColumnsGap />
          <NavLink to={`/admission/${loginUser?.data?.usercode}`} className="NavLinkStyle"><span>처방 확인</span></NavLink>
          </div>
        </>
      );
      case "통계메뉴변경":
      return (
        <>
          <div><BsColumnsGap />
          <NavLink to="/summary" className="NavLinkStyle"><span>병원 수익</span></NavLink>
          </div>
          <div><BsColumnsGap />
          <NavLink to="/summary/usercode" className="NavLinkStyle"><span>의사별 수익</span></NavLink>
          </div>
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
      <header css={s.header} >
        <NavLink to="/" className={({ isActive }) => (isActive ? undefined : "")}
        onClick={()=>setHeaderState("메인메뉴")}>
        <h2>CareCheck</h2>
        </NavLink>
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
