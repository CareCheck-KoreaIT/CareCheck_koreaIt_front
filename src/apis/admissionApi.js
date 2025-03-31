import { api } from "../configs/axiosConfig";

export const searchWaitingListApi = async (usercode) => {
  return await api.get("/admission/waitings");
};

export const insertVitalByAdmApi = async (admissionId, vitalInfo) => {
  return await api.post(`/admisison/${admissionId}`, vitalInfo);
};

export const selectVitalByAdmApi = async (admissionId) => {
  return await api.get(`/admission/${admissionId}/vitals`);
};

export const searchDetailBillByAdmApi = async (admissionId) => {
  return await api.get(`/admission/${admissionId}/billings`);
};

export const searchPatientInfoByAdmApi = async (admissionId) => {
  return await api.get(`/admission/${admissionId}`);
};

export const searchTotalPayByAdmApi = async (admissionId) => {
  return await api.get(`/admission/${admissionId}/totalpay`);
};

export const insertOrdersApi = async ({ admissionId, ordersList }) => {
  return await api.post(`/admission/${admissionId}/orders`, ordersList);
};

export const insertDiagnosisApi = async ({ admissionId, diagnosisList }) => {
  return await api.post(`/admission/${admissionId}/diagnosis`, diagnosisList);
};

export const updateStartDate = async (admissionId) => {
  return await api.put(`/admission/${admissionId}/start`);
};

export const updateEndDate = async (admissionId) => {
  return await api.put(`/admission/${admissionId}/complete`);
};

export const searchAllWaitingListApi = async ({ page, limitCount, keyword }) => {
  const params = {
    page: page || 1,
    limitCount: limitCount || 10
  };

  if (keyword) {
    params.keyword = keyword;
  }

  return await api.get(`/admission/allwaitings`, { 
    params: params
  });
};


export const getAllWaitingTotalCountApi = async (keyword) => {
  return await api.get("/admission/waiting-count", {
    params: { keyword: keyword || '' }
  })
}

export const deleteReceiptApi = async (admissionId) => {
  console.log(admissionId);

  await api.delete(`/admission/${admissionId}`);
};

export const searchAdmissionListApi = async (patientName) => {
  return await api.get("/admission/admission-list", {
    params: { patientName },
  });
};

export const insertAdmissonApi = async (patientId) => {
  await api.post("/admission", {
    params: {patientId}
  });
};
