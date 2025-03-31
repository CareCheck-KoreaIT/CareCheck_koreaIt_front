import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NoticeWritePage from '../../pages/NoticeWritePage/NoticeWritePage';
import NoticeListPage from '../../pages/NoticeListPage/NoticeListPage';
import NoticeModifyPage from '../../pages/NoticeModifyPage/NoticeModifyPage';
import NoticeMyListPage from '../../pages/NoticeMyListPage/NoticeMyListPage';

function NoticeRoute(props) {
    return (
        <>
            <Routes>
                <Route path="/write" element={<NoticeWritePage />} />
                <Route path="/list" element={<NoticeListPage />} />
                <Route path="/mylist" element={<NoticeMyListPage />} />
                <Route path="/:usercode/modify/:noticeId"
                element={<NoticeModifyPage />}
                />
            </Routes>
        </>
    );
}

export default NoticeRoute;