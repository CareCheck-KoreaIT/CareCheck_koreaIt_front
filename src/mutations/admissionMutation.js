import { useMutation } from "@tanstack/react-query";

export const useDiagnosisOrdeMutation = () => useMutation({
    mutationKey: ["useDiagnosisOrdeMutation"],
    mutationFn: diagnosisOrderApi(),
    retry: 0
})

export const useDiagnosisDeseaseMutation = () => useMutation({})