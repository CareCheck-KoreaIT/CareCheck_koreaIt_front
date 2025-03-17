import { useQuery } from "@tanstack/react-query";
import { getUserMeApi } from "../apis/userApi";

export const useUserMeQuery = () => useQuery({
    queryKey: ["userMeQuery"],
    queryFn: getUserMeApi,
    retry: 0,
    staleTime: 1000 * 60 * 20,  // 캐싱
    gcTime: 1000 * 60 * 10,     // refresh 하지 않은 데이터 처리
});