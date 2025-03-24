import { useQuery } from "@tanstack/react-query";
import { getUsercodeBoardListApi} from "../apis/noticeApi";

export const useGetUsercodeNoticeList = (usercode, params) => {
  return useQuery({
    queryKey: ["useGetUsercodeNoticeList", usercode],
    queryFn: async () => {
      return await getUsercodeBoardListApi(usercode, params);
    },
    retry: 0,
    staleTime: 1000 * 60 * 10,
    cacheTime: 1000 * 60 * 5,
  });
};


