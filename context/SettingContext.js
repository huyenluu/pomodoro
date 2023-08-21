import { createContext, useState } from "react";
import { useTheme } from 'styled-components';

export const SettingsContext = createContext();

const SettingsProviderComponent = ({ children }) => {
  const theme = useTheme()
  const initialSettings = {
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15,
    font: theme.fonts.fontOpenSans,
    color: theme.colors.tomato,
  };
  const [settings, setSettings] = useState(initialSettings)
  return (
    <SettingsContext.Provider value={{settings, setSettings}}>
      {children}
    </SettingsContext.Provider>
  );
};

// Wrap the component with "withTheme" to get the theme prop
export const SettingsProvider = SettingsProviderComponent;
