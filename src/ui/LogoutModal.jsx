import Button from "../components/Auth/Button";

function LogoutModal({ onClick }) {
  return (
    <div className="quit">
      <h1>Quit</h1>

      <p>Are you sure you wanna logout?</p>

      <Button onClick={onClick}>
        <span>Quit</span>
      </Button>
    </div>
  );
}

export default LogoutModal;
