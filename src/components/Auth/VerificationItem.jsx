import { useForm } from "react-hook-form";
import AuthNav from "./AuthNav";
import AuthContainer from "./AuthContainer";
import Button from "./Button";
import Error from "./Error";

function VerificationItem() {
  const { register, handleSubmit, getValues, formState } = useForm();
  const { errors } = formState;

  function onSubmit(data) {
    console.log(data);
  }
  return (
    <form className="signup " onSubmit={handleSubmit(onSubmit)}>
      {" "}
      <AuthNav title="Verification" goto="" url="" />
      <h1 className="ayo-header">
        Please check your email “edoziemeze33@gmail.com” and enter the code
        provided and your new password
      </h1>
      <div className="page-auth">
        <AuthContainer>
          <input
            type="text"
            id="code"
            {...register("code", {
              required: "This field is required",
            })}
            placeholder="Enter Code"
          />
          <Error>{errors?.code?.message}</Error>

          <input
            type="password"
            id="password"
            {...register("password", {
              required: "Password field is required",
              minLength: {
                value: 4,
                message: "Password needs a minimum of 4 characters",
              },
              pattern: {
                value: /^(?=.*[0-9])\S+$/,
                message: "Password  should be a number",
              },
            })}
            placeholder="Enter New Password"
          />

          <Error>{errors?.password?.message}</Error>

          <input
            type="password"
            id="passwordConfirm"
            {...register("passwordConfirm", {
              required: "You need to confirm your password",
              validate: (value) =>
                value === getValues().password || "Passwords need to match",
            })}
            placeholder="Confirm Your New Password"
          />
          <Error>{errors?.passwordConfirm?.message}</Error>

          <Button>
            <span>Verify</span>
          </Button>
        </AuthContainer>
      </div>
    </form>
  );
}

export default VerificationItem;
