import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TablePage from '../../pages/TablePage/TablePage';
import DetailBillPage from '../../pages/DetailBillPage/DetailBillPage';
import PaymentCertificatePage from '../../pages/PaymentCertificatePage/PaymentCertificatePage'

function AdmissionRoute(props) {

    return (
        <>
            <Routes>
                <Route path="/" element={<TablePage />} /> 

                <Route
                path="/:admissionId/certificate"
                element={<PaymentCertificatePage />}
                />
                <Route
                path="/:admissionId/detailbill"
                element={<DetailBillPage/>}
                />
            </Routes>
        </>
    );
}

export default AdmissionRoute;