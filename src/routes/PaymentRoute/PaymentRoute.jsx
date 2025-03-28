import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ReceiptListPage from '../../pages/ReceiptListPage/ReceiptListPage';

function PaymentRoute(props) {
    return (
        <>
            <Routes>
                <Route path="/list" element={<ReceiptListPage />} />
            </Routes>
        </>
    );
}

export default PaymentRoute;