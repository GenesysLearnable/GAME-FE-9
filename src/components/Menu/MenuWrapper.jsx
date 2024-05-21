import React from 'react'


function MenuWrapper() {


  return (
    <div className="container">
      <Link onClick={() => navigate(-1)}>
        {" "}
        
        <div className="settingWrapper">
         
         <div className="setting-content"  >
         
          <h4>Menu</h4>
  
          <a href="Level"><p >Single player mode</p></a>
          <a href="Level"><p >Play with friends</p></a>
          <a href="LeaderBoard"><p>Leaderboard</p></a>
          <a href=""><p>How to play</p></a>
          <a href="Settings"><p>Settings</p></a>
         </div>
    

          <Link to={`/dashboard/AI`}>Single player mode</Link>
          <Link to={`/dashboard/Player 2`}>Play with friends</Link>
          <Link to="/level">Single player mode</Link>
          <Link to="/invite">Play with friends</Link>
          <Link to="/leaderBoard">Leaderboard</Link>
          <Link to="/how-to-play">How to play</Link>
          <Link to="/settings">Settings</Link>
        </div>
      </div>
    </div>
  );
}

export default MenuWrapper;
