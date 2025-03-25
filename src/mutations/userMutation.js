import { useMutation } from "@tanstack/react-query";
import { signupApi, updateEmailApi, updatePhoneNumberApi, updatePasswordApi, updateUserApi, updateUserPasswordApi, deleteUserApi } from "../apis/userApi";

export const useUpdatePasswordMutation = () => useMutation({
    mutationKey: ["useUpdatePasswordMutation"],
    mutationFn: updatePasswordApi,
    retry: 0,
});
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

export const useUpdateUserMutation = () => useMutation({
    mutationKey: ["useUpdateUserMutation"],
    mutationFn: updateUserApi,
    retry: 0,
});
export const useUpdateUserPasswordMutation = () => useMutation({
    mutationKey: ["useUpdateUserPasswordMutation"],
    mutationFn: updateUserPasswordApi,
    retry: 0,
});
export const useDeleteUserMutation = () => useMutation({
    mutationKey: ["useDeleteUserMutation"],
    mutationFn: deleteUserApi,
    retry: 0,
})