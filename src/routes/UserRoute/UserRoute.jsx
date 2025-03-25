import React from 'react';
import { Route, Routes } from 'react-router-dom';
import JoinPage from '../../pages/JoinPage/JoinPage';
import AdminUserInfoPage from '../../pages/AdminUserInfoPage/AdminUserInfoPage';

function UserRoute(props) {
    return (
        <>
            <Routes>
                <Route path='/users/signup' element={<JoinPage />} />
                <Route path='/users' element={<AdminUserInfoPage />} />
            </Routes>
        </>
    );
}

export default UserRoute;