import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
  useMemo,
} from "react";
import CircularProgress from "./CircularProgressBar";
import ButtonGroup from "./ButtonGroup";
import { ActionButton } from "../styles/Index.styles";
import { SettingsContext } from "../context/SettingContext";

// bugs: progress bar does not concised with timer

function Timer() {
  const { settings } = useContext(SettingsContext);
  const MODES = useMemo(
    () => ({
      POMODORO: { label: "Pomodoro", minutes: settings.pomodoro },
      SHORT_BREAK: { label: "Short Break", minutes: settings.shortBreak },
      LONG_BREAK: { label: "Long Break", minutes: settings.longBreak },
    }),
    [settings.pomodoro, settings.shortBreak, settings.longBreak]
  );

  const [mode, setMode] = useState(() => MODES.POMODORO);
  const [activeTab, setActiveTab] = useState("pomodoro");
  const [minutes, setMinutes] = useState(mode.minutes);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const totalSeconds = mode.minutes * 60;
  const elapsedSeconds = mode.minutes * 60 - minutes * 60 - seconds;
  const progress = (elapsedSeconds / totalSeconds) * 100;

  const handleTabChange = useCallback(
    (tab) => {
      setActiveTab(tab);
      setIsActive(false);
      if (tab === "pomodoro") {
        setMode(MODES.POMODORO);
      } else if (tab === "shortBreak") {
        setMode(MODES.SHORT_BREAK);
      } else {
        setMode(MODES.LONG_BREAK);
      }
    },
    [
      setActiveTab,
      setIsActive,
      setMode,
      MODES.POMODORO,
      MODES.SHORT_BREAK,
      MODES.LONG_BREAK,
    ]
  );
  const handleRestart = (tab) => {
    if (tab === "pomodoro") {
      setMode(MODES.POMODORO);
    } else if (tab === "shortBreak") {
      setMode(MODES.SHORT_BREAK);
    } else {
      setMode(MODES.LONG_BREAK);
    };
  };
  const isTimerFinished = minutes === 0 && seconds === 0;
  useEffect(() => {
    handleTabChange(activeTab);
  }, [settings, activeTab, handleTabChange]);

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
  }, [isActive, seconds, minutes]);

  return (
    <div className="timer-container">
      <ButtonGroup
        mainColor={settings.color}
        activeTab={activeTab}
        onTabChange={(tab) => handleTabChange(tab)}
      />
      <CircularProgress progress={progress} mainColor={settings.color}>
        <div className="time-container">
          {!isTimerFinished && (
            <div className="time-display">
              <div>
                {String(minutes).padStart(2, "0")}:
                {String(seconds).padStart(2, "0")}
                {minutes === 0 && seconds === 0 && "Timer Finished!"}
              </div>
              <ActionButton onClick={() => setIsActive(!isActive)}>
                {isActive ? "Pause" : "Start"}
              </ActionButton>
            </div>
          )}
          {isTimerFinished && (
            <div>
              <div className="timer-finish">
                {minutes === 0 && seconds === 0 && "Timer Finished!"}
              </div>
              <ActionButton onClick={handleRestart}>Restart</ActionButton>
            </div>
          )}
        </div>
      </CircularProgress>
    </div>
  );
}

export default Timer;
