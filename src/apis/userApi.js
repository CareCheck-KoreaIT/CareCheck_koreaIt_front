import { api } from "../configs/axiosConfig";

export const getUserMeApi = async () => await api.get("/account/users/me");

export const signupApi = async (signupInfo) => {
    return await api.post("/admin/users", signupInfo);
}