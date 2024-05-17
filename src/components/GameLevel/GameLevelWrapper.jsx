import React from "react";
import BkArrow from "./img/bk-arrow.png";
import Coin from "./img/Dollar Coin.png";
import Add from "./img/add.png";
import { Link, useNavigate } from "react-router-dom";

function GameLevelWrapper() {
  const navigate = useNavigate();

  function play() {
    navigate("/dashboard");
  }
  return (
    <div className="levelWrapper">
      <div className="top-container">
      <a href="Menu"><img src={BkArrow} alt="" /></a>
     
      <button>
      <img src={Coin} alt="" /><span>2000</span>
      <img src={Add} alt="" />
      </button>
        <Link to="/menu">
          <img src={BkArrow} alt="" />
        </Link>
        <h4>Choose your challenge</h4>
        <button>
          <img src={Coin} alt="" />
          <span>2000</span>
          <img src={Add} alt="" />
        </button>
      </div>
      <h4>Choose your challenge</h4>
      <div className="level-content">
        <div className="level-box">
          <h3>Amateur</h3>
          <div className="box-content">
            <h4>Stake fee</h4>
            <span className="stake-fee">
              <img src={Coin} alt="" />0
            </span>

            <h4>Reward</h4>
            <span className="reward">
              <img src={Coin} alt="" />
              200
            </span>
          </div>
          <button onClick={play}>Play</button>
        </div>
        <div className="level-box">
          <h3>Intermediate</h3>
          <div className="box-content">
            <h4>Stake fee</h4>
            <span className="stake-fee">
              <img src={Coin} alt="" />
              500
            </span>

            <h4>Reward</h4>
            <span className="reward">
              <img src={Coin} alt="" />
              1000
            </span>
          </div>
          <button onClick={play}>Play</button>
        </div>
        <div className="level-box">
          <h3>Master</h3>
          <div className="box-content">
            <h4>Stake fee</h4>
            <span className="stake-fee">
              <img src={Coin} alt="" />
              1500
            </span>

            <h4>Reward</h4>
            <span className="reward">
              <img src={Coin} alt="" />
              3000
            </span>
          </div>
          <button onClick={play}>Play</button>
        </div>
      </div>
    </div>
  );
}
export default GameLevelWrapper;
