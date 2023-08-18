import React, { useState, useEffect } from 'react';
import CircularProgress from './CircularProgressBar';
import styles from "../styles/Index.module.css"
import ButtonGroup from './ButtonGroup';

const MODES = {
    POMODORO: { label: 'Pomodoro', minutes: 25 },
    SHORT_BREAK: { label: 'Short Break', minutes: 5 },
    LONG_BREAK: { label: 'Long Break', minutes: 15 },
};

function Timer() {
    const [mode, setMode] = useState(MODES.POMODORO);
    const [activeTab, setActiveTab] = useState("pomodoro");
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
    const handleTabChange = (tab) => {
        setActiveTab(tab)
        if(tab==='pomodoro') {
            setMode(MODES.POMODORO)
        }else if(tab==='shortBreak') {
            setMode(MODES.SHORT_BREAK)
        }else {
            setMode(MODES.LONG_BREAK)
        }
    }

    return (
        <div>
            <ButtonGroup
                activeTab={activeTab}
                onTabChange={(tab) => handleTabChange(tab)}
            />
            <CircularProgress progress={progress}>
                <div className={styles.timerContainer}>
                    <h2 className={styles.timerDisplay}>
                        {String(minutes).padStart(2, '0')}:
                        {String(seconds).padStart(2, '0')}
                    </h2>
                    <div
                        className={styles.actionBtn}
                        onClick={() => setIsActive(!isActive)}>
                        {isActive ? 'Pause' : 'Start'}
                    </div>
                </div>
            </CircularProgress>
        </div>
    );
}

export default Timer;
