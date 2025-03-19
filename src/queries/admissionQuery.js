import { useQuery } from "@tanstack/react-query";
import { searchDetailBillByAdmApi } from "../apis/admissionApi";

export const useGetSearchDetailBill = (admId, admDate) =>
  useQuery({
    queryKey: ["useGetSearchDetailBill", admId, admDate],
    queryFn: async () => {
      return await searchDetailBillByAdmApi(admId, admDate);
    },
    retry: 0,
    staleTime: 1000 * 60,
    gcTime: 1000 * 60,
  });
