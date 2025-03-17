import { api } from "../configs/axiosConfig";

export const getUserMeApi = async () => await api.get("/user/me");