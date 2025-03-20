/**@jsxImportSource @emotion/react */
import Select from 'react-select';
import * as s from './style';
import { BiSearch } from 'react-icons/bi';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import { IoSettingsSharp } from 'react-icons/io5';
import { useGetSearchNoticeList } from '../../queries/NoticeQuery';

function NoticeListPage(props) {
    
    const [ searchParams, setSearchParams ] = useSearchParams();
    const page = parseInt(searchParams.get("page") || "1");
    const order = searchParams.get("order") || "all";
    const searchText = searchParams.get("searchText") || "";

    const searchNoticeList = useGetSearchNoticeList({
        page,
        limitCount: 15,
        order,
        searchText,
    });

    const [ pageNumbers, setPageNumbers ] = useState([]);
    const [ searchValue, setSearchValue ] = useState(searchText);

    const orderSelectOptions = [
        {label: "전체", value: "all"},
        {label: "최근 게시글", value: "recent"},
        {label: "오래된 게시글", value: "oldest"},
        {label: "조회수 많은 순", value: "viewDesc"},
        {label: "조회수 적은 순", value: "viewAsc"},
    ];

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
    }, [searchParams]);

    const handleSelectOnChange = (option) => {
        searchParams.set("order", option.value);
        searchParams.set("page", 1);
        setSearchParams(searchParams);
    }

    const handleSearchInputOnChange = (e) => {
        setSearchValue(e.target.value);
    }

    const handleSearchInputOnKeyDown = (e) => {
        if(e.key === "Enter") {
            handleSearchButtonOnClick();
        }
    }

    const handleSearchButtonOnClick = () => {
        searchParams.set("searchText", searchValue);
        searchParams.set("page", 1);
        setSearchParams(searchParams);
    }

    const handlePagenumbersOnClick = (pageNumber) => {
        searchParams.set("page", pageNumber);
        setSearchParams(searchParams);
    }

    return (
        <div css={s.container}>
            <div css={s.header}>
                <div css={s.title}>
                    <h2>공지사항</h2>
                </div>
                <div css={s.searchItems}>
                    <Select 
                        options={orderSelectOptions}
                        styles={{
                            control: (style) => ({
                                ...style,
                                width: "11rem",
                                minHeight: "3.2rem",
                                fontSize: 15,
                            }),
                            dropdownIndicator: (style) => ({
                                ...style,
                                padding: "0.3rem",
                            }),
                            menu: (style) => ({
                                ...style,
                                fontSize: "14px",
                            }),
                        }}
                        value={orderSelectOptions.find((options) => options.value === order)}
                        onChange={handleSelectOnChange}
                    />
                    <input css={s.searchInput} type="text"
                        value={searchValue}
                        onChange={handleSearchInputOnChange}
                        onKeyDown={handleSearchInputOnKeyDown}
                    />
                    <button css={s.searchButton} onClick={handleSearchButtonOnClick}><BiSearch /></button>
                </div>
            </div>
            <div css={s.main}>
                <ul css={s.userListContainer}>
                    <li>
                        <div>No.</div>
                        <div>제목</div>
                        <div>작성자</div>
                        <div>등록일</div>
                        <div>조회수</div>
                    </li>
                    {
                        searchNoticeList.isLoading ||
                        searchNoticeList?.data?.data.noticeList.map(params =>
                            <li key={params.noticeId}>
                                <div>{params.noticeId}</div>
                                <div>{params.title}</div>
                                <div>{params.username}</div>
                                <div>{params.createdAt}</div>
                                <div>{params.viewCount}</div>
                            </li>
                        )
                    }
                </ul>
            </div>
            <div css={s.footer}>
                <div css={s.pageNumbers}>
                    <button disabled={searchNoticeList?.data?.data.isfirstPage} onClick={() => handlePagenumbersOnClick(page - 1)}><GoChevronLeft /></button>
                    {
                        pageNumbers.map(number =>
                            <button key={number} css={s.pageNum(page === number)} onClick={() => handlePagenumbersOnClick(number)}><span>{number}</span></button>
                        )
                    }
                    <button disabled={searchNoticeList?.data?.data.islastPage} onClick={() => handlePagenumbersOnClick(page + 1)}><GoChevronRight /></button>
                </div>
            </div>
        </div>
    );
}

export default NoticeListPage;
