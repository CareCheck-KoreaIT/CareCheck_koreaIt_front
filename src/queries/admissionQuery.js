import { useQuery } from "@tanstack/react-query";
import {
  searchDetailBillByAdmApi,
  searchPatientInfoByAdmApi,
  searchTotalPayByAdmApi,
} from "../apis/admissionApi";

export const useGetSearchDetailBill = (admissionId) => {
  console.log("searchDetailBill 실행", admissionId);
  return useQuery({
    queryKey: ["useGetSearchDetailBill", admissionId],
    queryFn: async () => {
      return await searchDetailBillByAdmApi(admissionId);
    },
    retry: 0,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 5,
  });
};
export const useGetSearchPatientInfo = (admissionId) => {
  console.log("searchPateintInfo 실행", admissionId);
  return useQuery({
    queryKey: ["useGetSearchPatientInfo", admissionId],
    queryFn: async () => {
      return await searchPatientInfoByAdmApi(admissionId);
    },
    retry: 0,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 5,
  });
};
export const useGetSearchTotalPay = (admissionId) => {
  console.log("searchTotalPay 실행", admissionId);
  return useQuery({
    queryKey: ["useGetSearchTotalPay", admissionId],
    queryFn: async () => {
      return await searchTotalPayByAdmApi(admissionId);
    },
    retry: 0,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 5,
  });
};
