import { useState, useRef } from 'react';


export default function Player() {
  const playerRef = useRef();
  const [userName, setUserName] = useState('');

  function updateUserName() {
    console.log(playerRef);
    setUserName(playerRef.current.value);
    // playerRef.current.value = '';
  }


  return (
    <section id="player">
      <h2>Welcome {userName ?? "unknown entity"}</h2>
      <p>
        <input ref={playerRef} type="text" />
        <button onClick={updateUserName}>Set Name</button>
      </p>
    </section>
  );
}
