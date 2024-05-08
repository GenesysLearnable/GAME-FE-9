import React from 'react'
import BkArrow from '../GameLevel/img/bk-arrow.png'

function MenuWrapper() {
  return (
    <div className="container">
    <a href=""> <img src={BkArrow} alt="" /></a>
        
        <div className="settingWrapper">
         
         <div className="setting-content">
          <h4>Menu</h4>
         
          <a href="Level">Single player mode</a>
          <a href="Level">Play with friends</a>
          <a href="LeaderBoard">Leaderboard</a>
          <a href="">How to play</a>
          <a href="Settings">Settings</a>
         </div>
    
        </div>
        </div>
  )
}

export default MenuWrapper