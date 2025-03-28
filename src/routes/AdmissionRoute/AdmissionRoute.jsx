import React from 'react';
import { Route, Routes } from 'react-router-dom';

function AdmissionRoute(props) {
    return (
        <>
            <Routes>
                <Route path="/:usercode/" element={<TablePage />} />    
                <Route
                path="/:admissionId/certificate"
                element={<PaymentCertificatePage />}
                />
                <Route
                path={`/:admissionId/detailbill`}
                element={<DetailBillPage />}
                />
            </Routes>
        </>
    );
}

export default AdmissionRoute;