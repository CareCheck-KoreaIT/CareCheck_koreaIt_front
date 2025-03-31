import { useQuery } from "@tanstack/react-query";
import { getSearchNoticeListApi, getUsercodeBoardListApi, getUsercodeNoticeListApi } from "../apis/noticeApi";


export const useGetSearchNoticeList = (params) => useQuery({
    queryKey: ["useGetSearchNoticeList"],
    queryFn: async () => {
        return await getSearchNoticeListApi(params);
    },
    retry: 0,
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 5,
});

export const useGetUsercodeNoticeList = (params) => useQuery({
  queryKey: ["useGetUsercodeNoticeList"],
  queryFn: async () => {
    return await getUsercodeNoticeListApi(params);
  },
  retry: 0,
  staleTime: 1000 * 60 * 10,
  gcTime: 1000 * 60 * 5,
});


