import { useMutation } from "@tanstack/react-query";
import { createUser as createUserApi } from "../services/createUser";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export function useCreateUser() {
  const navigate = useNavigate();
  const { mutate: createUser, isPending: isLoading } = useMutation({
    mutationFn: createUserApi,
    onSuccess: (data) => {
      toast.success("Account created successfully");
      navigate("/login");
    },

    onError: (error) => {
      console.error(error);
      toast.error("Unable to create account");

      navigate("/signup");
    },
  });

  return {
    createUser,
    isLoading,
  };
}
