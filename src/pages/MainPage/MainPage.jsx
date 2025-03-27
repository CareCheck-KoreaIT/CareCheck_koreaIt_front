/**@jsxImportSource @emotion/react */
import AccountLayout from '../../components/mainPage/AccountLayout/AccountLayout';
import * as s from './style';
import React from 'react';

function MainPage(props) {
  return (
    <div css={s.layout}>
      <div>
        <div css={s.accountLayout}>
          <AccountLayout />
        </div>
        <div css={s.noticeLayout}></div>
      </div>
      <div css={s.calendarLayout}></div>
    </div>
  );
}

export default MainPage;