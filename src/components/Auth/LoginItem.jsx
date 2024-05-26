import { useState } from "react";
import AuthContainer from "./AuthContainer";
import AuthNav from "./AuthNav";
import Button from "./Button";
import { useLogin } from "../../hooks/useLogin";
import Spinner from "../../ui/Spinner";
import Error from "./Error";
import { Link } from "react-router-dom";

function LoginItem() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { isLoading, login } = useLogin();
  // console.log(isLoading);

  function handleSubmit(e) {
    e.preventDefault();

    if (!email && !password) return;

    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },

        onError: (err) => {
          setError("Provided email or password are incorrect");
        },
      }
    );
  }

  return (
    <form className="signup ">
      <AuthNav title="Login" goto="Sign up" url="/signup" />
      <h1 className="ayo-header">Ready to play? Sign in here</h1>
      <div className="page-auth">
        <AuthContainer>
          <input
            type="text"
            value={email}
            autoComplete="username"
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            placeholder="Enter your email"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            placeholder="Password"
          />

          <Error>{error}</Error>

          <span className="forspan">
            <Link to="/passwordreset" className="forgotpwd">
              Forgot Password?
            </Link>
          </span>

          <Button onClick={handleSubmit}>
            {isLoading ? <Spinner /> : <span>Login</span>}
          </Button>
        </AuthContainer>
      </div>
      ;
    </form>
  );
}

export default LoginItem;
