import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from '../../pages/LoginPage/LoginPage';

function AuthRoute(props) {

    return (
        <>
            <Routes>
                <Route path='/signin' element={<LoginPage />} />
            </Routes>
        </>
    );
}

export default AuthRoute;