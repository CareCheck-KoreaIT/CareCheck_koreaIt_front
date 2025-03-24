import React from 'react';

function NoticeModifyModal({ isOpen, onCancel, onClose, notice}) {
  if(!isOpen) return null;
  return (
    <div css={s.layout}>
      <div css={s.container}>
        <button css={s.closeButton} onClick={onClose}>×</button>
        
        <h3>공지사항</h3>
        <p><strong>제목:</strong> {notice?.title}</p>
        <p><strong>작성자:</strong> {notice?.username}</p>
        <p><strong>등록일:</strong> {notice?.createdAt}</p>
        <p><strong>내용:</strong> {notice?.content}</p>
        <div css={s.modalButtons}>
          <button onClick={onConfirm}>확인</button>
          <button onClick={onCancel}>취소</button>
        </div>
      </div>
    </div>
  );
}

export default NoticeModifyModal;