import { api } from "../configs/axiosConfig"

export const signupApi = async (signupInfo) => {
    return await api.post("/user/auth/signup", signupInfo);
}

export const signinApi = async (signinInfo) => {
    return await api.post("/auth/signin", signinInfo);
}