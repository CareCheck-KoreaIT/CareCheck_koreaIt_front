import { api } from "../configs/axiosConfig";

export const createNoticeApi = async (notice) =>
  await api.post("/notices", notice);

export const getSearchNoticeListApi = async (params) => 
    await api.get("/notices", {params});
    // console.log(Response.data);

export const getViewCountApi = async (noticeId) =>
    await api.post(`/notices/${noticeId}`);

export const getUsercodeBoardListApi = async (usercode, params) => {
  console.log("Request URL:", `/notices/${usercode}`, params);
  return await api.get(`/notices/${usercode}`, { params });
};

export const getUsercodeNoticeListApi = async ({params}) => await api.get("/notices/mylist", {params});

export const deleteNoticeApi = async(noticeId) => await api.delete(`/notices/${noticeId}`);

export const updateNoticeApi = async (params) => {
  const { usercode, noticeId, notice } = params;

  console.log(`/notices/${usercode}/${noticeId}`, notice);

  return await api.put(`/notices/${usercode}/${noticeId}`, notice);
};