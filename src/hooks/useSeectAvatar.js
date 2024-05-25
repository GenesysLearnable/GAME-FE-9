import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateAvatar } from "../services/fetchAvatars";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useSelectAvatar() {
  const queryClient = useQueryClient();

  const navigate = useNavigate();
  const { mutate: selectAvatar, isPending } = useMutation({
    mutationFn: updateAvatar,
    onSuccess: (data) => {
      queryClient.invalidateQueries(["avatar"]);
      toast.success("Avatar updated successfully");
      navigate("/menu");

      console.log(data);
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("Avatar upload failed");
    },
  });

  return {
    selectAvatar,
    isLoading: isPending,
  };
}
