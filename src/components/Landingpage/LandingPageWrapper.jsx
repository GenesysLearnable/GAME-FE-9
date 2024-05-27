import React from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Nav from "./Nav";
import {
  singlePlayer,
  multiPlayer,
  landingPageStar,
  dashboard,
  reviewLeft,
  reviewRight,
  shakur,
  featuresStar,
} from "../../constants";
import { useAuth } from "../../contexts/AuthenticationContext";

function LandingPageWrapper() {
  const { isAuthenticated } = useAuth();
  //  <Link to={`${isAuthenticated ? "/level" : "/login"}`}>
  const navigate = useNavigate();
  return (
    <div className="landing--page">
      <Nav />
      <section className="hero">
        <div className="max-width hero-content">
          <div className="main-text">
            <h1>
              Ayo: The Classic Nigerian <br /> Strategy Game Awaits!
            </h1>
            <p>
              Challenge your friends or our AI in Ayo, a game of wit <br /> and
              calculation with a rich Nigerian heritage.
            </p>
          </div>
          <div
            className="hero-btn btn"
            onClick={() => navigate(`${isAuthenticated ? "/level" : "/login"}`)}
          >
            Play Now
          </div>
        </div>
      </section>
      <section className="about" id="about">
        <div className="max-width about-content">
          <h2>About Us</h2>
          <div className="mode">
            <div className="mode-text">
              <h3>Single-Player Mode</h3>
              <p>
                Experience the thrill of our single-player mode, where you can
                sharpen your skills against a challenging AI opponent. Test your
                strategy and wit while enjoying the traditional gameplay of
                Nigerian classics.
              </p>
            </div>
            <div className="mode-img">
              <img src={singlePlayer} alt="" />
            </div>
          </div>
          <div className="mode">
            <div className="mode-text">
              <h3>Multiplayer Mode</h3>
              <p>
                Elevate your online gaming experience with our interactive
                multiplayer mode that allows you to challenge friends or test
                your skills against AI opponents. Dive into the excitement of
                competitive play and enjoy hours of fun with your favorite
                Nigerian games.
              </p>
            </div>
            <div className="mode-img">
              <img src={multiPlayer} alt="" />
            </div>
          </div>
          <div
            className="btn btn-primary"
            onClick={() => navigate(`${isAuthenticated ? "/level" : "/login"}`)}
          >
            Play Now
          </div>
        </div>
      </section>
      <section className="explore" id="new">
        <div className="max-width explore-wrapper">
          <h2>Explore Ayo Game</h2>
          <div className="explore-content">
            <div className="explore-text">
              <div>
                <img src={landingPageStar} alt="" />
                <h4>Exciting Gameplay</h4>
                <p>
                  Experience our first additional service that promises
                  excitement and enjoyment. Engage in thrilling gameplay and
                  unique feature that will make your time with us unforgettable.
                </p>
              </div>
              <div>
                <img src={landingPageStar} alt="" />
                <h4>Interactive and Engaging</h4>
                <p>
                  Explore our second additional service that will elevate your
                  experience and provide hours of entertainment. Engaging
                  gameplay and interactive features await you in this exciting
                  offering.
                </p>
              </div>
              <div>
                <img src={landingPageStar} alt="" />
                <h4>Innovative Gaming Experience</h4>
                <p>
                  Discover our third additional service that brings a new level
                  of fun and challenge. With innovative gameplay mechanics and
                  engaging content, this service will keep you coming back for
                  more.
                </p>
              </div>
              <div
                className="btn btn-primary"
                onClick={() =>
                  navigate(`${isAuthenticated ? "/level" : "/login"}`)
                }
              >
                Play Now
              </div>
            </div>
            <div className="explore-img">
              <img src={dashboard} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="review">
        <div className="review-content">
          <div className="review-img">
            <img src={reviewLeft} alt="" />
          </div>

          <div className="reviews-slider">
            <Carousel
              showThumbs={false}
              showStatus={false}
              showArrows={false}
              autoPlay={false}
              infiniteLoop={true}
            >
              <div className="reviews">
                <img src={shakur} alt="" />
                <p>shakur V.</p>
                <p>
                  “I absolutely loved playing the traditional Nigerian games
                  online. The web-based adaptation was so well done, and it
                  brought back cherished memories of playing these game with my
                  friends and family. Great job!”
                </p>
              </div>
              <div className="reviews">
                <img src="" alt="" />
                <p>Lisa V.</p>
                <p>
                  “I absolutely loved playing the traditional Nigerian games
                  online. The web-based adaptation was so well done, and it
                  brought back cherished memories of playing these game with my
                  friends and family. Great job!”
                </p>
              </div>
              <div className="reviews">
                <img src="" alt="" />
                <p>Ellie V.</p>
                <p>
                  “I absolutely loved playing the traditional Nigerian games
                  online. The web-based adaptation was so well done, and it
                  brought back cherished memories of playing these game with my
                  friends and family. Great job!”
                </p>
              </div>
            </Carousel>
          </div>
          <div className="review-img">
            <img src={reviewRight} alt="" />
          </div>
        </div>
      </section>
      <section className="features" id="features">
        <div className="max-width">
          <h2>FEATURES</h2>
          <div className="features-text">
            <div className="feature">
              <img src={featuresStar} alt="" />
              <div className="feature-description">
                <h4>Gameplay</h4>
                <p>
                  Yes, Our web-based game is design to be accessible and
                  enjoyable for all players.
                </p>
              </div>
            </div>
            <div className="feature">
              <img src={featuresStar} alt="" />
              <div className="feature-description">
                <h4>Accessibility</h4>
                <p>
                  Join the fun and immerse yourself in the world of traditional
                  Nigerian games.
                </p>
              </div>
            </div>
            <div className="feature">
              <img src={featuresStar} alt="" />
              <div className="feature-description">
                <h4>Game Features</h4>
                <p>
                  Our games offer a range of features and challenges to keep you
                  engaged and excited.
                </p>
              </div>
            </div>
            <div className="feature">
              <img src={featuresStar} alt="" />
              <div className="feature-description">
                <h4>Competition</h4>
                <p>
                  Experience the thrill of competition and strategy with our
                  multiplayer mode.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact" id="contact">
        <div className="max-width contact-content">
          <div className="form-header">
            <h2>Contact us today.</h2>
            <p>
              Have a question or want to learn more about our web-based
              adaptations of traditional Nigerian games?{" "}
            </p>
          </div>
          <form action="">
            <input type="text" name="name" id="name" placeholder="Name" />
            <input type="email" name="email" id="email" placeholder="Email" />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </section>
    </div>
  );
}

export default LandingPageWrapper;
