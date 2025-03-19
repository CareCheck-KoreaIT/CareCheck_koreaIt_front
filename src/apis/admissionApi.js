import { api } from "../configs/axiosConfig";

export const searcWaitingListApi = async (usercode) => {
  return await api.get("/adm/waitingList", usercode);
};

export const searchDetailBillByAdmApi = async (admId, admDate) => {
  console.log("api가 실행되었습니다. ", admId);
  console.log("admDate : ", admDate);
  return await api.get(`/admission/${admId}/billings`, { params: { admDate } });
};
