// src/Timer.js
import React, { useState, useEffect } from 'react';
import CircularProgress from './CircularProgressBar';
import styles from "../styles/Settings.module.css"

const MODES = {
    POMODORO: { label: 'Pomodoro', minutes: 25 },
    SHORT_BREAK: { label: 'Short Break', minutes: 5 },
    LONG_BREAK: { label: 'Long Break', minutes: 15 },
};

function Timer() {
    const [mode, setMode] = useState(MODES.POMODORO);
    const [minutes, setMinutes] = useState(mode.minutes);
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const totalSeconds = mode.minutes * 60;
    const elapsedSeconds = (mode.minutes * 60 - minutes * 60) - seconds;
    const progress = (elapsedSeconds / totalSeconds) * 100;

    useEffect(() => {
        setMinutes(mode.minutes);
        setSeconds(0);
    }, [mode]);

    useEffect(() => {
        let interval;

        if (isActive) {
            interval = setInterval(() => {
                if (seconds > 0) {
                    setSeconds(seconds - 1);
                } else if (seconds === 0 && minutes === 0) {
                    setIsActive(false);
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => {
            clearInterval(interval);
        };
    }, [isActive, seconds]);

    return (
        <div>
            <CircularProgress progress={progress}>
                <h2 className={styles.timerDisplay}>
                    {String(minutes).padStart(2, '0')}:
                    {String(seconds).padStart(2, '0')}
                </h2>
                <button onClick={() => setIsActive(!isActive)}>
                    {isActive ? 'Pause' : 'Start'}
                </button>
            </CircularProgress>
            <div>
                <button onClick={() => setMode(MODES.POMODORO)}>
                    Pomodoro
                </button>
                <button onClick={() => setMode(MODES.SHORT_BREAK)}>
                    Short Break
                </button>
                <button onClick={() => setMode(MODES.LONG_BREAK)}>
                    Long Break
                </button>
            </div>
        </div>
    );
}

export default Timer;
