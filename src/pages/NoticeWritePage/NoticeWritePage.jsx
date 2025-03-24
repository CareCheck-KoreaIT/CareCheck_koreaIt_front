/**@jsxImportSource @emotion/react */
import * as s from './style';
import React, { useEffect, useRef, useState } from 'react';
import Quill from 'quill';
import "quill/dist/quill.snow.css";
import { useCreateNoticeMutation } from '../../mutations/noticeMutation';
import Swal from 'sweetalert2';

function NoticeWritePage(props) {
  const createNoticeMutation = useCreateNoticeMutation();
  
  const [title, setTitle] = useState("");
  const [ quillContent, setQuillContent ] = useState("");

  const containerRef = useRef();

  useEffect(() => {
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

    quillInstance.on('text-change', () => {
      setQuillContent(quillInstance.root.innerHTML);
    });
  }, []);

  const handleTitleOnChange = (e) => {
    setTitle(e.target.value);
  };

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

     // 모든 HTML 태그 제거
    const plainTextContent = quillContent.replace(/<\/?[^>]+(>|$)/g, "");

    if (!plainTextContent.trim()) {
      await Swal.fire({
        titleText: "게시글 내용이 비어있습니다.",
        confirmButtonText: "확인",
      });
      return;
    }

    const notice = {
      title,
      content: plainTextContent,
    };

    const response = await createNoticeMutation.mutateAsync(notice);
    await Swal.fire({
      titleText: "게시글 작성 완료",
      confirmButtonText: "확인",
    });
  };

  return (
    <div css={s.quillEditor}>
      <div css={s.quillTop}>
        <input type="text" placeholder="제목을 입력해주세요." value={title} onChange={handleTitleOnChange} />
        <button css={s.saveButton} onClick={handleSaveOnClick}>저장</button>
      </div>
      <div ref={containerRef} />
    </div>
  );
}

export default NoticeWritePage;
