// src/CircularProgress.js
import React from 'react';
import styles from "../styles/ProgressBar.module.css"

const STROKE_WIDTH = 10;
const RADIUS = 50;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

function CircularProgress({ progress, children }) {
    const progressInPercentage = (progress * CIRCUMFERENCE) / 100;
    const offset = CIRCUMFERENCE - progressInPercentage;

    return (
        <svg width="120" height="120">
            <circle
                stroke="grey"
                fill="transparent"
                strokeWidth={STROKE_WIDTH}
                r={RADIUS}
                cx="60"
                cy="60"
            />
            <circle
                stroke="red"
                fill="transparent"
                strokeWidth={STROKE_WIDTH}
                r={RADIUS}
                cx="60"
                cy="60"
                strokeLinecap="round"
                transform={`rotate(-90 60 60)`}
                strokeDasharray={CIRCUMFERENCE}
                strokeDashoffset={offset}
            />
            <foreignObject x="10" y="10" width="100" height="100">
                <div className={styles.circularContent}>
                    {children}
                </div>
            </foreignObject>
        </svg>
    );
}

export default CircularProgress;
