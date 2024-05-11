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
      <a href="Menu">
        {" "}
        <img src={BkArrow} alt="" />
      </a>

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
        </div>
      </div>
    </div>
  );
}

export default SettingWrapper;
