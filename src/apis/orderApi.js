import { api } from "../configs/axiosConfig"

export const orderCreateApi = async (order) => {
    await api.post("/orders", order);
}