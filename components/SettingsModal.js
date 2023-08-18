// src/SettingsModal.js
import React from 'react';
import styles from "../styles/Home.module.css"

function SettingsModal({ isOpen, onClose, settings, updateSettings }) {
    if (!isOpen) {
        return null;
    }

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <header>
                    <h2>Settings</h2>
                    <button onClick={onClose}>Close</button>
                </header>
                <section>
                    <div>
                        <h3>Time (minutes)</h3>
                        <label>
                            Pomodoro:
                            <input 
                                type="number" 
                                value={settings.pomodoro} 
                                onChange={(e) => updateSettings('pomodoro', e.target.value)} 
                            />
                        </label>
                        <label>
                            Short Break:
                            <input 
                                type="number" 
                                value={settings.shortBreak} 
                                onChange={(e) => updateSettings('shortBreak', e.target.value)} 
                            />
                        </label>
                        <label>
                            Long Break:
                            <input 
                                type="number" 
                                value={settings.longBreak} 
                                onChange={(e) => updateSettings('longBreak', e.target.value)} 
                            />
                        </label>
                    </div>
                    <div>
                        <h3>Font</h3>
                        <select 
                            value={settings.font} 
                            onChange={(e) => updateSettings('font', e.target.value)}
                        >
                            <option value="Arial">Arial</option>
                            <option value="Times New Roman">Times New Roman</option>
                            <option value="Courier New">Courier New</option>
                        </select>
                    </div>
                    <div>
                        <h3>Timer Color</h3>
                        <input 
                            type="color" 
                            value={settings.color} 
                            onChange={(e) => updateSettings('color', e.target.value)}
                        />
                    </div>
                </section>
            </div>
        </div>
    );
}

export default SettingsModal;
