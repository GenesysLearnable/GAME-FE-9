import { useQuery } from "@tanstack/react-query";
import { getAvatars } from "../services/fetchAvatars";

export function useAvatars() {
  const { data, isPending } = useQuery({
    queryKey: ["avatars"],
    queryFn: getAvatars,
  });

  const avatars = data?.data;

  return {
    avatars,
    isLoading: isPending,
  };
}
