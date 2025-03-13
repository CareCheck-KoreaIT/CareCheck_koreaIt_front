/**@jsxImportSource @emotion/react */
import { layout } from '../../routes/MainRoute/style';
import * as s from './style';
import React, { useState } from 'react'
import { RiUser3Fill } from "react-icons/ri";
import { FaLock } from "react-icons/fa";
import Swal from 'sweetalert2';


function LoginPage(){ 
  
  return (
    
      <div css={s.layout}>
        <h1 css={s.title}>CareCheck</h1>
            <div css={s.groupBox}>
                <div css={s.inputContainer}>
                    <input css={s.inputstyle} type="text" placeholder='사원 번호' />
                    <RiUser3Fill css={s.iconStyle}/>
                </div>
            </div>
            <div css={s.groupBox}>
                <div css={s.inputContainer}>
                    <input css={s.inputstyle} type="password" placeholder='비밀번호' />
                    <FaLock css={s.iconStyle}/>
                </div>
            </div>
            <div css={s.groupBox}>
                <button css={s.button}>로그인</button>
            </div>
      </div>
    
  )
}

export default LoginPage;