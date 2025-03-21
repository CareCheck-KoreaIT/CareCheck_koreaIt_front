/**@jsxImportSource @emotion/react */
import { useRecoilState } from "recoil";
import { diagnosisOrders } from "../../../atoms/doctorTable/doctorTableAtom";
import * as s from "./style";

function DiagnosisOrder() {
  const [orders, setOrders] = useRecoilState(diagnosisOrders);
  return (
    <>
      <table css={s.list}>
        {orders.length < 1 ? (
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        ) : (
          orders.map((order, index) => (
            <tr key={index}>
              <td>{order.orderCode}</td>
              <td>{order.orderName}</td>
              <td>{order.orderDose}</td>
              <td>{order.orderCount}</td>
              <td>{order.orderDays}</td>
              <td>{order.orderMethod}</td>
            </tr>
          ))
        )}
      </table>
    </>
  );
}

export default DiagnosisOrder;
