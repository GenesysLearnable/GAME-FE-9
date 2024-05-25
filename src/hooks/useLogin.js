import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { loginUser } from "../services/loginUser";
import { useAuth } from "../contexts/AuthenticationContext";
import { useAvatar } from "../contexts/AvatarContext";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { setIsAuthenticated } = useAuth();
  const { setUserData } = useAvatar();

  const { mutate: login, isPending: isLoading } = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data.user);
      setIsAuthenticated(true);
      toast.success("Login successful");
      navigate("/menu", { replace: true });
      setUserData(data.data.user);
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("Provided email or password are incorrect");
    },
  });

  return { login, isLoading };
}
