import React, { useState } from 'react';
import Timer from '../components/Timer';
import SettingsModal from '../components/SettingsModal';
import styles from "../styles/Home.module.css";

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [settings, setSettings] = useState({
        pomodoro: 25,
        shortBreak: 5,
        longBreak: 15,
        font: 'Arial',
        color: '#000000',
    });

    const updateSettings = (key, value) => {
        setSettings((prevSettings) => ({
            ...prevSettings,
            [key]: value,
        }));
    };
    return (
        <div className={styles.App}>
                <h1>Pomodoro Timer</h1>
                <Timer settings={settings} />
                <button onClick={() => setIsModalOpen(true)}>Settings</button>
                <SettingsModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    settings={settings}
                    updateSettings={updateSettings}
                />
        </div>
    );
}

export default App;
