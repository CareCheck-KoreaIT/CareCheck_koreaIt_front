/**@jsxImportSource @emotion/react */
import * as s from './style';
import React from 'react';
import { BsColumnsGap } from "react-icons/bs";
import NoTitleHeaderMenu from '../../components/NoTitleHeaderMenu/NoTitleHeaderMenu';

function StatsPage(props) {
  return (
    <>
      <div css={s.sidebar}>
        <header css={s.header}>
          <h2>CareCheck</h2>
        </header>
        <section css={s.section}>
          <div>
            <BsColumnsGap />
            <span>진료과별 수입</span>
          </div>
          <div>
            <BsColumnsGap />
            <span>과장별 수입통계</span>
          </div>
          <div>
            <BsColumnsGap />
            <span>일일 총 수입</span>
          </div>
          <div>
            <BsColumnsGap />
            <span>월별 총 수입</span>
          </div>
          <div>
            <BsColumnsGap />
            <span>영수증 조회</span>
          </div>
        </section>
        <footer css={s.footer}>
          <div>홍길동님</div>
        </footer>
      </div>
      <div css={s.layout}>
          <NoTitleHeaderMenu />
          <div css={s.select}>
              <select>
                <option value="value">value</option>
              </select>
          </div>
          <div css={s.mainGroup}>
            <div css={s.main}></div>
            <div css={s.main}></div>
          </div>
      </div>
    </>
  );
}

export default StatsPage;