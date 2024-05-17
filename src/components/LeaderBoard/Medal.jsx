import React from "react";
import { goldMedal, silverMedal, bronzeMedal } from "../../constants";

function Medal({ rank }) {
  let medalImage;
  switch (rank) {
    case 1:
      medalImage = goldMedal;
      break;
    case 2:
      medalImage = silverMedal;
      break;
    case 3:
      medalImage = bronzeMedal;
      break;

    default:
      medalImage = null;
      break;
  }
  return (
    <div className="leaderboard-item__rank">
      {medalImage && <img src={medalImage} alt={`${rank}-medal`} />}
      {!medalImage && <p>{rank}</p>}
    </div>
  );
}

export default Medal;
