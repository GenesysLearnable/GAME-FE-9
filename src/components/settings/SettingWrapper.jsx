import React from 'react'
import { Switch } from 'antd'
import BkArrow from '../GameLevel/img/bk-arrow.png'

function SettingWrapper() {
  return (
    <div className="container">
<a href="Menu"> <img src={BkArrow} alt="" /></a>
    
    <div className="settingWrapper">
     
     <div className="setting-content">
      <h4>Settings</h4>
      <label>Language 
      <select>
               
               <option lang="de" value="deutsch">Deutsch</option>
               <option lang="en" value="english" selected>English</option>
               <option lang="fr" value="francais">Français</option>
               <option lang="it" value="italiano">Italiano</option>
             </select>
      </label>
      <label>Sound <Switch /></label>
      <label>Music <Switch /></label>
      <a href="">Channge Avatar</a>
      <a href="">Profile Settings</a>
      <a href="">Logout</a>
     </div>

    </div>
    </div>
  )
}

export default SettingWrapper;