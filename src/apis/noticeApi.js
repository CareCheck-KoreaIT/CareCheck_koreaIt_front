import { api } from "../configs/axiosConfig";

export const createNoticeApi = async (notice) => await api.post("/notices", notice);