/**@jsxImportSource @emotion/react */
import { useRecoilState } from "recoil";
import { diagnosisOrders } from "../../../atoms/doctorTable/doctorTableAtom";
import * as s from "./style";

function DiagnosisOrder() {
  const [orders, setOrders] = useRecoilState(diagnosisOrders);
  return (
    <>
      <table css={s.list}>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </>
  );
}

export default DiagnosisOrder;
