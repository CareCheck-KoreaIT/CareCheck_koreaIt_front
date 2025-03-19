import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AccountPage from '../../pages/AccountPage/AccountPage';

function AccountRoute(props) {
    return (
        <>
            <Routes>
                <Route path='/account' element={<AccountPage />} />
            </Routes>
        </>
    );
}

export default AccountRoute;