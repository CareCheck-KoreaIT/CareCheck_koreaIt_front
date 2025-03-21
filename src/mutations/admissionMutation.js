import { useMutation } from "@tanstack/react-query";
import {
  insertDiagnosisApi,
  insertOrdersApi,
  updateEndDate,
  updateStartDate,
} from "../apis/admissionApi";

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

export const useUpdateStartDateMutation = () =>
  useMutation({
    mutationKey: ["useUpdateStartDateMutation"],
    mutationFn: updateStartDate,
    retry: 0,
  });

export const useUpdateEndDateMutation = () =>
  useMutation({
    mutationKey: ["useUpdateEndDateMutation"],
    mutationFn: updateEndDate,
    retry: 0,
  });
