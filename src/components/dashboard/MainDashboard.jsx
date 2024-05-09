import MainGame from "./MainGame";
import Player from "./Player";
import TimerProfile from "./TimerProfile";

function MainDashboard() {
  return (
    <div className="ugo-main-dashboard">
      <TimerProfile>
        <p className="ugo-timer">00 : 00</p>
        <Player name="Jasper Ugo" imgUrl="/dashboard/Rectangle-1.png" />
      </TimerProfile>
      <MainGame />
      <TimerProfile>
        <Player
          name="Jasper Ugo"
          imgUrl="/dashboard/Rectangle.png"
          style={{ flexDirection: "row-reverse" }}
        />
        <div></div>
      </TimerProfile>
      {/* <img src="/dashboard/mainbg.png" alt="" /> */}
    </div>
  );
}

export default MainDashboard;
