import { useQuery } from "@tanstack/react-query";
import { searchDeseaseApi } from "../apis/diseaseApi";

export const useGetSearchDisease = (keyword) => {
    console.log("searchDisease query실행", keyword);
    return useQuery({
      queryKey: ["useGetSearchDisease", keyword],
      queryFn: async () => {
        return await searchDeseaseApi(keyword);
      },
      retry: 0,
      staleTime: 1000 * 60 * 5,
      gcTime: 1000 * 60 * 5,
    });
  };