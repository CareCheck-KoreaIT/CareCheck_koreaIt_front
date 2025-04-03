import { useMutation } from "@tanstack/react-query";
import {
  deleteReceiptApi,
  insertAdmissonApi,
  insertDiagnosisApi,
  insertOrdersApi,
  insertVitalByAdmApi,
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

export const useDeleteReceiptMutation = () =>
  useMutation({
    mutationKey: ["useDeleteReceiptMutation"],
    mutationFn: deleteReceiptApi,
    retry: 0,
  });

export const useInsertVitallMutation = () =>
  useMutation({
    mutationKey: ["useInsertVitalMutation"],
    mutationFn: insertVitalByAdmApi,
    retry: 0,
  });
