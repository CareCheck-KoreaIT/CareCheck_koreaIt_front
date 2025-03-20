import { useQuery } from "@tanstack/react-query";
import {
  searchDetailBillByAdmApi,
  searchPatientInfoByAdmApi,
  searchTotalPayByAdmApi,
  selectVitalByAdmApi,
  searchWaitingListApi,
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
  console.log("searchPateintInfo 실행 : ", admissionId);
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
  console.log("searchTotalPay 실행 : ", admissionId);
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

export const useGetSelectVital = (admissionId) => {
  console.log("SelectVital 실행", admissionId);
  console.log(typeof admissionId)
  return useQuery({
    queryKey: ["useGetSelectVital", admissionId],
    queryFn: async () => {
      return await selectVitalByAdmApi (admissionId);
      
export const useGetSearchWaitingList = (usercode) => {
  console.log("searchWaiting query 실행 : ", usercode)
  return useQuery({
    queryKey: ["useGetSearchWaitingList", usercode],
    queryFn : async() => {
      return await searchWaitingListApi(usercode);
    },
    retry: 0,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 5,
  })
}