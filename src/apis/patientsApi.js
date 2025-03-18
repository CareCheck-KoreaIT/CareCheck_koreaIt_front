
import { api } from "../configs/axiosConfig";

// 환자 등록 API (POST)
export const addPatientApi = async (newPatient) => {
  const response = await api.post("/patient/registration", newPatient);
  return response.data;
  
};