import { useMutation } from "@tanstack/react-query";
import { createNoticeApi } from "../apis/noticeApi";

export const useCreateNoticeMutation = () => useMutation({
  mutationKey: ["useCreateNoticeMutation"],
  mutationFn: createNoticeApi,
  retry: 0,
})

// export const useViewCountMutation = () => useMutation({
//   mutationKey: ["useViewCountMutation"],
//   mutationFn: getViewCountApi,
//   retry: 0,
// })