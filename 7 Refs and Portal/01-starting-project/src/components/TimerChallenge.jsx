import React from 'react'
import { useState, useRef } from 'react';
import ResultModal from './ResultModal';

export default function TimerChallenge({ title, targetTime }) {
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);
    const timerid = useRef();
    const dialog = useRef();

    function handleStart() {
        timerid.current = setTimeout(() => {
            setTimerExpired(() => true);
            dialog.current.showModal();
        }, targetTime * 1000);

        setTimerStarted(() => true);
        console.log(timerid);
    }

    function handleStop() {
        setTimerStarted(() => false);
        setTimerExpired(() => false);
        clearTimeout(timerid.current);
    }

    let handleType = timerStarted ? handleStop : handleStart;

    return (
        <>
            <ResultModal ref={dialog} result='lost' targetTime={targetTime} />
            <section className='challenge'>
                <h2>{title}</h2>
                <p className='challenge-time'>{targetTime} second{targetTime > 1 ? 's' : ''}</p>
                <button onClick={handleType}>{timerStarted ? 'Stop' : 'Start'}</button>
                <p className={timerStarted ? 'active' : undefined}>{timerStarted ? 'Timer is running' : 'Timer is not running'}</p>
            </section>
        </>
    )
}
