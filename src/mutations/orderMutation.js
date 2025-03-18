import { useMutation } from "@tanstack/react-query";
import { orderCreateApi } from "../apis/orderApi";

export const useCreateOrderMutation = () => useMutation({
  mutationKey: ["useCreateOrderMutation"],
  mutationFn: orderCreateApi,
  retry: 0,
})