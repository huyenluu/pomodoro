import React from 'react';
import { motion } from 'framer-motion';
import styles from "../styles/Index.module.css"

const buttonVariants = {
    inactive: {
        backgroundColor: 'transparent',
        color: '#7f83a2',
        transition: {
            duration: 0.3
        }
    },
    active: {
        backgroundColor: 'rgb(247 111 114)',
        color: 'rgb(21 25 50)',
        transition: {
            duration: 0.3
        }
    }
};

function ButtonGroup({ activeTab, onTabChange }) {
    return (
        <div className={styles.tabBar}>
            <motion.button 
                onClick={() => onTabChange("pomodoro")}
                variants={buttonVariants}
                initial={"inactive"}
                animate={activeTab === "pomodoro" ? "active" : "inactive"}
            >
                Pomodoro
            </motion.button>
            <motion.button 
                onClick={() => onTabChange("shortBreak")}
                variants={buttonVariants}
                initial={"inactive"}
                animate={activeTab === "shortBreak" ? "active" : "inactive"}
            >
                Short Break
            </motion.button>
            <motion.button 
                onClick={() => onTabChange("longBreak")}
                variants={buttonVariants}
                initial={"inactive"}
                animate={activeTab === "longBreak" ? "active" : "inactive"}
            >
                Long Break
            </motion.button>
        </div>
    );
}

export default ButtonGroup;
