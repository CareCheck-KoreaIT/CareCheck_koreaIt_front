/**@jsxImportSource @emotion/react */
import Select from 'react-select';
import * as s from './style';
import { BiSearch } from 'react-icons/bi';
import { useParams, useSearchParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import { useGetUsercodeNoticeList } from '../../queries/noticeQuery';

function NoticePage(props) {
    const params = useParams();
    const usercodeNoticeList = useGetUsercodeNoticeList(params.usercode);
    const noticeDataList = usercodeNoticeList?.data?.data || []

    useEffect(() => {
        console.log(usercodeNoticeList.data)
    }, [usercodeNoticeList.data])

    console.log(noticeDataList)
    

    
    
    



    // useEffect(() => {
    //     if(!searchNoticeList.isLoading) {
    //         const currentPage = searchNoticeList?.data?.data.page || 1;
    //         const totalPages = searchNoticeList?.data?.data.totalPages || 1;
    //         const startIndex = (Math.floor((currentPage - 1) / 5) * 5) + 1;
    //         const endIndex = startIndex + 4 > totalPages ? totalPages : startIndex + 4;

    //         let newPageNumbers = [];
    //         for(let i = startIndex; i <= endIndex; i++) {
    //             newPageNumbers = [...newPageNumbers, i];
    //         }
    //         setPageNumbers(newPageNumbers);
    //     }
    // }, [searchNoticeList.data]);

    // useEffect(() => {
    //   searchNoticeList.refetch();
    // }, [searchParams]);


    const handleSearchInputOnChange = (e) => {
        setSearchValue(e.target.value);
    }

    const handleSearchInputOnKeyDown = (e) => {
        if(e.key === "Enter") {
            handleSearchButtonOnClick();
        }
    }

    // const handleSearchButtonOnClick = () => {
    //     searchParams.set("searchText", searchValue);
    //     searchParams.set("page", 1);
    //     setSearchParams(searchParams);
    // }

    // const handlePagenumbersOnClick = (pageNumber) => {
    //     searchParams.set("page", pageNumber);
    //     setSearchParams(searchParams);
    // }

    return (
        <div css={s.container}>
            <div css={s.header}>
                <div css={s.title}>
                    <h2>공지 사항</h2>
                </div>
                <div css={s.searchItems}>
                    <input css={s.searchInput} type="text"
                        onChange={handleSearchInputOnChange}
                        onKeyDown={handleSearchInputOnKeyDown}
                    />
                    <button css={s.searchButton}><BiSearch /></button>
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
                    {
                        noticeDataList.length > 0 ?
                        noticeDataList.map((param, index) =>
                            <li key={param.noticeId}>
                                <div>{index + 1}</div>
                                <div>{param.title}</div>
                                <div>{param.username}</div>
                                <div>{param.createdAt}</div>
                                <div>
                                    <button css={s.deleteButton}>삭제</button>
                                </div>
                            </li>
                        )
                        : <div>값이 없음.</div>
                    }
                </ul>
            </div>
            <div css={s.footer}>
                <div css={s.pageNumbers}>
                    <button ><GoChevronLeft /></button>
                    {/* {
                        pageNumbers.map(number =>
                            <button key={number} css={s.pageNum(page === number)} onClick={() => handlePagenumbersOnClick(number)}><span>{number}</span></button>
                        )
                    } */}
                    <button onClick={() => handlePagenumbersOnClick(page + 1)}><GoChevronRight /></button>
                </div>
            </div>
        </div>
    )
}

export default NoticePage;