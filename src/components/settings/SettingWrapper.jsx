import React from "react";
import { Switch } from "antd";
import BkArrow from "../GameLevel/img/bk-arrow.png";
import { Link } from "react-router-dom";
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
import { useAuth } from "../../contexts/AuthenticationContext";
>>>>>>> 2b33b52 (built the authentication and authorization)
=======
import { useAuth } from "../../contexts/AuthenticationContext";
=======
>>>>>>> 779dd6d (nicee)
=======
=======
import { useAuth } from "../../contexts/AuthenticationContext";
>>>>>>> 2b33b52 (built the authentication and authorization)
>>>>>>> 4b76466 (built the authentication and authorization)
>>>>>>> 2af7ade (built the authentication and authorization)

function SettingWrapper() {
  const { setIsAuthenticated } = useAuth();

  function handleLogout() {
    setIsAuthenticated(false);
  }
  return (
    <div className="container">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      <Link to="/menu">
        <img src={BkArrow} alt="" />
      </Link>
=======
=======
>>>>>>> 535e73c (nicee)
=======
>>>>>>> 2b33b52 (built the authentication and authorization)
=======
>>>>>>> 2af7ade (built the authentication and authorization)
      <a href="Menu">
        {" "}
        <img src={BkArrow} alt="" />
      </a>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2b33b52 (built the authentication and authorization)
=======
=======
      <Link to="/menu">
        <img src={BkArrow} alt="" />
      </Link>
>>>>>>> 779dd6d (nicee)
<<<<<<< HEAD
>>>>>>> 535e73c (nicee)
=======
>>>>>>> 2b33b52 (built the authentication and authorization)
=======
=======
      <Link to="/menu">
        <img src={BkArrow} alt="" />
      </Link>
=======
      <a href="Menu">
        {" "}
        <img src={BkArrow} alt="" />
      </a>
>>>>>>> 2b33b52 (built the authentication and authorization)
>>>>>>> 4b76466 (built the authentication and authorization)
>>>>>>> 2af7ade (built the authentication and authorization)

      <div className="settingWrapper">
        <div className="setting-content">
          <h4>Settings</h4>
          <label>
            Language
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> 2b33b52 (built the authentication and authorization)
=======
>>>>>>> 2af7ade (built the authentication and authorization)
            <select defaultValue="english">
              <option lang="de" value="deutsch">
                Deutsch
              </option>
              <option lang="en" value="english">
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2b33b52 (built the authentication and authorization)
=======
=======
=======
>>>>>>> 4b76466 (built the authentication and authorization)
            <select>
              <option lang="de" value="deutsch">
                Deutsch
              </option>
              <option lang="en" value="english" selected>
<<<<<<< HEAD
>>>>>>> 779dd6d (nicee)
<<<<<<< HEAD
>>>>>>> 535e73c (nicee)
=======
>>>>>>> 2b33b52 (built the authentication and authorization)
=======
=======
=======
            <select defaultValue="english">
              <option lang="de" value="deutsch">
                Deutsch
              </option>
              <option lang="en" value="english">
>>>>>>> 2b33b52 (built the authentication and authorization)
>>>>>>> 4b76466 (built the authentication and authorization)
>>>>>>> 2af7ade (built the authentication and authorization)
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
=======
>>>>>>> 2af7ade (built the authentication and authorization)
          <a href="">Channge Avatar</a>
          <a href="">Profile Settings</a>
          <Link onClick={handleLogout}>Logout</Link>
=======
          <Link to="/avatar">Channge Avatar</Link>
          <Link to="/settings">Profile Settings</Link>
          <Link to="/">Logout</Link>
>>>>>>> 779dd6d (nicee)
<<<<<<< HEAD
>>>>>>> 535e73c (nicee)
=======
=======
          <Link to="/avatar">Channge Avatar</Link>
          <Link to="/settings">Profile Settings</Link>
          <Link to="/">Logout</Link>
>>>>>>> 2af7ade (built the authentication and authorization)
=======
          <a href="">Channge Avatar</a>
          <a href="">Profile Settings</a>
          <Link onClick={handleLogout}>Logout</Link>
>>>>>>> 2b33b52 (built the authentication and authorization)
<<<<<<< HEAD
=======
>>>>>>> 4b76466 (built the authentication and authorization)
>>>>>>> 2af7ade (built the authentication and authorization)
        </div>
      </div>
    </div>
  );
}

export default SettingWrapper;
