import { useAvatar } from "../../contexts/AvatarContext";
import MainGame from "./MainGame";
import Player from "./Player";
import TimerProfile from "./TimerProfile";

function MainDashboard() {
  const { userData } = useAvatar();

  const { avatar_url } = userData;
  return (
    <div className="ugo-main-dashboard">
      <TimerProfile>
        <p className="ugo-timer">00 : 00</p>
        <Player name="Jasper Ugo" imgUrl={avatar_url} />
      </TimerProfile>
      <div className="ugo-main-game-v2">
        <MainGame />
      </div>
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
