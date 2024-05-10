import React from "react";
import { Switch } from "antd";
import BkArrow from "../GameLevel/img/bk-arrow.png";
import { Link } from "react-router-dom";
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { useAuth } from "../../contexts/AuthenticationContext";
>>>>>>> 2b33b52 (built the authentication and authorization)
=======
import { useAuth } from "../../contexts/AuthenticationContext";
=======
>>>>>>> 779dd6d (nicee)
>>>>>>> 535e73c (nicee)

function SettingWrapper() {
  const { setIsAuthenticated } = useAuth();

  function handleLogout() {
    setIsAuthenticated(false);
  }
  return (
    <div className="container">
<<<<<<< HEAD
<<<<<<< HEAD
      <Link to="/menu">
        <img src={BkArrow} alt="" />
      </Link>
=======
=======
>>>>>>> 535e73c (nicee)
      <a href="Menu">
        {" "}
        <img src={BkArrow} alt="" />
      </a>
<<<<<<< HEAD
>>>>>>> 2b33b52 (built the authentication and authorization)
=======
=======
      <Link to="/menu">
        <img src={BkArrow} alt="" />
      </Link>
>>>>>>> 779dd6d (nicee)
>>>>>>> 535e73c (nicee)

      <div className="settingWrapper">
        <div className="setting-content">
          <h4>Settings</h4>
          <label>
            Language
<<<<<<< HEAD
<<<<<<< HEAD
            <select>
              <option lang="de" value="deutsch">
                Deutsch
              </option>
              <option lang="en" value="english" selected>
=======
=======
>>>>>>> 535e73c (nicee)
            <select defaultValue="english">
              <option lang="de" value="deutsch">
                Deutsch
              </option>
              <option lang="en" value="english">
<<<<<<< HEAD
>>>>>>> 2b33b52 (built the authentication and authorization)
=======
=======
            <select>
              <option lang="de" value="deutsch">
                Deutsch
              </option>
              <option lang="en" value="english" selected>
>>>>>>> 779dd6d (nicee)
>>>>>>> 535e73c (nicee)
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
<<<<<<< HEAD
<<<<<<< HEAD
          <Link to="/avatar">Channge Avatar</Link>
          <Link to="/settings">Profile Settings</Link>
          <Link to="/">Logout</Link>
=======
          <a href="">Channge Avatar</a>
          <a href="">Profile Settings</a>
          <Link onClick={handleLogout}>Logout</Link>
>>>>>>> 2b33b52 (built the authentication and authorization)
=======
          <a href="">Channge Avatar</a>
          <a href="">Profile Settings</a>
          <Link onClick={handleLogout}>Logout</Link>
=======
          <Link to="/avatar">Channge Avatar</Link>
          <Link to="/settings">Profile Settings</Link>
          <Link to="/">Logout</Link>
>>>>>>> 779dd6d (nicee)
>>>>>>> 535e73c (nicee)
        </div>
      </div>
    </div>
  );
}

export default SettingWrapper;
