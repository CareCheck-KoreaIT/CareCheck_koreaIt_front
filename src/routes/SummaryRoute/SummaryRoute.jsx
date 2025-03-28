import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SummaryChartPage from '../../pages/SummaryChartPage/SummaryChartPage';
import SummaryChartUsercodePage from '../../pages/SummaryChartUsercodePage/SummaryChartUsercodePage';

function SummaryRoute(props) {
    return (
        <>
            <Routes>
                <Route path="/" element={<SummaryChartPage />} />
                <Route
                path="/usercode"
                element={<SummaryChartUsercodePage />}
                />
            </Routes>
        </>
    );
}

export default SummaryRoute;