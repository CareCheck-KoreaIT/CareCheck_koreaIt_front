/**@jsxImportSource @emotion/react */
import { useNavigate } from "react-router-dom";
import { useGetSearchAdmissionListByPatientName } from "../../queries/admissionQuery";
import * as s from "./style";
import React, { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

function ReceiptListPage() {
  const [inputNameValue, setInputNameValue] = useState("");
  const [searchNameValue, setSearchNameValue] = useState(inputNameValue);
  const [admissionData, setAdmissionData] = useState([]);
  const [inputRegidentNumValue, setInputRegidentNumValue] = useState("");
  const [searchRegidentNumValue, setSearchRegidentNumValue] = useState(
    inputRegidentNumValue
  );

  const queryClient = useQueryClient();
  const loginUser = queryClient.getQueryData(["userMeQuery"]);
  const getAdmissionList =
    useGetSearchAdmissionListByPatientName(searchNameValue);

  useEffect(() => {
    setAdmissionData(getAdmissionList?.data?.data || []);
  }, [searchNameValue, getAdmissionList?.data]);

  const handleInputNameValueOnChange = (e) => {
    setInputNameValue(e.target.value);
  };

  const handleSearchNameValueOnKeyDown = (e) => {
    if (e.keyCode === 13) {
      setSearchNameValue(inputNameValue);
    }
  };

  const handleInputRegidentNumValueOnChange = (e) => {
    setInputRegidentNumValue(e.target.value);
  };

  const handleSearchRegidentNumValueOnKeyDown = (e) => {
    if (e.keyCode === 13) {
      setSearchRegidentNumValue(inputRegidentNumValue);
    }
  };

  useEffect(() => {
    if (searchRegidentNumValue) {
      const filterData = admissionData.filter((item) =>
        item.regidentNum.includes(searchRegidentNumValue)
      );
      console.log(filterData);
      setAdmissionData(filterData);
    } else {
      setAdmissionData(getAdmissionList?.data?.data);
    }
  }, [searchRegidentNumValue, getAdmissionList?.data]);

  const navigate = useNavigate();
  return (
    <div css={s.layout}>
      <div css={s.header}>
        <h2>수납 명단 조회</h2>
        <input
          type="text"
          value={inputNameValue}
          onChange={handleInputNameValueOnChange}
          onKeyDown={handleSearchNameValueOnKeyDown}
        />
        <input
          type="text"
          placeholder="주민번호 검색"
          value={inputRegidentNumValue}
          onChange={handleInputRegidentNumValueOnChange}
          onKeyDown={handleSearchRegidentNumValueOnKeyDown}
        />
      </div>
      <div css={s.main}>
        <table css={s.bodytable}>
          <thead>
            <tr>
              <td>환자번호</td>
              <td>환자명</td>
              <td>주민번호</td>
              <td>연락처</td>
              <td>진료일자</td>
              <td>영수증조회</td>
              <td>내역서조회</td>
            </tr>
          </thead>
          <tbody>
            {getAdmissionList?.data?.isLoading ? (
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            ) : (
              admissionData?.map((item) => (
                <tr key={item.admId}>
                  <td>{item.patientId}</td>
                  <td>{item.patientName}</td>
                  <td>{item.regidentNum}</td>
                  <td>{item.phoneNum}</td>
                  <td>{item.admDate}</td>
                  <td>
                    <button
                      onClick={() =>
                        navigate(
                          `/admission/${loginUser?.data.usercode}/${item.admId}/certificate`
                        )
                      }
                    >
                      영수증
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() =>
                        navigate(
                          `/admission/${loginUser?.data.usercode}/${item.admId}/detailbill`
                        )
                      }
                    >
                      내역서
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ReceiptListPage;
