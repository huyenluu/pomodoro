// 

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "styled-components";
import { TabBar } from "../styles/Index.styles";

function ButtonGroup({ activeTab, onTabChange, mainColor }) {
  const theme = useTheme();
  const pomodoroRef = useRef(null);
  const shortBreakRef = useRef(null);
  const longBreakRef = useRef(null);

  const [activeBtn, setActiveBtn] = useState({position:0, label:''});

  useEffect(() => {
    switch (activeTab) {
      case "pomodoro":
        setActiveBtn({position:pomodoroRef.current.offsetLeft, label:'Pomodoro'});
        break;
      case "shortBreak":
        setActiveBtn({position:shortBreakRef.current.offsetLeft, label:'Short Break'});
        break;
      case "longBreak":
        setActiveBtn({position:longBreakRef.current.offsetLeft, label: 'Long Break'});
        break;
      default:
        break;
    }
  }, [activeTab]);

  return (
    <TabBar>
      <motion.button
        animate={{
          x: activeBtn.position,
          transition: { duration: 0.5, ease: "easeInOut" }
        }}
        style={{
          position: "absolute",
          width: "33.33%",
          height: "100%",
          backgroundColor: mainColor,
          color: theme.colors.naviBlue,
        }}
      >
        {activeBtn.label}
      </motion.button>
      <motion.button
        ref={pomodoroRef}
        onClick={() => onTabChange("pomodoro")}
      >
        Pomodoro
      </motion.button>
      <motion.button
        ref={shortBreakRef}
        onClick={() => onTabChange("shortBreak")}
      >
        Short Break
      </motion.button>
      <motion.button
        ref={longBreakRef}
        onClick={() => onTabChange("longBreak")}
      >
        Long Break
      </motion.button>
    </TabBar>
  );
}

export default ButtonGroup;
