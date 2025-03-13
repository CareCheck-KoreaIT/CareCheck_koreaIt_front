/**@jsxImportSource @emotion/react */

import * as s from './style';
import React from 'react'
import { buttontest } from '../../../styles/button'

function MainHeader() {
  return (
    <div>
      <div>
        MainHeader
      </div>
        <button css={buttontest}>
          <span>버튼입니다</span>
        </button>
    </div>
  )
}

export default MainHeader;
