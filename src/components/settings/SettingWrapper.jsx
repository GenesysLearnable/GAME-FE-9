import React from "react";
import GameMusic from "./GameMusic";
import GameSound from "./GameSound";

import BkArrow from "../GameLevel/img/bk-arrow.png";
import { Switch } from "antd";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthenticationContext";
import Modal from "../../ui/Modal";
import LogoutModal from "../../ui/LogoutModal";

function SettingWrapper() {
  const { setIsAuthenticated } = useAuth();

  function handleLogout() {
    setIsAuthenticated(false);
  }
  return (
    <div className="container">
      <div className="top">
        <Link to="/menu">
          <img src={BkArrow} alt="" />
        </Link>
        <h4>Settings</h4>
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
          <Modal>
            <Modal.Open>
              <Link>Logout</Link>
            </Modal.Open>
            <Modal.Window>
              <LogoutModal onClick={handleLogout} />
            </Modal.Window>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default SettingWrapper;
