import { useQuery } from "@tanstack/react-query";
import { retrieveUser } from "../services/fetchAvatars";
import { useAvatar } from "../contexts/AvatarContext";

export function useUser() {
  const { userData } = useAvatar();
  const { _id } = userData;
  const { data, isPending } = useQuery({
    queryKey: ["curUser"],
    queryFn: () => retrieveUser(_id),
  });

  const user = data?.data;

  return {
    user,
    isLoading: isPending,
  };
}
