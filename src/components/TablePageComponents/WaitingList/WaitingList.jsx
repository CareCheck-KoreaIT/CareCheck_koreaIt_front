/**@jsxImportSource @emotion/react */
import { useRecoilState } from "recoil";
import { useGetSearchWaitingList } from "../../../queries/admissionQuery";
import * as s from "./style";
import React, { useEffect } from "react";
import {
  diagnosisDisease,
  diagnosisOrders,
  waitingLisAdmId,
} from "../../../atoms/doctorTable/doctorTableAtom";

function WaitingList({ usercode }) {
  const [admissionId, setAdmissionId] = useRecoilState(waitingLisAdmId);
  const [diagnosisDiseaseState, setResetDisease] =
    useRecoilState(diagnosisDisease);
  const [diagnosisOrdersState, setDiagnosisOrders] =
    useRecoilState(diagnosisOrders);
  const waitingListByusercode = useGetSearchWaitingList(usercode);
  const waitingList = waitingListByusercode?.data?.data || [];
  useEffect(() => {
    setResetDisease([]);
    setDiagnosisOrders([]);
  }, [admissionId]);
  const handleChangeAdmissionIdOnClick = (admId) => {
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
