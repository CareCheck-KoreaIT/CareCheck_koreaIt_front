import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from '../../pages/LoginPage/LoginPage';
import NotFoundAuthPage from '../../pages/NotFoundAuthPage/NotFoundAuthPage';

function AuthRoute(props) {

    return (
        <>
            <Routes>
                <Route path='/signin' element={<LoginPage />} />
                <Route path="/*" element={<NotFoundAuthPage />} />
            </Routes>
        </>
    );
}

export default AuthRoute;