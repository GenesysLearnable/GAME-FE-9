import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { loginUser } from "./loginUser";
import { useAuth } from "../contexts/AuthenticationContext";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { setIsAuthenticated } = useAuth();

  const { mutate: login, isPending: isLoading } = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data.user);
      setIsAuthenticated(true);
      navigate("/menu", { replace: true });
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("Provided email or password are incorrect");
    },
  });

  return { login, isLoading };
}
