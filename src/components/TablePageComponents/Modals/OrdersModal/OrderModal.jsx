/**@jsxImportSource @emotion/react */
import { RiCloseCircleFill, RiSearch2Line } from "react-icons/ri";
import * as s from "./style";
import React, { useEffect, useState } from "react";
import {
  diagnosisOrders,
  openOrdersModal,
} from "../../../../atoms/doctorTable/doctorTableAtom";
import { useRecoilState } from "recoil";
import { useGetSearchDisease } from "../../../../queries/diseaseQuery";

function OrderModal() {
  const [setOrderModalOpen] = useRecoilState(openOrdersModal);
  const [listDiagnosisOrders, setListDiagnosisOrders] =
    useRecoilState(diagnosisOrders);
  const [inputKeyword, setInputKeyword] = useState("");
  const [searchKeyword, setSearchKeyword] = useState(null);
  const [selectDiagnosisOrders, setSelectDiagnosisOrders] = useState([]);
  // const searchOrdersByKeyword = useGetSearchOrders(searchKeyword, {
  //   enabled: !!searchKeyword,
  // });
  const searchOrderList = [];
  useEffect(() => {}, [searchKeyword]);

  const handleSearchKeywordOnKeyDown = (e) => {
    if (e.keyCode === 13) {
      setSearchKeyword(inputKeyword);
    }
  };

  const handleSearchKeywordOnChange = (e) => {
    setInputKeyword(e.target.value);
  };

  const [newOrder, setNewOrder] = useState({
    orderCode: "",
    orderName: "",
    orderDose: null,
    orderCount: 1,
    orderDays: 1,
    orderMethod: "",
  });
  const handleSelectOrders = () => {
    setSelectDiagnosisOrders((prev) => [...prev, ...searchOrderList]);
  };

  const handleSaveSearchKeywordOnClick = () => {
    setSearchKeyword(inputKeyword);
  };
  const handleSaveOrdersOnClick = () => {
    setListDiagnosisOrders([...selectDiagnosisOrders, ...selectDiagnosisOrders]);
  };
  return (
    <div css={s.container}>
      <div css={s.header}>
        <h2>처방등록</h2>
        <div>
          <RiCloseCircleFill />
        </div>
      </div>
      <div css={s.searchField}>
        <span> 오더조회 : </span>
        <input
          type="text"
          value={inputKeyword}
          placeholder="검색기능"
          onChange={handleSearchKeywordOnChange}
          onKeyDown={handleSearchKeywordOnKeyDown}
        />
        <div onClick={handleSaveSearchKeywordOnClick}>
          <RiSearch2Line />
        </div>
      </div>
      <div css={s.mainField}>
        <h3>조회 목록 : </h3>
        <table>
          <thead>
            <tr>
              <td>처방코드</td>
              <td>처방명</td>
              <td>용량</td>
              <td>횟수</td>
              <td>일수</td>
              <td>용법</td>
            </tr>
          </thead>
          <tbody>
            {searchDiseases.map((order) => (
              <tr
                key={order.orderCode}
                onClick={() => handleSelectOrders(order)}
              >
                <td>{order.orderCode}</td>
                <td>{order.orderKName}</td>
                <td>
                  <input type="number" value={newOrder.orderDose} />
                </td>
                <td>
                  <input type="number" value={newOrder.orderCount} />
                </td>
                <td>
                  <input type="number" value={newOrder.orderDays} />
                </td>
                <td>
                  <input type="text" value={newOrder.orderMethod} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div css={s.selectField}>
        <div css={s.selectFieldHeader}>
          <h3>입력된 오더 : </h3>{" "}
          <button onClick={handleSaveOrdersOnClick}>
            <span>전송</span>
          </button>
        </div>
        <table>
          <thead>
            <tr>
              <td>처방코드</td>
              <td>처방명</td>
              <td>용량</td>
              <td>횟수</td>
              <td>일수</td>
              <td>용법</td>
            </tr>
          </thead>
          <tbody>
            {selectDiseases.map((disease, index) => (
              <tr key={index}>
                <td>{disease.diseaseCode}</td>
                <td>{disease.diseaseKName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrderModal;
