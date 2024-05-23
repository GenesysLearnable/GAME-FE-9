import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="max-width">
        <div className="social">
          <a href="#">Twitter</a>
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
          <a href="#">Youtube</a>
        </div>
        <div className="legal">
          <a href="#"> Privacy Policy</a>
          <p>Terms of Use</p>
          <p> &copy;2024 Ayo. All rights reserved </p>
        </div>
      </div>
    </footer>
    // <footer>
    //   <span>
    //     <p>FAQ</p>
    //     <p>Contact us</p>
    //   </span>

    //   <div className="social">
    //     <Link to="#">
    //       <img src="/image/fb.png" alt="facebook" />
    //     </Link>
    //     <Link to="#">
    //       <img src="/image/insta.png" alt="instagram" />
    //     </Link>
    //     <Link to="#">
    //       <img src="/image/google.png" alt="google" />
    //     </Link>
    //   </div>
    // </footer>
  );
}

export default Footer;
