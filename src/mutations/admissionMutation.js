import { useMutation } from "@tanstack/react-query";
import { insertDiagnosisApi, insertOrdersApi } from "../apis/admissionApi";

export const useOrdersInAdmIdMutation = () =>
  useMutation({
    mutationKey: ["useOrdersInAdmIdMutation"],
    mutationFn: insertOrdersApi,
    retry: 0,
  });

export const useDiagnosisInAdmIdMutation = () =>
  useMutation({
    mutationKey: ["useDiagnosisInAdmIdMutation"],
    mutationFn: insertDiagnosisApi,
    retry: 0,
  });
