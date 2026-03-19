import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import authAxiosinstance from "../api/authAxiosinstance";

export default function useChekout() {
  const queryClint = useQueryClient();
  return useMutation({
    mutationFn: async (paymentMethod) => {
       console.log("response paymentMethod ");
      console.log(paymentMethod);
      return await authAxiosinstance.post("Checkouts", {PaymentMethod : paymentMethod})
    },
    onSuccess: (response) => {
            console.log("response Checkouts ");
      console.log(response);
      if (response.data.url) location.href = response.data.url;
      queryClint.invalidateQueries(
        { queryKey: ["carts"]}
      )
    }
  })
}
