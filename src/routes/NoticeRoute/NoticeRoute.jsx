import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NoticeWritePage from '../../pages/NoticeWritePage/NoticeWritePage';
import NoticeListPage from '../../pages/NoticeListPage/NoticeListPage';
import NoticeMyListPage from '../../pages/NoticeMyListpage/NoticeMyListPage';
import NoticeModifyPage from '../../pages/NoticeModifyPage/NoticeModifyPage';

function NoticeRoute(props) {
    return (
        <>
            <Routes>
                <Route path="/write" element={<NoticeWritePage />} />
                <Route path="/list" element={<NoticeListPage />} />
                <Route path="/:usercode" element={<NoticeMyListPage />} />
                <Route path="/:usercode/modify/:noticeId"
                element={<NoticeModifyPage />}
                />
            </Routes>
        </>
    );
}

export default NoticeRoute;