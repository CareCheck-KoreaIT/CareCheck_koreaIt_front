import { useMutation } from "@tanstack/react-query";
import { createNoticeApi, deleteNoticeApi } from "../apis/noticeApi";

export const useCreateNoticeMutation = () => useMutation({
  mutationKey: ["useCreateNoticeMutation"],
  mutationFn: createNoticeApi,
  retry: 0,
})

export const useDeleteNoticeMutation = () => useMutation({
  mutationKey: ["useDeleteNoticeMutation"],
  mutationFn: deleteNoticeApi,
  retry: 0,
})