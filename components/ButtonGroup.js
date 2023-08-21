import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'styled-components';
import { TabBar } from '../styles/Index.styles';



function ButtonGroup({ activeTab, onTabChange, mainColor }) {
    const theme = useTheme();
    const buttonVariants = {
        inactive: {
            backgroundColor: 'transparent',
            color: theme.colors.greyLight,
            transition: {
                duration: 1,
                easy: 'easeInOut'
            }
        },
        active: {
            backgroundColor: mainColor,
            color: theme.colors.naviBlue,
            transition: {
                duration: 1,
                ease: 'easeInOut'
            }
        }
    };
    return (
        <TabBar>
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
        </TabBar>
    );
}

export default ButtonGroup;
