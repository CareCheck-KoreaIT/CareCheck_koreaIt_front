import React, { useState } from 'react';
import { useGetSearchTotalPay } from '../../queries/admissionQuery';
import { paymentResponse, paymentsResponse } from '../../atoms/payments/payment';
import axios from 'axios';

function PaymentTestPage(props) {
    const [ payments, setPayments ] = useState([]);
    const patientData = {
        admissionId: "73",
        patientId: "28",
        patientName: "최명준",
        admDate: "2025-03-27",
    };
    const totalPayAdmId = useGetSearchTotalPay(Number(patientData.admissionId));
    const PAYSTATUS = {
        "PAID": "결제완료",
        "FAILED": "걸제실패",
    };
    const handlePaymentClick = async () => {
        try{
            paymentResponse(patientData, totalPayAdmId?.data?.data);
            console.log(paymentResponse);
        } catch(error) {
            console.log(error);
        }
    }

    const handleSearchClick = async () => {
        const jwtResponse = await axios.post("https://api.portone.io/login/api-secret", {
            "apiSecret": import.meta.env.VITE_PORTONE_API_KEY,
        });
        const accessToken = jwtResponse.data.accessToken;
        try {
            paymentsResponse(accessToken).then(response => {
                console.log(response);
                setPayments(response.data.items.map(item => ({
                    status: item.status,
                    mid: item.merchantId,
                    orderName: item.orderName,
                    totalAmount: item.amount.total,
                })));
            });
            // console.log(paymentsResponse?.data);
        } catch(error) {
            console.log(error);
        }

    }

    return (
        <div>
            <button onClick={handlePaymentClick}>결제</button>
            <button onClick={handleSearchClick}>검색</button>
            <ul>
                {
                    payments.map(p =>
                        <li>결제상태: {PAYSTATUS[p.status]}, MID: {p.mid}, 주문명: {p.orderName}, 총액: {p.totalAmount}</li>
                    )
                }
            </ul>
        </div>
    );
}

export default PaymentTestPage;