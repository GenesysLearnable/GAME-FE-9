// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContainer from "./AuthContainer";
import AuthNav from "./AuthNav";
import Button from "./Button";
import { useForm } from "react-hook-form";
import Error from "./Error";
import { useUserData } from "../../contexts/UserContext";

function SignupItem() {
  const { register, handleSubmit, getValues, formState } = useForm();
  const { errors } = formState;

  const navigate = useNavigate();

  const { setUser } = useUserData();

  function onSubmit({ email, password }) {
    // e.preventDefault();

    setUser({ username: "", email, password });

    navigate("/nickname");
  }
  return (
    <form className="signup " onSubmit={handleSubmit(onSubmit)}>
      {" "}
      <AuthNav title="Sign Up" goto="Login" url="/login" />
      <h1 className="ayo-header">New to Ayo? Sign up here</h1>
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
            placeholder="Password"
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
            placeholder="Confirm password"
          />
          <Error>{errors?.passwordConfirm?.message}</Error>

          <Button>
            <span>Signup</span>
          </Button>
        </AuthContainer>
      </div>
    </form>
  );
}

export default SignupItem;
