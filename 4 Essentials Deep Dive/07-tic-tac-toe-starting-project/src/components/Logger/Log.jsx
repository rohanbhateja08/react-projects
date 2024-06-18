export default function Log({ turn, props}) {
    return (
        <ol className="test-class" id="log">
            {turn.map((turn, index) => {
                const { player, square } = turn;
                const { row, col } = square;
                return (
                    <li key={index}>
                        <span>{player} played row {row}, col {col}</span>
                    </li>
                )
            })}
        </ol>
    )
}
