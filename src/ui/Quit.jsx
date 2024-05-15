import { useNavigate } from "react-router-dom";
import Button from "../components/Auth/Button";

function Quit() {
  const navigate = useNavigate();

  return (
    <div className="quit quitt">
      <h1>Quit</h1>

      <p>
        You will lose your coin if you quite this and your opponent will win
      </p>

      <Button onClick={() => navigate("/menu")}>
        <span>Quit</span>
      </Button>
    </div>
  );
}

export default Quit;
