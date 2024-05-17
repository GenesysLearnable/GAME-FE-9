import { Link, useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();

  return (
    <header>
      <div className="logo">
        <img src="/image/Ellipse 17.png" alt="" />
      </div>
      <nav>
        <ul>
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
        <div className="btns">
          <button className="btn" onClick={() => navigate("/login")}>
            {/* <Link to="#">sign in</Link> */}
            Sign in
          </button>
          <button className="btn" onClick={() => navigate("/signup")}>
            {/* <Link to="#">sign up</Link> */}
            Sign up
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
