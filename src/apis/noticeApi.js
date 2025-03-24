import { api } from "../configs/axiosConfig";

export const createNoticeApi = async (notice) => await api.post("/notices", notice);
export const getUsercodeBoardListApi = async (usercode, params) => {
  console.log("Request URL:", `/notices/${usercode}`, params);
  return await api.get(`/notices/${usercode}`, { params });
};

export const deleteNoticeApi = async(noticeId) => await api.delete(`/notices/${noticeId}`);
