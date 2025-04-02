/**@jsxImportSource @emotion/react */
import { useNavigate } from "react-router-dom";
import { useGetSearchAdmissionListByPatientName } from "../../queries/admissionQuery";
import * as s from "./style";
import React, { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";

function ReceiptListPage() {
  const [inputNameValue, setInputNameValue] = useState("");
  const [searchNameValue, setSearchNameValue] = useState(inputNameValue);
  const [admissionData, setAdmissionData] = useState([]);
  const [inputRegidentNumValue, setInputRegidentNumValue] = useState("");
  const [searchRegidentNumValue, setSearchRegidentNumValue] = useState(
    inputRegidentNumValue
  );
  const [ isDisabled, setIsDisabled ] = useState(true);

  const queryClient = useQueryClient();
  const loginUser = queryClient.getQueryData(["userMeQuery"]);
  const getAdmissionList =
    useGetSearchAdmissionListByPatientName(searchNameValue);

  useEffect(() => {
    setAdmissionData(getAdmissionList?.data?.data || []);
  }, [searchNameValue, getAdmissionList?.data]);

  useEffect(() => {
    if(searchNameValue.length > 0) {
      getAdmissionList.refetch();
    }
  }, [searchNameValue, searchRegidentNumValue])

  const handleInputNameValueOnChange = (e) => {
    setInputNameValue(e.target.value);
  };

  const handleSearchNameValueOnKeyDown = (e) => {
    if (e.keyCode === 13) {
      setSearchNameValue(inputNameValue);
    }
  };

  const handleInputRegidentNumValueOnChange = (e) => {
    if (!searchNameValue) {
      Swal.fire({
        icon: "warning",
        title: "이름 입력 필요",
        text: "이름을 먼저 검색해주세요!",
        confirmButtonText: "확인",
      });
      return;
    }

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
      setAdmissionData(filterData);
    } else {
      setAdmissionData(getAdmissionList?.data?.data);
    }
  }, [searchRegidentNumValue, getAdmissionList?.data]);

  // 이름 검색 값이 없을 경우 주민 번호 검색 불가(disabled)
  useEffect(() => {
    if (searchNameValue.length > 0 && getAdmissionList?.data?.data.length > 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [getAdmissionList?.data])

  return (
    <div css={s.layout}>
      <div css={s.header}>
        <h2>수납 명단 조회</h2>
        <input
          type="text"
          placeholder="이름 검색"
          value={inputNameValue}
          onChange={handleInputNameValueOnChange}
          onKeyDown={handleSearchNameValueOnKeyDown}
        />
        <input
          type="text"
          placeholder="주민번호(추가필터)"
          value={inputRegidentNumValue}
          onChange={handleInputRegidentNumValueOnChange}
          onKeyDown={handleSearchRegidentNumValueOnKeyDown}
          disabled={isDisabled}
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
                <td colSpan="7">로딩 중...</td>
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
                        window.open(
                          `/admission/${item.admId}/certificate`,
                          "_blank"
                        )
                      }
                    >
                      영수증
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() =>
                        window.open(
                          `/admission/${item.admId}/detailbill`,
                          "_blank"
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
