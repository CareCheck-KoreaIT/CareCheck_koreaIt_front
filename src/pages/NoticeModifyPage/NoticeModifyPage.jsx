/** @jsxImportSource @emotion/react */
import * as s from './style';
import React, { useEffect, useRef, useState } from 'react';
import Quill from 'quill';
import "quill/dist/quill.snow.css";
import { useModifyNoticeMutation } from '../../mutations/noticeMutation'; // 수정된 공지사항을 위한 Mutation 훅
import Swal from 'sweetalert2';
import { useParams, useNavigate } from 'react-router-dom';
import { useGetUsercodeNoticeList } from '../../queries/noticeQuery';  // 기존에 사용하던 훅을 가져옵니다.

function NoticeModifyPage() {
  const { noticeId, usercode } = useParams(); // URL에서 noticeId와 usercode를 받음
  const navigate = useNavigate();

  const modifyNoticeMutation = useModifyNoticeMutation();

  const [title, setTitle] = useState("");
  const [quillContent, setQuillContent] = useState(""); // 초기 상태를 빈 문자열로 설정

  const containerRef = useRef();
  const quillInstanceRef = useRef(null);

  // usercode에 해당하는 공지사항 목록을 가져옴
  const noticeList = useGetUsercodeNoticeList(usercode);

  // useEffect: noticeId와 usercode에 해당하는 공지사항 데이터를 가져오기
  useEffect(() => {
    if (!noticeList?.data?.data?.noticeList) {
      return;
    }

    const fetchNoticeData = async () => {
      try {
        const notice = noticeList.data.data.noticeList.find(
          (notice) => notice.noticeId === parseInt(noticeId)
        );

        if (!notice) {
          alert("게시글을 찾을 수 없습니다.");
        }

        setTitle(notice.title);
        setQuillContent(notice.content);
      } catch (error) {
        Swal.fire({
          titleText: error.message || "게시글을 불러오는데 실패했습니다.",
          icon: error,
          confirmButtonText: "확인",
        });
      }
    };

    if (noticeId && usercode) {
      fetchNoticeData();
    }
  }, [noticeId, usercode, noticeList?.data?.data?.noticeList]);

  useEffect(() => {
    if (quillInstanceRef.current) return;

    const toolbarOptions = [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      [{ 'font': [] }, 'bold', 'italic', 'underline', 'strike'],
      [{ 'color': [] }, { 'background': [] }, { 'align': [] }],
      ['link', 'image', 'video', 'formula'],
    ];

    const quillInstance = new Quill(containerRef.current, {
      modules: {
        toolbar: toolbarOptions,
      },
      theme: 'snow',
    });

    quillInstanceRef.current = quillInstance;

    // 변경된 내용을 반영
    quillInstance.on('text-change', () => {
      setQuillContent(quillInstance.root.innerHTML);
    });
  }, []);

  useEffect(() => {
    if (quillInstanceRef.current) {
      const quill = quillInstanceRef.current;

      const currentContent = quill.root.innerHTML;

      if (currentContent !== quillContent) {
        const cursorPosition = quill.getSelection()?.index || 0;
        quill.root.innerHTML = quillContent;
        quill.update();
        quill.setSelection(cursorPosition);
      }
    }
  }, [quillContent]);

  const removeHtmlTags = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  };

  const handleTitleOnChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSaveOnClick = async () => {
    if (!title.trim()) {
      await Swal.fire({
        titleText: '제목을 입력하세요.',
        icon: 'warning',
        confirmButtonText: '확인',
      });
      return;
    }

    if (!quillContent.trim() || quillContent === "<p><br></p>") {
      await Swal.fire({
        titleText: '게시글 내용을 입력하세요.',
        icon: 'warning',
        confirmButtonText: '확인',
      });
      return;
    }

    const plainContent = removeHtmlTags(quillContent);

    const notice = { title, content: plainContent };
    const parsedNoticeId = parseInt(noticeId, 10);
  
    try {
      console.log('보낼 데이터:', parsedNoticeId, usercode, notice);
  
      await modifyNoticeMutation.mutateAsync({ 
        noticeId: parsedNoticeId, 
        usercode: usercode,
        notice: notice
      });
  
      await Swal.fire({
        titleText: '게시글 수정 완료',
        icon: 'success',
        confirmButtonText: '확인',
      });
      navigate(`/notice/${usercode}`);
    } catch (error) {
      console.error('에러 발생:', error);
      await Swal.fire({
        titleText: '게시글 수정에 실패했습니다.',
        icon: 'error',
        confirmButtonText: '확인',
      });
    }
  };

  return (
    <div css={s.quillEditor}>
      <div css={s.quillTop}>
        <input
          type="text"
          value={title}
          onChange={handleTitleOnChange}
        />
        <button css={s.saveButton} onClick={handleSaveOnClick}>저장</button>
      </div>
      <div ref={containerRef} /> 
    </div>
  );
}

export default NoticeModifyPage;
