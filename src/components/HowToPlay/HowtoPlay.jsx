import "./styles.css";
import { useNavigate } from "react-router-dom";
import { backButton } from "../../constants";

function HowtoPlay() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="how-to-play__wrapper">
      <div className="how-to-play__header">
        <div className="back-button" onClick={goBack}>
          <img src={backButton} alt="Go Back" />
        </div>
        <h1>How to play</h1>
      </div>
      <div className="how-to-play">
        <div className="how-to-play__main">
          <div className="how-to-play__description">
            <div className="how-to-play__step">
              <h2>STEP 1</h2>
              <p>
                Place the game board between you and your opponent. The board
                consists of two rows of six small pits (also called houses) and
                two larger pits (called stores) on each end. Put four seeds in
                each of the 12 small pits (for a total of 48 seeds). Each player
                controls the six houses closest to them. The player who goes
                first is usually determined by mutual agreement or a coin toss.
              </p>
            </div>
            <div className="how-to-play__step">
              <h2>STEP 2</h2>
              <p>
                {" "}
                On your turn, choose one of your houses with seeds and pick up
                all the seeds from that house. Moving counterclockwise, drop one
                seed into each consecutive house, including your own stores but
                not your opponent's stores. If the last seed you drop lands in
                your own store, you get an extra turn. If the last seed you drop
                lands in an empty house on your side.
              </p>
            </div>
            <div className="how-to-play__step">
              <h2>STEP 3</h2>
              <p>
                Alternate turns with your opponent, following steps 4 and 5,
                until one side of the board is empty. Alternate turns with your
                opponent, following steps 4 and 5, until one side of the board
                is empty. After one side of the board is empty, the game ends.
                Each player counts the seeds in their store. The player with the
                most seeds wins.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowtoPlay;
