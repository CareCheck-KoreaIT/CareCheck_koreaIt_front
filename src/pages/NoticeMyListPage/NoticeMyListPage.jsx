/**@jsxImportSource @emotion/react */
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useGetUsercodeNoticeList } from '../../queries/noticeQuery';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import { useEffect, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import * as s from './style';
import { useDeleteNoticeMutation } from '../../mutations/noticeMutation';
import DeleteNoticeModal from '../../components/modal/DeleteNoticeModal/DeleteNoticeModal';
import NoticeMyListModal from '../../components/modal/NoticeMyListModal/NoticeMyListModal';
import Swal from 'sweetalert2';
import { useQueryClient } from '@tanstack/react-query';

function NoticeMyListPage() {
    const navigate = useNavigate();
    const [ searchParams, setSearchParams ] = useSearchParams();
    const page = parseInt(searchParams.get("page") || "1");
    const searchText = searchParams.get("searchText") || "";
    const order = searchParams.get("order") || "default";
    const [ isModalOpen, setIsModalOpen ] = useState(false);
    const [ selectedNoticeId, setSelectedNoticeId ] = useState(null);
    const [ isNoticeModalOpen, setIsNoticeModalOpen ] = useState(false);
    const [ selectedNotice, setSelectedNotice ] = useState(null);
    const queryClient = useQueryClient();
    const searchNoticeList = useGetUsercodeNoticeList({
        page,
        limitCount: 15,
        order,
        searchText,
    });

    const [ pageNumbers, setPageNumbers ] = useState([]);
    const [ searchValue, setSearchValue ] = useState(searchText); 
    const  { mutate: deleteNotice } = useDeleteNoticeMutation();

    useEffect(() => {
        if(!searchNoticeList.isLoading) {
            const currentPage = searchNoticeList?.data?.data.page || 1;
            const totalPages = searchNoticeList?.data?.data.totalPages || 1;
            const startIndex = (Math.floor((currentPage - 1) / 5) * 5) + 1;
            const endIndex = startIndex + 4 > totalPages ? totalPages : startIndex + 4;
    
            let newPageNumbers = [];
            for(let i = startIndex; i <= endIndex; i++) {
                newPageNumbers = [...newPageNumbers, i];
            }
            setPageNumbers(newPageNumbers);
        }
        console.log(searchNoticeList?.data?.data);
    }, [searchNoticeList.data]);

    useEffect(() => {
        searchNoticeList.refetch();
        console.log("!!!!");
    }, [searchParams]);

    const searchOnChange = (e) => {
        setSearchValue(e.target.value)
    };

    const handleSearchInputOnKeyDown = (e) => {
        if(e.key === "Enter") {
            handleSearchButtonOnClick();
        }
    }

    const handleSearchButtonOnClick = () => {
        searchParams.set("searchText", searchValue);
        searchParams.set("page", 1);
        setSearchParams(searchParams);
        console.log(searchValue);
    };

    const handlePagenumbersOnClick = (pageNumber) => {
        searchParams.set("page", pageNumber);
        setSearchParams(searchParams);
    }
    
    const handleWritePageOnClick = () => {
        navigate("/notice/write")
    }

    const handleDeleteNoticeOnClick = (noticeId) => {
        // 삭제 확인 모달 띄우기
        setSelectedNoticeId(noticeId);
        setIsModalOpen(true);
    };
    
    const handleTitleOnClick = (notice) => {
        setSelectedNotice(notice);
        setIsNoticeModalOpen(true);
    }

    const handleConfirmDeleteOnClick = async () => {
        if (selectedNoticeId) {
            deleteNotice(selectedNoticeId, {
            onSuccess: async () => {
                setIsModalOpen(false);
                await Swal.fire({
                    titleText: "삭제가 완료되었습니다.",
                    icon: "success",
                    confirmButtonText: "확인"
                });
                queryClient.invalidateQueries(["searchNoticeList"]);
            },
            onError: async () => {
                setIsModalOpen(false);
                await Swal.fire({
                titleText: "삭제 실패",
                icon: "error",
                confirmButtonText: "확인"
            });
            }
            });
        }
    };
    
      const handleCancelDeleteOnClick = () => {
        setIsModalOpen(false);
    }
    
    const handleCloseModalOnClick = () => {
        setIsModalOpen(false);
      };


    return (
        <div css={s.container}>
            <div css={s.header}>
                <h2>
                    공지 사항
                    <span>- 총 {searchNoticeList?.data?.data?.totalElements || 0}건 -</span>
                </h2>
        <div css={s.searchItems}>
                    <input
                    css={s.searchInput}
                    type="text"
                    value={searchValue}
                    onChange={searchOnChange}
                    onKeyDown={handleSearchInputOnKeyDown}
                    />
                    <button css={s.searchButton} onClick={handleSearchButtonOnClick}>
                    <BiSearch />
                    </button>
                </div>
            </div>
        
            <div css={s.main}>
                <ul css={s.noticeList}>
                    <li>
                    <div>No.</div>
                    <div>제목</div>
                    <div>작성자</div>
                    <div>등록일</div>
                    <div>삭제</div>
                    </li>
                    {searchNoticeList.isLoading ? (
                    <div>로딩 중...</div>
                    ) : searchNoticeList?.data?.data?.noticeList?.length ? (
                    searchNoticeList.data?.data.noticeList.map((param, index) => (
                        <li key={param.noticeId}>
                        <div>{(page - 1) * 15 + (index + 1)}</div>
                        <div onClick={() => handleTitleOnClick(param)}>{param.title}</div>
                        <div>{param.username}</div>
                        <div>{param.createdAt}</div>
                        <div>
                            <button 
                                css={s.deleteButton} 
                                onClick={() => handleDeleteNoticeOnClick(param.noticeId)}>
                                삭제
                            </button>
                        </div>
                        </li>
                    ))
                    ) : (
                    null
                    )}
                </ul>
            </div>
        
            <div css={s.footer}>
                <div css={s.pageNumbers}>
                    <button 
                        disabled={searchNoticeList?.data?.data?.firstPage} 
                        onClick={() => handlePagenumbersOnClick(page - 1)}
                    >
                        <GoChevronLeft />
                    </button>
                    {
                        pageNumbers.map((number) => (
                        <button
                            key={number}
                            css={s.pageNum(page === number)}
                            onClick={() => handlePagenumbersOnClick(number)}
                        >
                            <span>{number}</span>
                        </button>
                        ))
                    }
        
                    <button 
                        disabled={searchNoticeList?.data?.data?.lastPage} 
                        onClick={() => handlePagenumbersOnClick(page + 1)}
                    >
                        <GoChevronRight />
                    </button>
                </div>
                <div css={s.writeLayout}>
                    <button css={s.writeButton} onClick={handleWritePageOnClick}>글쓰기</button>
                </div>
            </div>
            <NoticeMyListModal
                isOpen={isNoticeModalOpen}
                setIsOpen={setIsNoticeModalOpen}
                notice={selectedNotice}
            />
        
            <DeleteNoticeModal 
                isOpen={isModalOpen}
                onCancel={handleCancelDeleteOnClick}
                onConfirm={handleConfirmDeleteOnClick}
                onClose={handleCloseModalOnClick} 
            />
        
        </div>
        );
}

export default NoticeMyListPage;