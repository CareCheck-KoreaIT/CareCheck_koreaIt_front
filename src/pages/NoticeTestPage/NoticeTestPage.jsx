/**@jsxImportSource @emotion/react */
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useGetUsercodeNoticeList, useGetUsercodeNoticeListTest } from '../../queries/noticeQuery';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import { useEffect, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import * as s from './style';
import { useDeleteNoticeMutation } from '../../mutations/noticeMutation';
import DeleteNoticeModal from '../../components/modal/DeleteNoticeModal/DeleteNoticeModal';
import NoticeMyListModal from '../../components/modal/NoticeMyListModal/NoticeMyListModal';
import Swal from 'sweetalert2';
import { useQueryClient } from '@tanstack/react-query';

function NoticeTestPage() {
    const queryClient = useQueryClient();
    const searchNoticeList = useGetUsercodeNoticeListTest({
        page: 1,
        limitCount: 15,
        order: "default",
        searchText: "",
    });

    useEffect(() => {
        if(!searchNoticeList.isLoading) {
            console.log(searchNoticeList);
        }
    }, [searchNoticeList])

    const handleOnClick = () => {
    }
    


    return (
        <>
            <button onClick={handleOnClick}>검색</button>
        </>
    );
}

export default NoticeTestPage;