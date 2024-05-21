import React from 'react'
import GameMusic from './GameMusic';
import GameSound from './GameSound';

import BkArrow from '../GameLevel/img/bk-arrow.png'
import React from "react";
import { Switch } from "antd";
import BkArrow from "../GameLevel/img/bk-arrow.png";
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
      <div className='top'>
      <a href="Menu"><img src={BkArrow} alt="" /></a>
<h4>Settings</h4>
      </div>

    <div className="settingWrapper">
     
     <div className="setting-content">
     
      <label>Language 
      <select>
               
               <option lang="de" value="deutsch">Deutsch</option>
               <option lang="en" value="english" selected>English</option>
               <option lang="fr" value="francais">Français</option>
               <option lang="it" value="italiano">Italiano</option>
             </select>
      </label>
      <div>
      <p>Sound:</p>
      <GameSound />
      </div>
      <div>
      <p>Music:</p>
      <GameMusic />
      </div>
     
     
      <a href="ChangeAvatar"><p>Channge Avatar</p></a>
      <a href="ChangeAvatar"><p>Profile Settings</p></a>
      <a href="ChangeAvatar"><p>Logout</p></a>
     
     </div>
      <Link to="/menu">
        <img src={BkArrow} alt="" />
      </Link>

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
