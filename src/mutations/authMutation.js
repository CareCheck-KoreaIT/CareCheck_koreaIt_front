import { useMutation } from "@tanstack/react-query";
import { signinApi, signupApi } from "../apis/authApi";

export const useSignupMutation = () => useMutation({
    mutationKey: ["signupMutation"],
    mutationFn: signupApi,
    retry: 0,
});

export const useSigninMutation = () => useMutation({
    mutationKey: ["signinMutation"],
    mutationFn: signinApi,
    retry: 0,
});