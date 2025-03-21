/**@jsxImportSource @emotion/react */
import { IoReceipt } from "react-icons/io5";
import MainContainer from "../../components/common/MainContainer/MainContainer";
import MainSidebar from "../../components/common/MainSidebar/MainSidebar";
import * as s from "./style";
import React, { useEffect } from "react";
import NoTitleHeaderMenu from "../../components/NoTitleHeaderMenu/NoTitleHeaderMenu";
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
import { buttontest } from "../../styles/button";
import {
  useDiagnosisInAdmIdMutation,
  useOrdersInAdmIdMutation,
} from "../../mutations/admissionMutation";

function TablePage() {
  const ordersInAdmIdMutation = useOrdersInAdmIdMutation();
  const diagnosisInAdmIdMutation = useDiagnosisInAdmIdMutation();
  const [admissionId, setAdmissionId] = useRecoilState(waitingLisAdmId);
  const [diseaseModalOpen, setDiseaseModalOpen] =
    useRecoilState(openDiseaseModal);
  const [ordersModalOpen, setOrdersModalOpen] = useRecoilState(openOrdersModal);
  const [diagnosisList, setDiagnosisList] = useRecoilState(diagnosisDisease);
  const [ordersList, setOrdersList] = useRecoilState(diagnosisOrders);

  console.log("tablePage 진단입력", diagnosisList);
  console.log("tablePage 처방입력", ordersList);
  const param = useParams();
  useEffect(() => {}, [param.usercode, admissionId]);

  const handleDiseaseModalOpen = () => {
    setDiseaseModalOpen(true);
  };
  const handleOrdersModalOpen = () => {
    setOrdersModalOpen(true);
  };

  const handleSaveOnClick = () => {
    diagnosisInAdmIdMutation.mutateAsync(admissionId, diagnosisList);
    ordersInAdmIdMutation.mutateAsync(admissionId, ordersList);
  };
  return (
    <>
      <div css={s.layout}>
        <div css={s.parent}>
          <div>
            <table css={s.leftTable}>
              <tr>
                <td>진료 대기자 명단</td>
              </tr>
            </table>

            <table>
              <tr css={s.waitingList}>
                <td>차트번호</td>
                <td>환자명</td>
                <td>나이</td>
              </tr>
            </table>
            <WaitingList usercode={param.usercode} />
          </div>
          {/*진료 대기자 명단 끝*/}
          <div css={s.child2}>
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
              <AdmPatientVital admissionId={admissionId} />
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
                  </tr>
                </table>
                <DiagnosisDesease />
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
                  </tr>
                </table>
                <DiagnosisOrder />
              </div>
              <div css={s.footer}>
                <button css={buttontest} onClick={handleSaveOnClick}>
                  <span>저장</span>
                </button>
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
