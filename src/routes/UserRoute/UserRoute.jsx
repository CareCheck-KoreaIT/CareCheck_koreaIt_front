import React from 'react';
import { Route, Routes } from 'react-router-dom';
import JoinPage from '../../pages/JoinPage/JoinPage';
import AdminUserInfoPage from '../../pages/AdminUserInfoPage/AdminUserInfoPage';
import OrderPage from '../../pages/OrderPage/OrderPage';
import ScorePayPage from '../../pages/ScorePayPage/ScorePayPage';

function UserRoute(props) {
    return (
        <>
            <Routes>
                <Route path='/users' element={<AdminUserInfoPage />} />
                <Route path='/users/signup' element={<JoinPage />} />
                <Route path='/users/order' element={<OrderPage />} />
                <Route path='/users/scorepay' element={<ScorePayPage />} />
            </Routes>
        </>
    );
}

export default UserRoute;