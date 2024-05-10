import React from "react";
import { Switch } from "antd";
import BkArrow from "../GameLevel/img/bk-arrow.png";
import { Link } from "react-router-dom";

function SettingWrapper() {
  return (
    <div className="container">
      <Link to="/menu">
        <img src={BkArrow} alt="" />
      </Link>

      <div className="settingWrapper">
        <div className="setting-content">
          <h4>Settings</h4>
          <label>
            Language
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
          </label>
          <label>
            Sound <Switch />
          </label>
          <label>
            Music <Switch />
          </label>
          <Link to="/avatar">Channge Avatar</Link>
          <Link to="/settings">Profile Settings</Link>
          <Link to="/">Logout</Link>
        </div>
      </div>
    </div>
  );
}

export default SettingWrapper;
