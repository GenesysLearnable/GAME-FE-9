import { Link, useNavigate } from "react-router-dom";

function AuthNav({ title, goto, url }) {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }
  return (
    <nav className="auth-nav">
      <span onClick={goBack} style={{ cursor: "pointer" }}>
        <img src="/dashboard/bk-arrow.png" alt="" />
      </span>

      <h1>{title}</h1>

      <Link to={url}>{goto}</Link>
      <div className="hempty"></div>
    </nav>
  );
}

export default AuthNav;
