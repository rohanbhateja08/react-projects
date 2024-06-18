import { useState } from "react";

export default function Player(props) {
    const [isEditing, setEditing] = useState(false);
    const [playerName, setPlayerName] = useState(props.name);
    function editPlayerName() {
        //this schedules a state update task, but does not do immediately, so if we want to do something immediately 
        // after the state update, we can't rely on the state being updated immediately and we cant use 2 statements like below
        // setEditing(!isEditing);
        // setEditing(!isEditing);
        // instead we can use the callback/anonymous function of setEditing, which will be called after the state is updated
        // setEditing(isEditing => !isEditing);
        // setEditing(isEditing => !isEditing);

        setEditing(isEditing => !isEditing);
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }


    let buttonState = isEditing ? "Save" : "Edit";

    let editedPlayerName = isEditing ?
        <>
            <input type="text" required onChange={handleChange} value={playerName}></input>
        </> : <span className='player-name'>{playerName}</span>;

    return (
        <li className={props.isActive ? 'active' : undefined}>
            <span className="player">
                {editedPlayerName}
                <span className='player-symbol'>{props.symbol}</span>
            </span>
            <button onClick={editPlayerName}>{buttonState}</button>
        </li>
    );
}