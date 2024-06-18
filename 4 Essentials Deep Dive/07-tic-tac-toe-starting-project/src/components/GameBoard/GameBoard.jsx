export default function GameBoard({ onSelectSqaure, gameBoard }) {
    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) =>
                            <li key={colIndex}>
                                <button onClick={() => onSelectSqaure(rowIndex, colIndex)} key={colIndex} disabled={playerSymbol}>{playerSymbol}</button>
                            </li>
                        )}
                    </ol>
                </li>
            ))}
        </ol>
    );
}


// onClick={() => handlebuttonClick(rowIndex, colIndex, currentPlayer)}