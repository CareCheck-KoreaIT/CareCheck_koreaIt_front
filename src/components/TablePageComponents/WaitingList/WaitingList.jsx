/**@jsxImportSource @emotion/react */
import { useRecoilState } from "recoil";
import { useGetSearchWaitingList } from "../../../queries/admissionQuery";
import * as s from "./style";
import React, { useEffect } from "react";
import { waitingLisAdmId } from "../../../atoms/doctorTable/doctorTableAtom";

function WaitingList({ usercode }) {
  const [admissionId, setAdmissionId] = useRecoilState(waitingLisAdmId);
  const waitingListByusercode = useGetSearchWaitingList(usercode);
  const waitingList = waitingListByusercode?.data?.data || [];
  console.log(waitingList);
  useEffect(() => {
    console.log("선택된 admid가 변경되었습니다.", admissionId);
  }, [admissionId]);
  const handleChangeAdmissionIdOnClick = (admId) => {
    console.log("클릭기능 확인", admId);
    setAdmissionId(admId);
  };
  return (
    <>
      <table css={s.list}>
        <tbody>
          {waitingList.length > 0 ? (
            waitingList.map((waiting) => (
              <tr
                key={waiting.admId}
                onClick={() => handleChangeAdmissionIdOnClick(waiting.admId)}
              >
                <td>{waiting.patientId}</td>
                <td>{waiting.patientName}</td>
                <td>{waiting.admDate}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">진료 대기자가 없습니다.</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

export default WaitingList;
