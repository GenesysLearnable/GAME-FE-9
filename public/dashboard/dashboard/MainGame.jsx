import BoardHole from "./BoardHole";
import Count from "./Count";
import GameBoard from "./GameBoard";
import GameSeed from "./GameSeed";
import HoleCount from "./HoleCount";
import ScoreCard from "./ScoreCard";

function MainGame() {
  return (
    <div className="ugo-game">
      <ScoreCard>
        <p>15</p>
      </ScoreCard>
      <div className="ugo--board">
        <HoleCount>
          <Count>4</Count>
          <Count>4</Count>
          <Count>4</Count>
          <Count>4</Count>
          <Count>4</Count>
          <Count>4</Count>
        </HoleCount>
        <GameBoard>
          <BoardHole>
            <GameSeed />
            <GameSeed />
            <GameSeed />
            <GameSeed />
          </BoardHole>
          <BoardHole>
            <GameSeed />
            <GameSeed />
            <GameSeed />
            <GameSeed />
          </BoardHole>
          <BoardHole>
            <GameSeed />
            <GameSeed />
            <GameSeed />
            <GameSeed />
          </BoardHole>
          <BoardHole>
            <GameSeed />
            <GameSeed />
            <GameSeed />
            <GameSeed />
          </BoardHole>
          <BoardHole>
            <GameSeed />
            <GameSeed />
            <GameSeed />
            <GameSeed />
          </BoardHole>
          <BoardHole>
            <GameSeed />
            <GameSeed />
            <GameSeed />
            <GameSeed />
          </BoardHole>
        </GameBoard>

        <GameBoard>
          <BoardHole>
            <GameSeed />
            <GameSeed />
            <GameSeed />
            <GameSeed />
          </BoardHole>
          <BoardHole>
            <GameSeed />
            <GameSeed />
            <GameSeed />
            <GameSeed />
          </BoardHole>
          <BoardHole>
            <GameSeed />
            <GameSeed />
            <GameSeed />
            <GameSeed />
          </BoardHole>
          <BoardHole>
            <GameSeed />
            <GameSeed />
            <GameSeed />
            <GameSeed />
          </BoardHole>
          <BoardHole>
            <GameSeed />
            <GameSeed />
            <GameSeed />
            <GameSeed />
          </BoardHole>
          <BoardHole>
            <GameSeed />
            <GameSeed />
            <GameSeed />
            <GameSeed />
          </BoardHole>
        </GameBoard>
        <HoleCount>
          <Count>4</Count>
          <Count>4</Count>
          <Count>4</Count>
          <Count>4</Count>
          <Count>4</Count>
          <Count>4</Count>
        </HoleCount>
      </div>
      <ScoreCard>
        <p>10</p>
      </ScoreCard>
    </div>
  );
}

export default MainGame;
