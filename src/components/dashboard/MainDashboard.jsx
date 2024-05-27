import { useUser } from "../../hooks/useUser";
import Spinner from "../../ui/Spinner";
import MainGame from "./MainGame";
import Player from "./Player";
import TimerProfile from "./TimerProfile";

function MainDashboard({ isPaused, setIsPaused }) {
  const { user, isLoading } = useUser();

  // const { username, avatar } = user;
  const avatar_url = "/dashboard/Rectangle.png";

  if (isLoading)
    return (
      <div
        style={{
          height: "100vh",
          padding: "4rem",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Spinner />;
      </div>
    );

  return (
    <div className="ugo-main-dashboard">
      <TimerProfile>
        <p className="ugo-timer" style={{ textTransform: "capitalize" }}>
          00 : 00
        </p>

        <Player
          name={isLoading ? "Player 1" : user?.username.split(" ")[0]}
          imgUrl={!isLoading && user?.avatar === "" ? avatar_url : user?.avatar}
        />
      </TimerProfile>
      <div className="ugo-main-game-v2">
        <MainGame user={user} isPaused={isPaused} setIsPaused={setIsPaused} />
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
