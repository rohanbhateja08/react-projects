export default function GameOver({ winner, rematch }) {
    return (
        <div id="game-over">
            <h2>Game Over</h2>
            {winner && <h3>{winner} is the winner</h3>}
            {!winner && <h3>It a draw</h3>}
            <p>
                <button onClick={rematch}>Rematch!</button>
            </p>
        </div>
    )
}