import React from 'react'
import GameMusic from './GameMusic';
import GameSound from './GameSound';

import BkArrow from '../GameLevel/img/bk-arrow.png'

function SettingWrapper() {
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

    </div>
    </div>
  )
}

export default SettingWrapper;