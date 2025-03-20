import { api } from "../configs/axiosConfig";

export const updateEmailApi = async ({usercode, email}) => await api.put(`/account/users/${usercode}/email`, {email});
export const updatePhoneNumberApi = async ({usercode, phoneNumber}) => await api.put(`/account/users/${usercode}/phoneNumber`, {phoneNumber});
export const getUserMeApi = async () => await api.get("/account/users/me");

export const signupApi = async (signupInfo) => {
    return await api.post("/admin/users", signupInfo);
}

export const getSearchUserListApi = async (params) => await api.get("/admin/users", {params});