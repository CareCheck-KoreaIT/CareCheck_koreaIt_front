import { api } from "../configs/axiosConfig";

export const createNoticeApi = async (notice) => await api.post("/notices", notice);
export const getUsercodeBoardListApi = async (usercode, params) => {
  return await api.get(`/notices/${usercode}`, { params });
};