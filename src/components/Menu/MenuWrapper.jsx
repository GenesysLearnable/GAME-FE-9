import React from 'react'


function MenuWrapper() {


  return (
    <div className="container">
        
        <div className="settingWrapper">
         
         <div className="setting-content"  >
         
          <h4>Menu</h4>
  
          <a href="Level"><p >Single player mode</p></a>
          <a href="Level"><p >Play with friends</p></a>
          <a href="LeaderBoard"><p>Leaderboard</p></a>
          <a href=""><p>How to play</p></a>
          <a href="Settings"><p>Settings</p></a>
         </div>
    
        </div>
      </div>
    </div>
  );
}

export default MenuWrapper;
