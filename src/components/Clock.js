import clsx from 'clsx';
import { useEffect } from 'react';
import './styles/Clock.css';
import React from 'react';

const Clock = ({ setStart, start, setPause, pause, timer, themeColor, session, pomodoro, short, long }) => {

    const ringColor = clsx('progress-ring__circle', {
        red: themeColor === 'red',
        blue: themeColor === 'blue',
        purple: themeColor === 'purple'
    });

    // click to start/pause/continue a timer
    function handleClick() {
        if (!start) setStart(true);
        else {
            setPause(!pause);
        }
    }

    useEffect(() => {
        const circle = document.querySelector('#circle');
        const radius = circle.r.baseVal.value;
        const circumference = radius * 2 * Math.PI;
        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = circumference;

        let percent = 1;
        if (session === 'pomodoro') {
            percent = (timer / (pomodoro * 60)) * 100;
        }
        if (session === 'short') {
            percent = (timer / (short * 60)) * 100;
        }
        if (session === 'long') {
            percent = (timer / (long * 60)) * 100;
        }
        const offset = circumference - (percent / 100) * circumference;
        circle.style.strokeDashoffset = offset;

    }, [timer, session, pomodoro, short, long])

    return (
        <div className="clock">
            <button className="main-button" onClick={handleClick}>
                <svg
                    id="circle-tablet"
                    className="progress-ring"
                    height="339"
                    width="339"
                >
                    <circle
                    id="circle"
                    className={ringColor}
                    strokeWidth="8"
                    stroke="#F87070"
                    strokeLinecap="round"
                    fill="transparent"
                    r="165"
                    cx="169"
                    cy="169"
                    ></circle>
                </svg>
                <h1>{ Math.floor(timer / 60) < 10 ? '0'+Math.floor(timer/60) : Math.floor(timer/60) }:
                {Math.floor(timer % 60) < 10 ? '0'+Math.floor(timer % 60) : Math.floor(timer % 60)}
                </h1>
                <h3>{ !start||pause? 'start' : 'pause'}</h3>
            </button>
        </div>
    );
}

export default Clock;