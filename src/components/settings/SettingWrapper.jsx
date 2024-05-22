import React from 'react'
import GameMusic from './GameMusic';
import GameSound from './GameSound';
import BkArrow from "../GameLevel/img/bk-arrow.png";
import  { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthenticationContext";
import Modal from "../../ui/Modal";
import LogoutModal from "../../ui/LogoutModal";
import { useTranslation } from 'react-i18next';

function SettingWrapper() {




  const { i18n } = useTranslation();

  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };
  const { setIsAuthenticated } = useAuth();

  function handleLogout() {
    setIsAuthenticated(false);


  }
  return (
    <div className="container">
      <div className='top'>
      <Link to="/menu">
      <img src={BkArrow} alt="" />
      </Link>

<h4>Settings</h4>
      </div>

    <div className="settingWrapper">
     
     <div className="setting-content">
     
      <label>Language 
      <select onChange={handleChange}>
               
               <option lang="de" value="deutsch">Deutsch</option>
               <option lang="en" value="english" selected>English</option>
               <option lang="fr" value="francais">Français</option>
               <option lang="it" value="italiano">Italiano</option>
             </select>
      </label>
      <div>
      <label>Sound:</label>
      <GameSound />
      </div>
      <div>
      <label>Music:</label>
      <GameMusic />
      </div>
     
      <Link to="/avatar"><p>Channge Avatar</p></Link>
          <Link to="/settings"><p>Profile Settings</p></Link>
          <Modal>
            <Modal.Open>
              <Link><p>Logout</p></Link>
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
