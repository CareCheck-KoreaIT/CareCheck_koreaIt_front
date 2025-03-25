/**@jsxImportSource @emotion/react */
import * as s from './style';
import React from 'react';

function DeleteNoticeModal({ isOpen, onCancel, onConfirm, onClose }) {
  if(!isOpen) return null;
  
  return (
    <div css={s.layout}>
      <div css={s.container}>
        <button css={s.closeButton} onClick={onClose}>×</button>
        
        <h3>정말 삭제하시겠습니까?</h3>
        <div css={s.modalButtons}>
          <button onClick={onConfirm}>확인</button>
          <button onClick={onCancel}>취소</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteNoticeModal;
