/**@jsxImportSource @emotion/react */
import * as s from "./style";
import React, { useEffect, useState } from "react";
import { IoReceipt } from "react-icons/io5";
import { LiaReceiptSolid } from "react-icons/lia";
import { MdOutlineLocalHospital } from "react-icons/md";
import { ImStatsDots } from "react-icons/im";
import { RiAdminLine } from "react-icons/ri";
import { IoIosLogOut } from "react-icons/io";
import HeaderMenu from "../../components/HeaderMenu/HeaderMenu";
import { useInsertScorePayMutation } from "../../mutations/orderMutation";
import Swal from "sweetalert2";

function ScorePayPage(props) {
  const scorePayMutation = useInsertScorePayMutation();
  const [inputValue, setInputValue] = useState("");
  const handleChangeValueOnChange = (e) => {
    setInputValue(parseFloat(e.target.value));
  };
  useEffect(() => {}, [inputValue]);
  const handleScorePayOnClick = async () => {
    await scorePayMutation.mutateAsync(inputValue);
    await Swal.fire({
      titleText: "단가 등록이 완료되었습니다.",
      icon: "success",
      showConfirmButton: false,
      timer: 1000,
      position: "center",
    });
  };
  return (
    <div css={s.layout}>
      <div css={s.titleGroup}>
        <h1 css={s.title1}>CareCheck</h1>
        <p css={s.title2}>점수당단가</p>
      </div>
      <main css={s.inputGroup}>
        <div css={s.input}>
          <label htmlFor="scorePay">단가점수</label>
          <input
            type="number"
            value={inputValue}
            onChange={handleChangeValueOnChange}
          />
        </div>
      </main>
      <footer css={s.button}>
        <button onClick={handleScorePayOnClick}>단가 변경</button>
      </footer>
    </div>
  );
}

export default ScorePayPage;
