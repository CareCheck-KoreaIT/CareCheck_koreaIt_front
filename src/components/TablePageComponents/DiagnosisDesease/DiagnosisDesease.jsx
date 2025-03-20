/**@jsxImportSource @emotion/react */
import { useRecoilState } from "recoil";
import * as s from "./style";
import React from "react";
import { diagnosisDisease } from "../../../atoms/doctorTable/doctorTableAtom";

function DiagnosisDesease() {
  const [disease, setDisease] = useRecoilState(diagnosisDisease);
  console.log(disease);
  return (
    <>
      <table css={s.list}>
        {disease.map((disease, index) => (
          <tr key={index}>
            <td>{disease.diseaseCode}</td>
            <td>{disease.diseaseKName}</td>
          </tr>
        ))}
      </table>
    </>
  );
}

export default DiagnosisDesease;
