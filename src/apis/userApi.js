import { api } from "../configs/axiosConfig";

export const updatePasswordApi = async ({currentPassword, newPassword}) => await api.put(`/account/users/password`, {currentPassword, newPassword});
export const updateEmailApi = async (email) => await api.put(`/account/users/email`, {email});
export const updatePhoneNumberApi = async (phoneNumber) => await api.put(`/account/users/phoneNumber`, {phoneNumber});
export const getUserMeApi = async () => await api.get("/account/users/me");

export const signupApi = async (signupInfo) => {
    return await api.post("/admin/users", signupInfo);
}

export const getSearchUserListApi = async (params) => await api.get("/admin/users", {params});