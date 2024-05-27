import { Link } from "react-router-dom";
import { logo } from "../../constants";
import { useAuth } from "../../contexts/AuthenticationContext";
function Nav() {
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
          <img src={logo} alt="" />{" "}
        </div>
        <nav className="navbar--wrapper">
          <ul className="navbar">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#new">Explore</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
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
