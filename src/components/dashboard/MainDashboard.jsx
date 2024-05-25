import { useUser } from "../../hooks/useUser";
import Spinner from "../../ui/Spinner";
import MainGame from "./MainGame";
import Player from "./Player";
import TimerProfile from "./TimerProfile";

function MainDashboard() {
  const { user, isLoading } = useUser();

  // const { username, avatar } = user;
  const avatar_url = "/dashboard/Rectangle.png";
  return (
    <div className="ugo-main-dashboard">
      <TimerProfile>
        <p className="ugo-timer">00 : 00</p>
        {isLoading ? (
          <Spinner />
        ) : (
          <Player
            name={isLoading ? "Player 1" : user?.username}
            imgUrl={
              !isLoading && user?.avatar === "" ? avatar_url : user?.avatar
            }
          />
        )}
      </TimerProfile>
      <div className="ugo-main-game-v2">
        <MainGame user={user} />
      </div>
      <TimerProfile>
        <Player
          name="AI"
          imgUrl="/dashboard/Rectangle-1.png"
          style={{ flexDirection: "row-reverse" }}
        />
        <div></div>
      </TimerProfile>
      {/* <img src="/dashboard/mainbg.png" alt="" /> */}
    </div>
  );
}

export default MainDashboard;
