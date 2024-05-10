import React from 'react';
import './App.css'
const LandingPage = () => {
  return (
    <>
      <section className="hero">
        <div className="main-width">
          <header>
            <div className="logo">
              <img src="image/Ellipse 17.png" alt="" />
            </div>
            <nav>
              <ul>
                <li className="active"><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">New</a></li>
                <li><a href="#">Feature</a></li>
                <li className="btn"><a href="#">sign in</a></li>
                <li className="btn"><a href="#">sign up</a></li>
              </ul>
            </nav>
          </header>
          <div className="content">
            <div className="main-text">
              <h1>Ayo: The Classic Nigerian <br /> Strategy Game Awaits!</h1>
              <p>Challenge your friends or our AI in Ayo, a game of wit <br /> and calculation with a rich Nigerian heritage.</p>
              <img src="image/image 4 (1).png" alt="" />
              <a href="#">Play Now</a>
              <a href="#"><i className="fa-solid fa-play"></i>Watch GamePlay</a>
            </div>
          </div>
        </div>
      </section>

      <div className="service">
        <div className="title">
          <h2>Top Challengers</h2>
        </div>
        <div className="box">
          <div className="card">
            <img src="image/image 18.png" alt="" />
            <h5> Beginner</h5>
            <div className="pra">
              <p>Ayo is a fun game where you capture your opponents seeds!</p>
              <a className="button" href="#">Play now!</a>
            </div>
          </div>

          <div className="card">
            <img src="image/image 20.png" alt="" />
            <h5> Beginner</h5>
            <div className="pra">
              <p>Ayo is a fun game where you capture your opponents seeds!</p>
              <a className="button" href="#">Play now!</a>
            </div>
          </div>

          <div className="card">
            <img src="image/image 17.png" alt="" />
            <h5> Beginner</h5>
            <div className="pra">
              <p>Ayo is a fun game where you capture your opponents seeds!</p>
              <a className="button" href="#">Play now!</a>
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
            <img src="image/image 21.png" alt="" />
            <h5> Play with friends</h5>
            <div className="pra">
              <p>Time for some Ayo Fun with a friend</p>
              <a className="button" href="#">Start now!</a>
            </div>
          </div>

          <div className="card">
            <img src="image/image 23.png" alt="" />
            <h5> Play Single mode</h5>
            <div className="pra">
              <p>Test your Ayo Mastery in Single Player mode</p>
              <a className="button" href="#">Start now!</a>
            </div>
          </div>
        </div>
        <div className="get">
          <a className="button-two" href="#">get more info</a>
        </div>
      </div>

      <footer>
        <div className="social">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-facebook-f"></i></a>
        </div>
      </footer>
    </>
  );
}

export default LandingPage;
