import { useQuery } from "@tanstack/react-query";
import { getSearchNoticeListApi, getUsercodeBoardListApi } from "../apis/noticeApi";


export const useGetSearchNoticeList = (params) => useQuery({
    queryKey: ["useGetSearchNoticeList"],
    queryFn: async () => {
        return await getSearchNoticeListApi(params);
    },
    retry: 0,
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 5,
});


export const useGetUsercodeNoticeList = (usercode, params) => {
    return useQuery({
      queryKey: ['useGetUsercodeNoticeList', usercode, params],
      queryFn: async () => {
        const data = await getUsercodeBoardListApi(usercode, params);
        return data;
      },
      retry: 0,
      staleTime: 1000 * 60 * 10,
      gcTime: 1000 * 60 * 5,
    });
  };

