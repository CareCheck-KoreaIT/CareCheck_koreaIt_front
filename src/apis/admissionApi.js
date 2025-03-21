import { api } from "../configs/axiosConfig";

export const searchWaitingListApi = async (usercode) => {
  return await api.get("/admission/waitings", {
    params: { usercode: usercode },
  });
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

export const insertOrdersApi = async (admissionId, orders)=> {
  return await api.post(`admission/${admissionId}/orders`, orders)
}

export const insertDiagnosisApi = async (admissionId, diagnosis) => {
  return await api.post(`admission/${admissionId}/diagnosis`, diagnosis)
}