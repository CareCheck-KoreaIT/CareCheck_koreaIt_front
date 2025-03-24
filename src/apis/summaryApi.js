import { api } from "../configs/axiosConfig";

export const searchTotalSummaryApi = async (year) => {
  return await api.get(`/summary`, {
    params: { year },
  });
};
