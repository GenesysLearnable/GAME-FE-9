import { useNavigate } from "react-router-dom";
import Button from "../components/Auth/Button";
// import { useScores } from "../hooks/useScores";

function Quit() {
  const navigate = useNavigate();
  // const [resetScore] = useScores();

  function handleQuit() {
    navigate("/menu");
    // resetScore();
  }
  return (
    <div className="quit quitt">
      <h1>Quit</h1>

      <p>
        You will lose your coin if you quite this and your opponent will win
      </p>

      <Button onClick={handleQuit}>
        <span>Quit</span>
      </Button>
    </div>
  );
}

export default Quit;
