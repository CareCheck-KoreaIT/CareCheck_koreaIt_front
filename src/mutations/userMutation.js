import { useMutation } from "@tanstack/react-query";
import { signupApi, updateEmailApi, updatePhoneNumberApi } from "../apis/userApi";

export const useUpdateEmailMutation = () => useMutation({
    mutationKey: ["useUpdateEmailMutation"],
    mutationFn: updateEmailApi,
    retry: 0,
});
export const useUpdatePhoneNumberMutation = () => useMutation({
    mutationKey: ["useUpdatePhoneNumberMutation"],
    mutationFn: updatePhoneNumberApi,
    retry: 0,
});

export const useSignupMutation = () => useMutation({
    mutationKey: ["signupMutation"],
    mutationFn: signupApi,
    retry: 0,
});