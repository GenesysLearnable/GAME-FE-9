import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div>
      Invalid url:
      <button onClick={navigate(-1)}>&larr; Go back</button>
    </div>
  );
}

export default PageNotFound;
