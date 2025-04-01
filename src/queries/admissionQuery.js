import { useQuery } from "@tanstack/react-query";
import {
  searchDetailBillByAdmApi,
  searchPatientInfoByAdmApi,
  searchTotalPayByAdmApi,
  selectVitalByAdmApi,
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
    enabled: !!admissionId
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
    enabled: !!admissionId,
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

export const useGetSearchWaitingList = () => {
  return useQuery({
    queryKey: ["useGetSearchWaitingList"],
    queryFn: async () => {
      return await searchWaitingListApi();
    },
    retry: 0,
    staleTime: 0,
    gcTime: 0,
  });
};

export const useGetSearchAllWaitingList = (params) => useQuery({
  queryKey: ["useGetSearchAllWaitingList"],
  queryFn: async () => {
    return await searchAllWaitingListApi(params);
  },
  retry: 0,
  staleTime: 1000 * 60 * 5,
  gcTime: 1000 * 60 * 5,
});

export const useGetAllWaitingTotalCount = (keyword) => {
  return useQuery({
    queryKey: ["useGetAllWaitingTotalCount", keyword],
    queryFn: async () => {
      return await getAllWaitingTotalCountApi(keyword);
    },
    retry: 0,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 5,
  })
}

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
