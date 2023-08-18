import React from 'react';
import styles from "../styles/Index.module.css";
import { motion } from 'framer-motion';

function CircularProgress({ progress, size = 500, strokeWidth = 10, children }) {
    const RADIUS = (size / 2) - (strokeWidth / 2);
    const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
    const progressInPercentage = (progress * CIRCUMFERENCE) / 100;
    const offset = CIRCUMFERENCE - progressInPercentage;

    const draw = {
        hidden: { strokeDashoffset: CIRCUMFERENCE, opacity: 0 },
        visible: {
            strokeDashoffset: offset,
            opacity: 1,
            transition: {
                strokeDashoffset: { type: "spring", duration: 1.5, bounce: 0 },
                opacity: { duration: 0.01 }
            }
        }
    };

    return (
        <motion.svg 
            width={size} 
            height={size}
        >
            {/* Shadow Filter */}
            <defs>
                <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="-25" dy="-20" stdDeviation="30" floodColor="blue" floodOpacity="0.2"/>
                </filter>
                <filter id="shadowdark" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="25" dy="20" stdDeviation="30" floodColor="black" floodOpacity="0.6"/>
                </filter>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{stopColor: 'rgb(21 25 50)', stopOpacity:1}} />
                    <stop offset="100%" style={{stopColor: 'rgb(40 44 83)', stopOpacity:1}} />
                </linearGradient>
            </defs>
            <circle
                fill="none"
                stroke="url(#gradient)"
                strokeWidth={strokeWidth*2}
                r={RADIUS-80}
                cx={size / 2}
                cy={size / 2}
                filter="url(#shadow)"
            />
            <circle
                fill="none"
                stroke="url(#gradient)"
                strokeWidth={strokeWidth*2}
                r={RADIUS-80}
                cx={size / 2}
                cy={size / 2}
                filter="url(#shadowdark)"
            />
            {/* Mask circle to hide inside shadow */}
            <circle
                fill="rgb(21 25 50)"  // Use the background color of your app here
                r={RADIUS-80-strokeWidth+6}
                cx={size / 2}
                cy={size / 2}
            />

            <motion.circle
                initial="hidden"
                animate="visible"
                stroke="rgb(247 111 114)"
                fill="transparent"
                strokeWidth={strokeWidth}
                r={RADIUS - 80 - strokeWidth - 7}
                cx={size / 2}
                cy={size / 2}
                strokeLinecap="round"
                transform={`rotate(-90 ${size / 2} ${size / 2})`}
                strokeDasharray={CIRCUMFERENCE}
                variants={draw}
            />
            <foreignObject x={(size - (size - strokeWidth)) / 2} y={(size - (size - strokeWidth)) / 2} width={size - strokeWidth} height={size - strokeWidth}>
                <div className={styles.circularContent}>
                    {children}
                </div>
            </foreignObject>
        </motion.svg>
    );
}

export default CircularProgress;