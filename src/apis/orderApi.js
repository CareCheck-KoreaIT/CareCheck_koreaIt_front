import { api } from "../configs/axiosConfig";

export const orderCreateApi = async (order) => {
  await api.post("/orders", order);
};

export const orderSearchApi = async (keyword) => {
  return await api.get(`/orders/list`, { params: { keyword } });
};
