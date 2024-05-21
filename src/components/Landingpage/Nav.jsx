import { Link, useNavigate } from "react-router-dom";
import { logo } from "../../constants";
function Nav() {
  const navigate = useNavigate();

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
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/level">New</Link>
            </li>
            <li>
              <Link to="/how-to-play">Feature</Link>
            </li>
          </ul>
        </nav>
        <div className="btns">
          <li className="btn btn-primary">
            <Link to="/login">Play Now</Link>
          </li>
        </div>
      </div>
    </header>
  );
}

export default Nav;
