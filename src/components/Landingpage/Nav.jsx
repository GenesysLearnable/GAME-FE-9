import { Link, useNavigate } from "react-router-dom";
import { logo } from "../../constants";
import { useAuth } from "../../contexts/AuthenticationContext";
function Nav() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  // function onRoute(route) {
  //   if (!isAuthenticated) navigate("/login");

  //   navigate(route);
  //   console.log(route, isAuthenticated);
  // }

  return (
    <header className="header">
      <div className="max-width header--wrapper">
        <div className="logo">
          <h1>AYo</h1>{" "}
        </div>
        <nav className="navbar--wrapper">
          <ul className="navbar">
            <li className="active">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to={`${isAuthenticated ? "/about" : "/login"}`}>About</Link>
            </li>
            <li>
              <Link to={`${isAuthenticated ? "/level" : "/login"}`}>New</Link>
            </li>
            <li>
              <Link to={`${isAuthenticated ? "/how-to-play" : "/login"}`}>
                Feature
              </Link>
            </li>
          </ul>
        </nav>
        <div className="btns">
          <li className="btn btn-primary">
            <Link to={`${isAuthenticated ? "/level" : "/login"}`}>
              Play Now
            </Link>
          </li>
        </div>
      </div>
    </header>
  );
}

export default Nav;
