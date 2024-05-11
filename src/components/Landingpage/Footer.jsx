import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <span>
        <p>FAQ</p>
        <p>Contact us</p>
      </span>

      <div className="social">
        <Link to="#">
          <img src="/image/fb.png" alt="facebook" />
        </Link>
        <Link to="#">
          <img src="/image/insta.png" alt="instagram" />
        </Link>
        <Link to="#">
          <img src="/image/google.png" alt="google" />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
