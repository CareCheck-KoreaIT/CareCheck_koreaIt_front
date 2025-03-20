import { api } from "../configs/axiosConfig";

export const getUserMeApi = async () => await api.get("/account/users/me");

export const signupApi = async (signupInfo) => {
    return await api.post("/admin/users", signupInfo);
}

export const getSearchUserListApi = async (params) => await api.get("/admin/users", {params});