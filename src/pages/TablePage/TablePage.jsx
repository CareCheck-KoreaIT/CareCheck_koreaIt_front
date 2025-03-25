/**@jsxImportSource @emotion/react */
import * as s from "./style";
import React, { useEffect } from "react";
import DiagnosisOrder from "../../components/TablePageComponents/DiagnosisOrder/DiagnosisOrder";
import AdmPatientVital from "../../components/TablePageComponents/AdmPatientViatal/AdmPatientVital";
import WaitingList from "../../components/TablePageComponents/WaitingList/WaitingList";
import DiagnosisDesease from "../../components/TablePageComponents/DiagnosisDesease/DiagnosisDesease";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import {
  diagnosisDisease,
  diagnosisOrders,
  openDiseaseModal,
  openOrdersModal,
  waitingLisAdmId,
} from "../../atoms/doctorTable/doctorTableAtom";
import ReactModal from "react-modal";
import DiseasesModal from "../../components/TablePageComponents/Modals/DiseasesModal/DiseasesModal";
import OrderModal from "../../components/TablePageComponents/Modals/OrdersModal/OrderModal";
import {
  useDiagnosisInAdmIdMutation,
  useOrdersInAdmIdMutation,
  useUpdateEndDateMutation,
} from "../../mutations/admissionMutation";
import { QueryClient, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";

function TablePage() {
  const ordersInAdmIdMutation = useOrdersInAdmIdMutation();
  const diagnosisInAdmIdMutation = useDiagnosisInAdmIdMutation();
  const updateEndDateMutation = useUpdateEndDateMutation();
  const [admissionId, setAdmissionId] = useRecoilState(waitingLisAdmId);
  const [diseaseModalOpen, setDiseaseModalOpen] =
    useRecoilState(openDiseaseModal);
  const [ordersModalOpen, setOrdersModalOpen] = useRecoilState(openOrdersModal);
  const [diagnosisList, setDiagnosisList] = useRecoilState(diagnosisDisease);
  const [ordersList, setOrdersList] = useRecoilState(diagnosisOrders);
  const qureyClient = useQueryClient();
  const param = useParams();
  useEffect(() => {}, [param.usercode, admissionId]);

  const handleDiseaseModalOpen = () => {
    setDiseaseModalOpen(true);
  };
  const handleOrdersModalOpen = () => {
    setOrdersModalOpen(true);
  };

  const handleRefetchOnClick = () => {
    qureyClient.invalidateQueries(["useGetSearchWaitingList", param.usercode]);
  };
  const handleSaveDiagnosisOnClick = async () => {
    await diagnosisInAdmIdMutation.mutateAsync({
      admissionId,
      diagnosisList,
    });
    await Swal.fire({
      titleText: "진단입력이 완료되었습니다.",
      icon: "success",
      showConfirmButton: false,
      timer: 1000,
      position: "center",
    });
  };

  const handleSaveOrdersOnClick = async () => {
    await ordersInAdmIdMutation.mutateAsync({
      admissionId,
      ordersList,
    });
    await Swal.fire({
      titleText: "처방입력이 완료되었습니다.",
      icon: "success",
      showConfirmButton: false,
      timer: 1000,
      position: "center",
    });
  };

  const handleSaveEndDateOnClick = async () => {
    await updateEndDateMutation.mutateAsync(admissionId);
    await Swal.fire({
      titleText: "해당 환자 진료 종결되었습니다.",
      icon: "success",
      showConfirmButton: false,
      timer: 1000,
      position: "center",
    });
    qureyClient.invalidateQueries(["useGetSearchWaitingList", param.usercode]);
  };
  return (
    <>
      <div css={s.layout}>
        <div css={s.parent}>
          <div>
            <table css={s.leftTable}>
              <tr onClick={handleRefetchOnClick}>
                <td>진료 대기자 명단</td>
              </tr>
            </table>

            <table css={s.waitingList}>
              <tbody>
                <tr>
                  <td>차트번호</td>
                  <td>환자명</td>
                  <td>나이</td>
                  <td>시작</td>
                </tr>
              </tbody>
            </table>
            <div css={s.lefttableLayout}>
              <WaitingList usercode={param.usercode} />
            </div>
          </div>
          {/*진료 대기자 명단 끝*/}
          <div>
            <div>
              <table css={s.rightTable}>
                <tr>
                  <td>환자정보</td>
                </tr>
              </table>
            </div>
            <div>
              <table>
                <tr css={s.patientInfo}>
                  <td>차트번호</td>
                  <td>환자명</td>
                  <td>나이</td>
                  <td>키</td>
                  <td>몸무게</td>
                </tr>
              </table>
              <div css={s.tableLayout}>
                <AdmPatientVital admissionId={admissionId} />
              </div>
            </div>
            {/*환자정보 끝*/}
            <div>
              <div>
                <table css={s.rightTable} onClick={handleDiseaseModalOpen}>
                  <tr>
                    <td>상병 등록</td>
                  </tr>
                </table>
              </div>

              <div>
                <table>
                  <tr css={s.diagnosisRegister}>
                    <td>상병코드</td>
                    <td>병명</td>
                    <td>삭제</td>
                  </tr>
                </table>
                <div css={s.tableLayout}>
                  <DiagnosisDesease />{" "}
                </div>
                <div css={s.tableFooter}>
                  <button onClick={handleSaveDiagnosisOnClick}>
                    <span>상병전송</span>
                  </button>
                </div>
              </div>
            </div>
            {/*상병등록 끝*/}
            <div>
              <div>
                <table css={s.rightTable} onClick={handleOrdersModalOpen}>
                  <tr>
                    <td>처방 등록</td>
                  </tr>
                </table>
              </div>

              <div>
                <table>
                  <tr css={s.prescriptionRegister}>
                    <td>처방코드</td>
                    <td>처방명</td>
                    <td>용량</td>
                    <td>횟수</td>
                    <td>일수</td>
                    <td>용법</td>
                    <td>삭제</td>
                  </tr>
                </table>
                <div css={s.tableLayout}>
                  <DiagnosisOrder />
                </div>
                <div css={s.tableFooter}>
                  <button onClick={handleSaveOrdersOnClick}>
                    <span>오더전송</span>
                  </button>
                  <button onClick={handleSaveEndDateOnClick}>
                    <span>진료종결</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ReactModal
          isOpen={diseaseModalOpen}
          onRequestClose={() => setDiseaseModalOpen(false)}
          style={{
            overlay: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#00000099",
            },
            content: {
              boxSizing: "border-box",
              position: "static",
              borderRadius: "1.5rem",
              width: "70rem",
              height: "60rem",
              overflowX: "hidden",
              overflowY: "auto",
            },
          }}
          children={<DiseasesModal admissionId={admissionId} />}
        />{" "}
        <ReactModal
          isOpen={ordersModalOpen}
          onRequestClose={() => setOrdersModalOpen(false)}
          style={{
            overlay: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#00000099",
            },
            content: {
              boxSizing: "border-box",
              position: "static",
              borderRadius: "1.5rem",
              width: "80rem",
              height: "60rem",
              overflowX: "hidden",
              overflowY: "auto",
            },
          }}
          children={<OrderModal admissionId={admissionId} />}
        />
      </div>
    </>
  );
}

export default TablePage;
