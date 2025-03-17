import { useQueryClient } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import JoinPage from '../../pages/JoinPage/JoinPage';
import LoginPage from '../../pages/LoginPage/LoginPage';

function AuthRoute(props) {

    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const queryState = queryClient.getQueryState(["userMeQuery"]);

    useEffect(() => {
        console.log(queryState);
        if(queryState.status === "success") {
            navigate("/");
        }
    }, [queryState]);

    return queryState.status === "error" &&
    <Routes>
        <Route path='/signup' element={<JoinPage />} />
        <Route path='/signin' element={<LoginPage />} />
    </Routes>;
}

export default AuthRoute;