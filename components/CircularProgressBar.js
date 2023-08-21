import React, { useContext } from "react";
import { motion } from "framer-motion";
import { CircularContent } from "../styles/Index.styles";
import { useTheme } from "styled-components";

//to-do recalculate RASDIUS
function CircularProgress({
  progress,
  mainColor,
  size = 500,
  strokeWidth = 10,
  children,
}) {
  const theme = useTheme();
  const RADIUS = size / 2 - strokeWidth / 2 - 80; // 80px are reserved space for shadow
  const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
  const progressInPercentage = (progress * CIRCUMFERENCE) / 100;
  const offset = CIRCUMFERENCE - progressInPercentage;

  const draw = {
    hidden: { strokeDashoffset: CIRCUMFERENCE, opacity: 0 },
    visible: {
      strokeDashoffset: offset,
      opacity: 1,
      transition: {
        strokeDashoffset: { type: "linear", duration: 1 },
        opacity: { duration: 0.01 },
      },
    },
  };

  return (
    <motion.svg
      width="100%"
      height="100%"
      viewBox={`0 0 ${size} ${size}`}
      className="timer-svg"
    >
      {/* Shadow Filter */}
      <defs>
        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow
            dx="-25"
            dy="-20"
            stdDeviation="30"
            floodColor="blue"
            floodOpacity="0.2"
          />
        </filter>
        <filter id="shadowdark" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow
            dx="25"
            dy="20"
            stdDeviation="30"
            floodColor="black"
            floodOpacity="0.6"
          />
        </filter>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop
            offset="0%"
            style={{ stopColor: "rgb(21 25 50)", stopOpacity: 1 }}
          />
          <stop
            offset="100%"
            style={{ stopColor: "rgb(40 44 83)", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
      {/*Outside circle with shadow: one with top lighter shadow and another one with bottom darken shadow*/}
      <circle
        fill="none"
        stroke="url(#gradient)"
        strokeWidth={strokeWidth * 2}
        r={RADIUS + strokeWidth}
        cx={size / 2}
        cy={size / 2}
        filter="url(#shadow)"
      />
      <circle
        fill="none"
        stroke="url(#gradient)"
        strokeWidth={strokeWidth * 2}
        r={RADIUS + strokeWidth}
        cx={size / 2}
        cy={size / 2}
        filter="url(#shadowdark)"
      />
      {/* Mask circle to hide inside shadow */}
      <circle
        fill={theme.colors.naviBlue}
        r={RADIUS - strokeWidth + 6}
        cx={size / 2}
        cy={size / 2}
      />

      <motion.circle
        initial="hidden"
        animate="visible"
        stroke={mainColor}
        fill="transparent"
        strokeWidth={strokeWidth}
        r={RADIUS}
        cx={size / 2}
        cy={size / 2}
        strokeLinecap="round"
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        strokeDasharray={CIRCUMFERENCE}
        variants={draw}
      />
      <foreignObject
        x={(size - (size - strokeWidth)) / 2}
        y={(size - (size - strokeWidth)) / 2}
        width={size - strokeWidth}
        height={size - strokeWidth}
      >
        <CircularContent>{children}</CircularContent>
      </foreignObject>
    </motion.svg>
  );
}

export default CircularProgress;
