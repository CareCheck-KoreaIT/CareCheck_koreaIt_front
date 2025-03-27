/**@jsxImportSource @emotion/react */
import { useNavigate } from 'react-router-dom';
import * as s from './style';
import React, { useEffect, useState } from 'react';
import { FaPlus } from "react-icons/fa6";
import { useQueryClient } from '@tanstack/react-query';
import { useGetSearchNoticeList } from '../../../queries/noticeQuery';
import NoticeModal from "../../../components/modal/NoticeModal/NoticeModal";

function NoticeLayout(props) { 
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const MiniNoticeList = useGetSearchNoticeList({
    page: 1,
    limitCount: 8,
    order: 'recent',
    searchText: '',
  });

  const [ selectedNotice, setSelectedNotice ] = useState(null);
  const [ isModalOpen, setIsModalOpen ] = useState(false);

  const handleMoreClick = () => {
    setSelectedNotice(null);
    setIsModalOpen(false);
    navigate('/notice/list');
  };

  const handleNoticeOnClick = (params) => {
        setSelectedNotice(params);
        setIsModalOpen(true); 
  }

  useEffect(() => {
    queryClient.resetQueries('searchNoticeList');
  }, [queryClient]);

  useEffect(() => {
    setSelectedNotice(null);
    setIsModalOpen(false);
  }, [navigate]);
  return (
    <>
      <div>
        <div css={s.noticeLayout}>
          <div css={s.miniHeader}>
            <h3>공지사항</h3>
            <button onClick={handleMoreClick}><FaPlus /></button>
          </div>
          <div css={s.miniMain}>
            <ul css={s.mininoticeListContainer}>
              <li>
                <div>No.</div>
                <div>제목</div>
                <div>등록일</div>
              </li>
              {MiniNoticeList.isLoading ? (
                <p>로딩 중...</p>
              ) : (
                MiniNoticeList?.data?.data.noticeList.map((params) => (
                  <li key={params.noticeId} onClick={() => handleNoticeOnClick(params)}>
                    <div>{params.noticeId}</div>
                    <div>{params.title}</div>
                    <div>{params.createdAt}</div>
                  </li>
                ))
              )}
            </ul>
          </div>
          <NoticeModal
                isOpen={isModalOpen} 
                setIsOpen={setIsModalOpen} 
                notice={selectedNotice} 
            />
        </div>
      </div>

    </>
  );
}

export default NoticeLayout;