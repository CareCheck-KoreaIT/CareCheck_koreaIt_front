/**@jsxImportSource @emotion/react */
import { useParams } from "react-router-dom";
import * as s from "./style";
import React, { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useGetSelectVital } from "../../../queries/admissionQuery";

function AdmPatientVital({ admissionId }) {
  const param = useParams();
  const [patientVitalData, setPatientVitalData] = useState({
    admissionId,
    patientId: null,
    patientName: null,
  });

  const admPatientVitalByAdmId = useGetSelectVital(Number(admissionId));

  const admPatientVitalApi = admPatientVitalByAdmId?.data?.data[0].vital;

  useEffect(() => {
    if (admPatientVitalApi) {
      setPatientVitalData((prev) => ({
        ...prev,
        patientId: admPatientVitalApi.patientId,
        patientName: admPatientVitalApi.patientName,
      }));
    }
  }, [admissionId, admPatientVitalApi]);

  const admPatientVitalAdmId = useGetSelectVital(Number(admissionId));
  const admPatientVitalData = admPatientVitalAdmId?.data?.data[0] || [];

  return (
    <>
      {admPatientVitalData.length < 1 ? (
        <table css={s.list}>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      ) : (
        admPatientVitalApi.map((patientVital) => (
          <table css={s.list} key={patientVitalData}>
            <tbody>
              <tr>
                <td>{admPatientVitalData.patientId}</td>
                <td>{admPatientVitalData.patientName}</td>
                <td>{patientVital.height}</td>
                <td>{patientVital.weight}</td>
                <td>{patientVital.fever}</td>
              </tr>
            </tbody>
          </table>
        ))
      )}
    </>
  );
}

export default AdmPatientVital;
