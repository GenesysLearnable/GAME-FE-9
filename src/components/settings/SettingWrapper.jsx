import React from "react";
import { Switch } from "antd";
import BkArrow from "../GameLevel/img/bk-arrow.png";
import { Link } from "react-router-dom";

import { useAuth } from "../../contexts/AuthenticationContext";
function SettingWrapper() {
  const { setIsAuthenticated } = useAuth();

  function handleLogout() {
    setIsAuthenticated(false);
  }
  return (
    <div className="container">
      <Link to="/menu">
        <img src={BkArrow} alt="" />
      </Link>

      <Link to="/menu">
        <img src={BkArrow} alt="" />
      </Link>

      <Link to="/menu">
        <img src={BkArrow} alt="" />
      </Link>

      <a href="Menu">
        {" "}
        <img src={BkArrow} alt="" />
      </a>

      <Link to="/menu">
        <img src={BkArrow} alt="" />
      </Link>

      <div className="settingWrapper">
        <div className="setting-content">
          <h4>Settings</h4>
          <label>Language </label>

          <select>
            <option lang="de" value="deutsch">
              Deutsch
            </option>
            <option lang="en" value="english" selected>
              English
            </option>
            <option lang="fr" value="francais">
              Français
            </option>
            <option lang="it" value="italiano">
              Italiano
            </option>
          </select>
          <a href="Menu">
            {" "}
            <img src={BkArrow} alt="" />
          </a>
        </div>

        <div className="settingWrapper">
          <div className="setting-content">
            <h4>Settings</h4>
            <label>
              Language
              <select defaultValue="english">
                <option lang="de" value="deutsch">
                  Deutsch
                </option>
                <option lang="en" value="english">
                  English
                </option>
                <option lang="fr" value="francais">
                  Français
                </option>
                <option lang="it" value="italiano">
                  Italiano
                </option>
              </select>
            </label>

            <label>
              Sound <Switch />
            </label>
            <label>
              Music <Switch />
            </label>

            <Link to="/avatar">Channge Avatar</Link>
            <Link to="/settings">Profile Settings</Link>
            <Link onClick={handleLogout}>Logout</Link>
            <Link to="/avatar">Channge Avatar</Link>
            <Link to="/settings">Profile Settings</Link>
            <Link to="/">Logout</Link>
            <a href="">Channge Avatar</a>
            <a href="">Profile Settings</a>
            <Link onClick={handleLogout}>Logout</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingWrapper;
