/**@jsxImportSource @emotion/react */
import * as s from './style';
import React, { useEffect, useState } from 'react';
import { useGetSearchPatientInfo, useGetSearchTotalPay } from '../../queries/admissionQuery';
import { useParams } from 'react-router-dom';

function PaymentCertificatePage(props) {
    const param = useParams();
    const [ searchPatientData, setSearchPatientData] = useState({
        admissionId: param.admissionId,
        patientId: null,
        clinicDeft: null,
        userCode: null, 
    });
    
    const searchPatientInfoByAdmId = useGetSearchPatientInfo(Number(param.admissionId));
    console.log(searchPatientInfoByAdmId?.data?.data);
    
    const searchPatientInfoByAdmApi = searchPatientInfoByAdmId?.data?.data;
    
    useEffect(() => {
        if (!!searchPatientInfoByAdmApi) {
            setSearchPatientData((prev) => ({
            ...prev,
            admissionId: searchPatientInfoByAdmApi.admId,
            patientId: searchPatientInfoByAdmApi.patientId,
            clinicDeft: searchPatientInfoByAdmApi.clinicDeft,
            userCode: searchPatientInfoByAdmApi.userCode,
        }));
    }
    }, [param.admissionId, searchPatientInfoByAdmApi]);

    const admPatientInfoAdmId = useGetSearchPatientInfo((Number(searchPatientData.admissionId)),
        {
            enabled: !!searchPatientData.admissionId,
        }
    );

    const admPatientInfoData = admPatientInfoAdmId?.data?.data || {};

    const totalPayAdmId = useGetSearchTotalPay(Number(param.admissionId), {
        enabled: !!param.admissionId,
    });

    const today = new Date();
    const dateString = today.toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <>
        <div css={s.layout}>
        {admPatientInfoData.patientId}
            <table css={s.table}>
                <tbody>
                    <tr>
                        <td colSpan="4" css={s.headerTitle}>
                            영 수 증
                        </td>
                    </tr>
                    <tr>
                        <td css={s.title}>차트번호</td>
                        <td>{admPatientInfoData.patientId}</td>
                        <td css={s.title}>진 료 과</td>
                        <td>{admPatientInfoData.clinicDeft}</td>
                    </tr>
                    <tr>
                        <td css={s.title}>영 수 액</td>
                        <td colSpan="3" css={s.money}>
                            <span>일금 {(totalPayAdmId?.data?.data || "").toLocaleString()}원</span>
                        </td>
                    </tr>
                    <tr>
                        <td css={s.title2}>내 용</td>
                        <td colSpan="3"></td>
                    </tr>
                    <tr>
                        <td colSpan="4" css={s.note}>
                            <span>위 금액을 영수함</span>
                            <div css={s.note}>
                                <span> {dateString} </span>
                            </div>
                            <div css={s.bottomSpace}>
                                <span>담당확인: (인)</span>
                            </div>
                            <div css={s.left}>
                                <div>이 계산서는 소득공제 납입 증명서로 사용할 수 있습니다.</div>
                                <div>담당자 확인이 없는 것은 무효입니다.</div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        </>
    );
}
export default PaymentCertificatePage;