import { api } from "../configs/axiosConfig";

export const searchWaitingListApi = async (usercode) => {
  console.log("listapi 실행", usercode);
  return await api.get("/admission/waitings", {
    params: { usercode: usercode },
  });
};

export const diagnosisOrderApi = async (admissionId, orders) => {
  return await api.post(`admission/${admissionId}/orders`, orders);
};

export const diagnosisDeseaseApi = async (admissionId, deseases) => {
  return await api.post(`admission/${admissionId}/diagnosis`, deseases);
};

export const insertVitalByAdmApi = async (admissionId, vitalInfo) => {
  return await api.post(`admisison/${admissionId}`, vitalInfo);
};

export const selectVitalByAdmApi = async (admissionId) => {
  return await api.get(`admission/${admissionId}/vitals` )
}

export const searchDetailBillByAdmApi = async (admissionId) => {
  return await api.get(`/admission/${admissionId}/billings`);
};

export const searchPatientInfoByAdmApi = async (admissionId) => {
  return await api.get(`/admission/${admissionId}`);
};

export const searchTotalPayByAdmApi = async (admissionId) => {
  return await api.get(`/admission/${admissionId}/totalpay`);
};