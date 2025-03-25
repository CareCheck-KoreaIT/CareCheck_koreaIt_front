/**@jsxImportSource @emotion/react */
import ReactModal from 'react-modal';
import * as s from './style';
import React from 'react';

const NoticeModal = ({ isOpen, setIsOpen, notice }) => {
    const handleCloseModal = () => {
        setIsOpen(false);
        console.log(notice);
    };

    return (
        <ReactModal
            ariaHideApp={false}
            isOpen={isOpen}
            onRequestClose={handleCloseModal}
            style={{
                overlay: {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#00000088',
                },
                content: {
                    position: 'relative',
                    boxSizing: 'border-box',
                    borderRadius: '1.5rem',
                    width: '70rem',
                    padding: '2rem',
                    height: '75rem',
                    overflowY: 'auto',
                    fontSize: '1.5rem',
                },
            }}
        >
            <div>
                <h2>제목: {notice?.title}</h2>
                <p><strong>작성자:</strong> {notice?.username}</p>
                <p><strong>등록일:</strong> {notice?.createdAt}</p>
                <p><strong>내용:</strong> {notice?.content}</p>
                <div>
                    <button css={s.style} onClick={handleCloseModal}>닫기</button>
                </div>
            </div>
        </ReactModal>
    );
};
export default NoticeModal;