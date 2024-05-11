import React from "react";
import "./App.css";
import { Link, useNavigate } from "react-router-dom";
import Nav from "./Nav";

function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="landing--page">
      <Nav />
      <section className="hero">
        <div className="main-width">
          <div className="content">
            <div className="main-text">
              <h1>
                Ayo: The Classic Nigerian <br /> Strategy Game Awaits!
              </h1>
              <p>
                Challenge your friends or our AI in Ayo, a game of wit <br />{" "}
                and calculation with a rich Nigerian heritage.
              </p>
              <img src="/image/image 4 (1).png" alt="" />
              <button className="btttn" onClick={() => navigate("/dashboard")}>
                Play Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="levels--game">
        <span>
          <img src="/image/Ellipse-hand.svg" alt="sound" />
          <p>Music, sound effects</p>
        </span>

        <div>
          <span>
            <img src="/image/Ellipse-16.svg" alt="multuplayer" />
            <p>Online Multi player</p>
          </span>

          <span>
            <img src="/image/Ellipse-color.svg" alt="" />
            <p>Leaderboard and achievement</p>
          </span>

          <span>
            <img src="/image/Ellipse-h.svg" alt="" />
            <p>Ayo variations Oware, Owari</p>
          </span>
        </div>
      </div>

      <div className="service">
        <div className="title">
          <h2>Top Challengers</h2>
        </div>
        <div className="box">
          <div className="card">
            <img src="/image/image 18.png" alt="" />
            <h5> Beginner</h5>
            <div className="pra">
              <p>Ayo is a fun game where you capture your opponents seeds!</p>
              <Link className="button" to="#">
                Play now!
              </Link>
            </div>
          </div>

          <div className="card">
            <img src="/image/image 20.png" alt="" />
            <h5> Beginner</h5>
            <div className="pra">
              <p>Ayo is a fun game where you capture your opponents seeds!</p>
              <Link className="button" to="/dashboard">
                Play now!
              </Link>
            </div>
          </div>

          <div className="card">
            <img src="/image/image 17.png" alt="" />
            <h5> Beginner</h5>
            <div className="pra">
              <p>Ayo is a fun game where you capture your opponents seeds!</p>
              <Link className="button" to="/dashboard">
                Play now!
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="service">
        <div className="title">
          <h2>MEET OUR FEATURES</h2>
        </div>
        <div className="box">
          <div className="card">
            <img src="/image/image 21.png" alt="" />
            <h5> Play with friends</h5>
            <div className="pra">
              <p>Time for some Ayo Fun with a friend</p>
              <Link className="button" to="/dashboard">
                Start now!
              </Link>
            </div>
          </div>

          <div className="card">
            <img src="/image/image 23.png" alt="" />
            <h5> Play Single mode</h5>
            <div className="pra">
              <p>Test your Ayo Mastery in Single Player mode</p>
              <Link className="button" to="/dashboard">
                Start now!
              </Link>
            </div>
          </div>
        </div>
        <div className="get">
          <Link className="button-two" to="#">
            get more info
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
