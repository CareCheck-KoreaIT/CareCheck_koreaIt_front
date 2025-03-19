import { useMutation } from "@tanstack/react-query";
import { createNoticeApi } from "../apis/noticeApi";

export const useCreateNoticeMutation = () => useMutation({
  mutationKey: ["useCreateNoticeMutation"],
  mutationFn: createNoticeApi,
  retry: 0,
})