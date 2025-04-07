/**@jsxImportSource @emotion/react */
import { IoReceipt } from "react-icons/io5";
import * as s from "./style";
import { useEffect } from "react";
import { LiaReceiptSolid } from "react-icons/lia";
import { MdOutlineLocalHospital } from "react-icons/md";
import { ImStatsDots } from "react-icons/im";
import { RiAdminLine } from "react-icons/ri";
import { IoIosLogOut } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { useRecoilState } from "recoil";
import { headerMenuState } from "../../atoms/Header/headerMenu";
import Swal from "sweetalert2";
import { useQueryClient } from "@tanstack/react-query";
import { setTokenLocalStorage } from "../../configs/axiosConfig";

function NoTitleHeaderMenu() {
  const queryClient = useQueryClient();
  const loginUser = queryClient.getQueryData(["userMeQuery"]);
  const [ headerState, setHeaderState] = useRecoilState(headerMenuState)
  useEffect(()=>{
  },[headerState])

  const handleLogout = ()=> {
    Swal.fire({
      icon: 'warning',
      title: '로그아웃 하시겠습니까?',
      showDenyButton: true,
      confirmButtonText: "<div style='font-size: 1.5rem'>확인</div>",
      denyButtonText: "<div style='font-size: 1.5rem'>취소</div>",
    }).then((result)=>{
      if(result.isConfirmed){
        // localStorage.removeItem("AccessToken");
        // setHeaderState("");
        // 위의 2줄의 코드를 아래 한 줄의 코드로 줄일 수 있음
        setTokenLocalStorage("AccessToken", null);
        queryClient.invalidateQueries(["userMeQuery"])
        // .then(response => navigate("/auth/signin"));
        // userMeQuery에 해당하는 캐시를 삭제하고 다시 호출함
        // 이때 queryState 가 error 상태가 되며 자동으로 로그인 화면으로 넘어감(이는 MainRoute, AuthRoute 에서 작성된 코드에 의함)
      }
      return;
    })

  } 
  return (
    
    <header css={s.header}>
      <div css={s.headerMenu} >
        <NavLink to="/patient" className={({ isActive }) => (isActive ? "active" : "")}
        onClick={()=>setHeaderState("접수메뉴변경")}>
            <div css={s.iconStyle}><IoReceipt /></div>
            <span css={s.titleStyle}>접수</span>
        </NavLink>
      </div>
      <div css={s.headerMenu}>
        <NavLink
          to="/payment/list"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={() => setHeaderState("수납메뉴변경")}
        >
          <div css={s.iconStyle}>
            <LiaReceiptSolid />
          </div>
          <span css={s.titleStyle}>수납</span>
        </NavLink>
      </div>

      <div css={s.headerMenu} >
        <NavLink to="/admission" className={({ isActive }) => (isActive ? "active" : "")}
        onClick={()=>setHeaderState("처방메뉴변경")}>
          <div css={s.iconStyle}><MdOutlineLocalHospital /></div>
          <span css={s.titleStyle}>처방</span>
        </NavLink>
      </div>
      <div css={s.headerMenu} >
        <NavLink to="/summary" className={({ isActive }) => (isActive ? "active" : "")}
        onClick={()=>setHeaderState("통계메뉴변경")}>
        <div css={s.iconStyle}><ImStatsDots /></div> 
        <span css={s.titleStyle}>통계</span>
        </NavLink>
      </div>
      <div css={s.headerMenu} >
        <NavLink to="/admin/users" className={({ isActive }) => (isActive ? "active" : "")}
        onClick={(e) => {
          if (loginUser?.data?.userRole.roleId !== 1) {
            Swal.fire({
              icon: "error",
              title:"관리자 권한이 필요합니다",
              confirmButtonText: "<div style='font-size: 1.5rem'>확인</div>",
            })
            e.preventDefault(); // 경로 이동 막기!
            return;
          }
          setHeaderState("관리자메뉴변경");
        }}>
        <div css={s.iconStyle}><RiAdminLine /></div>
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
