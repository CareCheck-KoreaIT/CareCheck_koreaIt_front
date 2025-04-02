/**@jsxImportSource @emotion/react */
import { useNavigate, useSearchParams } from "react-router-dom";
import { useGetSearchAdmissionListByParams } from "../../queries/admissionQuery";
import * as s from "./style";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

function ReceiptListPage() {

  const [ isDisabled, setIsDisabled ] = useState(true);

  const [ searchParams, setSearchParams ] = useSearchParams();
  const patientName = searchParams.get("patientName") || "";
  const regidentNum = searchParams.get("regidentNum") || "";
  const [ searchPatientName, setSearchPatientName ] = useState(patientName);
  const [ searchRegidentNum, setSearchRegidentNum ] = useState(regidentNum);

  const getAdmissionList = useGetSearchAdmissionListByParams({
    patientName,
    regidentNum,
  });

  useEffect(() => {
    if(patientName.trim() !== "") {
      getAdmissionList.refetch();
    }
  }, [patientName, regidentNum])

  const handleInputNameValueOnChange = (e) => {
    setSearchPatientName(e.target.value);
  };

  const handleSearchNameValueOnKeyDown = (e) => {
    if (e.key === "Enter") {
      searchParams.set("patientName", searchPatientName);
      setSearchParams(searchParams);
    }
  };

  const handleInputRegidentNumValueOnChange = (e) => {
    setSearchRegidentNum(e.target.value);
  };

  const handleSearchRegidentNumValueOnKeyDown = (e) => {
    if (e.key === "Enter") {
      searchParams.set("regidentNum", searchRegidentNum);
      setSearchParams(searchParams);
      
    }
  };

  // 이름 검색 값이 없을 경우 주민 번호 검색 불가(disabled)
  useEffect(() => {
    if (patientName.length > 0 && getAdmissionList?.data?.data.length > 0) {
      setIsDisabled(false);
    } else if (patientName.length > 0 && getAdmissionList?.data?.data.length <= 0) {
      Swal.fire({
        icon: "error",
        title: "환자 정보를 다시 확인하세요",
        confirmButtonText: "<div style='font-size: 1.5rem'>확인</div>"
      }).then(response => {
        setSearchRegidentNum("");
        searchParams.set("regidentNum", "");
        setSearchParams(searchParams);
      });
    }
  }, [getAdmissionList?.data])

  return (
    <div css={s.layout}>
      <div css={s.header}>
        <h2>수납 명단 조회</h2>
        <input
          type="text"
          placeholder="이름 검색"
          value={searchPatientName}
          onChange={handleInputNameValueOnChange}
          onKeyDown={handleSearchNameValueOnKeyDown}
        />
        <input
          type="text"
          placeholder="주민번호(추가필터)"
          value={searchRegidentNum}
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
              getAdmissionList?.data?.data.map((item) => (
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
