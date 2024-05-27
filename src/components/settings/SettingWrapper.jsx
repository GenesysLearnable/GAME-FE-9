import React, { useState } from "react";
// import GameMusic from "./GameMusic";
// import GameSound from "./GameSound";

import BkArrow from "../GameLevel/img/bk-arrow.png";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthenticationContext";
import Modal from "../../ui/Modal";
import LogoutModal from "../../ui/LogoutModal";
import Switch from "./Switch";
import { useAudioPlayer } from "../../contexts/AudioContext";

function SettingWrapper() {
  const { setIsAuthenticated } = useAuth();
  const {
    isPlaying,
    setIsPlaying,
    isPlayingAud,
    setIsPlayingAud,
  } = useAudioPlayer();

  // const { setUserData } = useAvatar();

  function handleSound() {
    setIsPlayingAud((iss) => !iss);
    // console.log(isSound);
  }

  function handleMusic() {
    setIsPlaying((ism) => !ism);
  }

  function handleLogout() {
    setIsAuthenticated(false);
    setIsPlaying(true);
  }
  return (
    <div className="container">
      <div className="top">
        <Link to="/menu">
          <img src={BkArrow} alt="" />
        </Link>
        {/* <h4>Settings</h4> */}
      </div>

      <div className="setting-parent">
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

            <label className="label-switch">
              Sound <Switch onClick={handleSound} toggle={isPlayingAud} />
            </label>
            <label className="label-switch">
              Music <Switch onClick={handleMusic} toggle={isPlaying} />
            </label>

            <Link to="/avatar" className="settings-link">
              Change Avatar
            </Link>
            <Link to="/settings" className="settings-link">
              Profile Settings
            </Link>
            <Modal>
              <Modal.Open>
                <Link className="settings-link">Logout</Link>
              </Modal.Open>
              <Modal.Window>
                <LogoutModal onClick={handleLogout} />
              </Modal.Window>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingWrapper;
