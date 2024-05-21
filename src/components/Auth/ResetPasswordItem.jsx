import { useForm } from "react-hook-form";
import AuthContainer from "./AuthContainer";
import AuthNav from "./AuthNav";
import Button from "./Button";
import Error from "./Error";
import { useNavigate } from "react-router";

function ResetPasswordItem() {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const navigate = useNavigate();

  function onSubmit(data) {
    console.log(data);

    if (data) navigate("/passwordreset/verify");
  }

  return (
    <form className="signup " onSubmit={handleSubmit(onSubmit)}>
      <AuthNav title="Reset Password" goto="Signup" url="/signup" />
      <h1 className="ayo-header">
        Please enter the email address associated with your account to reset
        your password.
      </h1>
      <div className="page-auth">
        <AuthContainer>
          <input
            type="text"
            id="email"
            {...register("email", {
              required: "Email field is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Please provide a valid email address",
              },
            })}
            placeholder="Enter your email"
          />
          <Error>{errors?.email?.message}</Error>

          <Button>
            <span>Reset</span>
          </Button>
        </AuthContainer>
      </div>
    </form>
  );
}

export default ResetPasswordItem;
