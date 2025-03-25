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

  const [title, setTitle] = useState("");  // 제목 상태
  const [quillContent, setQuillContent] = useState("");  // 내용 상태

  const containerRef = useRef();  // Quill 에디터 컨테이너 참조
  const quillInstanceRef = useRef(null);  // Quill 인스턴스를 저장할 ref

  // usercode에 해당하는 공지사항 목록을 가져오는 훅
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
          throw new Error("게시글을 찾을 수 없습니다.");
        }

        setTitle(notice.title);
        setQuillContent(notice.content);  // 내용도 state로 설정
      } catch (error) {
        Swal.fire({
          titleText: error.message || "게시글을 불러오는데 실패했습니다.",
          confirmButtonText: "확인",
        });
      }
    };

    if (noticeId && usercode) {
      fetchNoticeData();
    }
  }, [noticeId, usercode, noticeList?.data?.data?.noticeList]);

  // Quill 에디터 초기화 및 내용 설정
  useEffect(() => {
    // Quill 인스턴스가 이미 초기화되었으면 다시 초기화하지 않도록 방지
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
      placeholder: '내용을 입력하세요.',
    });

    quillInstanceRef.current = quillInstance; // quillInstance를 ref에 저장

    // quill 인스턴스에서 변경된 내용을 반영
    quillInstance.on('text-change', () => {
      setQuillContent(quillInstance.root.innerHTML); // 내용이 변경될 때마다 외부 상태를 업데이트
    });
  }, []);  // 한 번만 초기화되도록 빈 배열을 사용

  // Quill에 내용 반영
  useEffect(() => {
    if (quillInstanceRef.current && quillContent) {
      const quill = quillInstanceRef.current;
      quill.root.innerHTML = quillContent; // 내부 HTML을 직접 설정
    }
  }, [quillContent]);

  // 제목 변경 핸들러
  const handleTitleOnChange = (e) => {
    setTitle(e.target.value);
  };

  // 저장 버튼 클릭 시 처리
  const handleSaveOnClick = async () => {
    if (!title.trim()) {
      await Swal.fire({
        titleText: "제목을 입력하세요.",
        confirmButtonText: "확인",
      });
      return;
    }
    if (!quillContent.trim()) {
      await Swal.fire({
        titleText: "게시글 내용을 입력하세요.",
        confirmButtonText: "확인",
      });
      return;
    }

    const notice = {
      title,
      content: quillContent,
    };

    try {
      await modifyNoticeMutation.mutateAsync({ noticeId, notice });

      await Swal.fire({
        titleText: "게시글 수정 완료",
        confirmButtonText: "확인",
      });
      navigate(`/notice/${usercode}`);
    } catch (error) {
      await Swal.fire({
        titleText: "게시글 수정에 실패했습니다.",
        confirmButtonText: "확인",
      });
    }
  };

  return (
    <div css={s.quillEditor}>
      <div css={s.quillTop}>
        <input
          type="text"
          placeholder="제목을 입력해주세요."
          value={title}
          onChange={handleTitleOnChange}
        />
        <button css={s.saveButton} onClick={handleSaveOnClick}>저장</button>
      </div>
      <div ref={containerRef} />  {/* Quill 에디터 컨테이너 */}
    </div>
  );
}

export default NoticeModifyPage;
