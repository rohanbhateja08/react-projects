import { useState } from "react";
import Player from "./components/Players/Player.jsx";
import GameBoard from "./components/GameBoard/GameBoard.jsx";
import Log from "./components/Logs/Log.jsx";
import { WINNING_COMBINATIONS } from "./components/winning-combinations.js";
import GameOver from "./components/GameOver/GameOver.jsx";

const initGameValues = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

let winner;

function checkActivePlayer(turns) {
  let currentPlayer = 'X';
  if (turns.length > 0 && turns[0].player === 'X') {
    currentPlayer = 'O';
  }
  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = checkActivePlayer(gameTurns);

  let gameBoard = [...initGameValues.map(row => [...row])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }


  for (const wc of WINNING_COMBINATIONS) {
    let firstComb = gameBoard[wc[0].row][wc[0].column];
    let secondComb = gameBoard[wc[1].row][wc[1].column];
    let thirsComb = gameBoard[wc[2].row][wc[2].column];

    if (firstComb && firstComb === secondComb && firstComb === thirsComb) {
      winner = firstComb;
    }
  }

  const isDraw = gameTurns.length === 9 && !winner;

  function handleSqaureClick(rowIndex, colIndex) {
    setGameTurns((prevTurn) => {

      const curentActivePlayer = checkActivePlayer(prevTurn);
      const newTurn = [{ square: { row: rowIndex, col: colIndex }, player: curentActivePlayer }, ...prevTurn];
      console.log(newTurn);
      return newTurn;
    });
  }

  function handleRematch() {
    setGameTurns([]);
  }

  return (
    <>
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player name={"Player 1"} symbol={"X"} isActive={activePlayer === 'X'} />
            <Player name={"Player 2"} symbol={"O"} isActive={activePlayer === 'O'} />
          </ol>
          {(winner || isDraw) && (<GameOver winner={winner} isDraw={isDraw} rematch={handleRematch} />)}
          <GameBoard onSelectSqaure={handleSqaureClick} gameBoard={gameBoard} />
        </div>
        <Log turn={gameTurns} />
      </main>
    </>
  );
}

export default App
