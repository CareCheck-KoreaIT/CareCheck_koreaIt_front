import { api } from "../configs/axiosConfig";

export const createNoticeApi = async (notice) => await api.post("/notices", notice);

export const getUsercodeBoardListApi = async (usercode, params) => {
  console.log("Request URL:", `/notices/${usercode}`, params);
  return await api.get(`/notices/${usercode}`, { params });
};

<<<<<<< HEAD
export const deleteNoticeApi = async(noticeId) => await api.delete(`/notices/${noticeId}`);
=======
export const getSearchNoticeListApi = async (params) => 
    await api.get("/notices", {params});
    console.log(Response.data);
>>>>>>> c7a29285dbd7fe7e32c35b9f97e6127d6c12e94a
