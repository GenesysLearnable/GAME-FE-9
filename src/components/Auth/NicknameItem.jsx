import { useForm } from "react-hook-form";
import { useUserData } from "../../contexts/UserContext";
import { useCreateUser } from "../../hooks/useCreateUser";

import AuthContainer from "./AuthContainer";
import AuthNav from "./AuthNav";
import Button from "./Button";
import Error from "./Error";
import Spinner from "../../ui/Spinner";

function NicknameItem() {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const { user } = useUserData();

  const { isLoading, createUser } = useCreateUser();

  // const navigate = useNavigate();

  function onSubmit(data) {
    // if (!user.length) navigate("/signup");
    createUser({ ...user, username: data?.username });
  }

  return (
    <form className="signup " onSubmit={handleSubmit(onSubmit)}>
      <AuthNav title="Your Nickname" goto="" url="" />
      <h1 className="ayo-header">
        Personalize Your Play: Choose Your Nickname
      </h1>
      <div className="page-auth">
        <AuthContainer>
          <input
            type="text"
            id="username"
            {...register("username", {
              required: "Nickname field is required",
            })}
            placeholder="Enter your Nickname"
            disabled={isLoading}
          />

          <Error>{errors?.username?.message}</Error>

          <Button disabled={isLoading}>
            {isLoading ? <Spinner /> : <span>Next</span>}
          </Button>
        </AuthContainer>
      </div>
      ;
    </form>
  );
}

export default NicknameItem;
