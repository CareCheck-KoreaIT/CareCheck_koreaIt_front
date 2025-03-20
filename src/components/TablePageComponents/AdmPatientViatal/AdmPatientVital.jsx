/**@jsxImportSource @emotion/react */
import { useParams } from 'react-router-dom';
import * as s from './style';
import React, { useEffect, useState } from "react";
import { useQueryClient } from '@tanstack/react-query';
import { useGetSelectVital } from '../../../queries/admissionQuery';

function AdmPatientVital() {
  const param = useParams();
  const [patientVitalData, setPatientVitalData] = useState({
      admissionId: null,
      patientId: null,
      patientName: null,
    });

  const admPatientVitalByAdmId = useGetSelectVital
  // (3);
  (Number(patientVitalData.admissionId));

  
  console.log(admPatientVitalByAdmId?.data?.data);
  const admPatientVitalApi = admPatientVitalByAdmId?.data?.data[0].vital;
  
  useEffect(() => {
    if (admPatientVitalApi) {
      setPatientVitalData((prev) => ({
        ...prev,
        admissionId: admPatientVitalApi.admId,
        patientId: admPatientVitalApi.patientId,
        patientName: admPatientVitalApi.patientName,
      }));
    }
  }, [param.admissionId, admPatientVitalApi]);

  const admPatientVitalAdmId = useGetSelectVital(
    // (3),
    (Number(patientVitalData.admissionId)),
      {
        enabled: !!patientVitalData.admissionId,
      }
    );
    const admPatientVitalData = admPatientVitalAdmId?.data?.data[0] || [];
    
  return (
    <>
      {admPatientVitalData.length < 1 ? (
        <div css={s.nodata}>입력된 값이 없습니다.</div>
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
