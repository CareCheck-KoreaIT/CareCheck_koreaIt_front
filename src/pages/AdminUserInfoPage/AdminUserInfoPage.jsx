/**@jsxImportSource @emotion/react */
import Select from 'react-select';
import * as s from './style';
import { BiSearch } from 'react-icons/bi';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useGetSearchUserList } from '../../queries/userQuery';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import { IoSettingsSharp } from 'react-icons/io5';
import { MdOutlineCancel } from 'react-icons/md';
import ReactModal from 'react-modal';
import ChangeUserModal from '../../components/modal/Admin/ChangeUserModal/ChangeUserModal';

function AdminUserInfoPage(props) {

    const [ searchParams, setSearchParams ] = useSearchParams();
    const page = parseInt(searchParams.get("page") || "1");
    const order = searchParams.get("order") || "all";
    const searchName = searchParams.get("searchName") || "";

    const searchUserList = useGetSearchUserList({
        page,
        limitCount: 15,
        order,
        searchName,
    });

    const [ pageNumbers, setPageNumbers ] = useState([]);
    const [ searchValue, setSearchValue ] = useState(searchName);

    const orderSelectOptions = [
        {label: "전체", value: "all"},
        {label: "관리자", value: "관리자"},
        {label: "의사", value: "의사"},
        {label: "간호사", value: "간호사"},
        {label: "원무", value: "원무"},
    ];

    const [ foundUser, setFoundUser ] = useState({});
    const [ isOpen, setIsOpen ] = useState(false);

    useEffect(() => {
        if(!searchUserList.isLoading) {
            const currentPage = searchUserList?.data?.data.page || 1;
            const totalPages = searchUserList?.data?.data.totalPages || 1;
            const startIndex = (Math.floor((currentPage - 1) / 5) * 5) + 1;
            const endIndex = startIndex + 4 > totalPages ? totalPages : startIndex + 4;

            let newPageNumbers = [];
            for(let i = startIndex; i <= endIndex; i++) {
                newPageNumbers = [...newPageNumbers, i];
            }
            setPageNumbers(newPageNumbers);
        }
        console.log(searchUserList?.data?.data);
    }, [searchUserList.data]);

    useEffect(() => {
        searchUserList.refetch();
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
        searchParams.set("searchName", searchValue);
        searchParams.set("page", 1);
        setSearchParams(searchParams);
    }

    const handlePagenumbersOnClick = (pageNumber) => {
        searchParams.set("page", pageNumber);
        setSearchParams(searchParams);
    }

    const handleChangeInfoButtonOnClick = (usercode) => {
        console.log(searchUserList?.data?.data.userSearchList.find(user => user.usercode === usercode));
        setFoundUser(searchUserList?.data?.data.userSearchList.find(user => user.usercode === usercode));
        setIsOpen(true);
    }
    
    return (
        <div css={s.container}>
            <div css={s.header}>
                <div css={s.title}>
                    <h2>직원 관리</h2>
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
                        <div>사번</div>
                        <div>이름</div>
                        <div>권한</div>
                        <div>전화번호</div>
                        <div>이메일</div>
                        <div>생성날짜</div>
                        <div>수정날짜</div>
                        <div></div>
                    </li>
                    {
                        searchUserList.isLoading ||
                        searchUserList?.data?.data.userSearchList.map(userList =>
                            <li key={userList.index}>
                                <div>{userList.usercode}</div>
                                <div>{userList.username}</div>
                                <div>{userList.userRole.role.roleName}</div>
                                <div>{userList.phoneNumber}</div>
                                <div>{userList.email}</div>
                                <div>{userList.createdAt}</div>
                                <div>{userList.updatedAt}</div>
                                <div>
                                    <button onClick={() => handleChangeInfoButtonOnClick(userList.usercode)}><IoSettingsSharp /></button>
                                    <button><MdOutlineCancel /></button>
                                </div>
                            </li>
                        )
                    }
                </ul>
            </div>
            <div css={s.footer}>
                <div css={s.pageNumbers}>
                    <button disabled={searchUserList?.data?.data.firstPage} onClick={() => handlePagenumbersOnClick(page - 1)}><GoChevronLeft /></button>
                    {
                        pageNumbers.map(number =>
                            <button key={number} css={s.pageNum(page === number)} onClick={() => handlePagenumbersOnClick(number)}><span>{number}</span></button>
                        )
                    }
                    <button disabled={searchUserList?.data?.data.lastPage} onClick={() => handlePagenumbersOnClick(page + 1)}><GoChevronRight /></button>
                </div>
            </div>
            <ReactModal 
                isOpen={isOpen}
                onRequestClose={() => setIsOpen(false)}
                style={{
                    overlay: {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#00000088"
                    },
                    content: {
                        position: "static",
                        boxSizing: "border-box",
                        borderRadius: "1.5rem",
                        width: "60rem",
                    }
                }}
                children={<ChangeUserModal setOpen={setIsOpen} user={foundUser} />}
            />
        </div>
    );
}

export default AdminUserInfoPage;