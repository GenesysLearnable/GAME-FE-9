import { useNavigate } from "react-router-dom";
import Modal from "../../ui/Modal";
import { useScores } from "../../hooks/useScores";

function WinBadge({ winner, resetPlay, user }) {
  const navigate = useNavigate();
  const [resetScore] = useScores();
  function canelPlay() {
    navigate("/menu");
    resetScore();
    resetPlay();
  }

  return (
    <div className="winb">
      <h1 className="winb-h">Winner</h1>
      <p style={{ textTransform: "capitalize" }}>
        {winner === "Draw"
          ? "The game is a tie"
          : `${winner === "Player 1" ? user?.username : "AI"} wins the game`}
      </p>

      <span>
        <button onClick={resetPlay}>Play again</button>

        <Modal>
          <Modal.Open opens="quit">
            <button>Quit game</button>
          </Modal.Open>
          <Modal.Window name="quit">
            <div className="quit">
              <h1>Quit</h1>

              <p>Are you sure you want to quit?</p>

              <button className="quitBtn" onClick={canelPlay}>
                <span>Quit</span>
              </button>
            </div>
          </Modal.Window>
        </Modal>
      </span>
    </div>
  );
}

export default WinBadge;
