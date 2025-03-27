import { useQuery } from "@tanstack/react-query";
import {
  searchDetailBillByAdmApi,
  searchPatientInfoByAdmApi,
  searchTotalPayByAdmApi,
  selectVitalByAdmApi,
  searchWaitingListApi,
  searchAllWaitingListApi,
  searchAdmissionListApi,
} from "../apis/admissionApi";

export const useGetSearchDetailBill = (admissionId) => {
  console.log("detailBill", admissionId);
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
  console.log("patientInfo", admissionId);
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
  console.log("totalpay", admissionId);
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
  return useQuery({
    queryKey: ["useGetSelectVital", admissionId],
    queryFn: async () => {
      return await selectVitalByAdmApi(admissionId);
    },
    enabled: !!admissionId,
  });
};

export const useGetSearchWaitingList = (usercode) => {
  return useQuery({
    queryKey: ["useGetSearchWaitingList", usercode],
    queryFn: async () => {
      return await searchWaitingListApi(usercode);
    },
    retry: 0,
    staleTime: 0,
    gcTime: 0,
  });
};

export const useGetSearchAllWaitingList = (keyword) => {
  // console.log("searchAllWaiting query 실행 : ", keyword);
  return useQuery({
    queryKey: ["useGetSearchAllWaitingList", keyword],
    queryFn: async () => {
      return await searchAllWaitingListApi(keyword);
    },
    retry: 0,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 5,
  });
};

export const useGetSearchAdmissionListByPatientName = (patientName) => {
  return useQuery({
    queryKey: ["useGetSearchAdmissionListByPatientName", patientName],
    queryFn: async () => {
      return await searchAdmissionListApi(patientName);
    },
    retry: 0,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 5,
    enabled: !!patientName,
  });
};
