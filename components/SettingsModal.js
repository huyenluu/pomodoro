// src/SettingsModal.js
import React, { useContext, useState } from "react";
import { GrClose } from "react-icons/gr";
import CustomSelect from "./CustomSelect";
import {
  ModalOverlay,
  Label,
  Input,
  SubmitBtn,
} from "../styles/Settings.styles";
import { SettingsContext } from "../context/SettingContext";


function SettingsModal({ isOpen, onClose }) {
  const { settings, setSettings } = useContext(SettingsContext);
  const [values, setValues] = useState(settings);
  if (!isOpen) {
    return null;
  }
  const updateSettings = (key, value) => {
    setValues((prevSettings) => ({
      ...prevSettings,
      [key]: value,
    }));
  };
  const handleSubmit = () => {
    setSettings(values);
    onClose();
  };

  return (
    <ModalOverlay>
      <div className="modalContent">
        <header className="header">
          <h2>Settings</h2>
          <GrClose className="icon-close" onClick={onClose} />
        </header>
        <div className="main">
          <div className="settings">
            <h3 className="settings-title title-w-full">Time (minutes)</h3>
            <div className="fieldset">
              <Label htmlFor="pomodoro">Pomodoro</Label>
              <Input
                name="pomodoro"
                type="number"
                value={values.pomodoro}
                onChange={(e) => updateSettings("pomodoro", e.target.value)}
              />
            </div>
            <div className="fieldset">
              <Label htmlFor="shortBreak">Short Break</Label>
              <Input
                type="number"
                value={values.shortBreak}
                name="shortBreak"
                onChange={(e) => updateSettings("shortBreak", e.target.value)}
              />
            </div>
            <div className="fieldset">
              <Label htmlFor="longBreak">Long Break</Label>
              <Input
                type="number"
                value={values.longBreak}
                name="longBreak"
                onChange={(e) => updateSettings("longBreak", e.target.value)}
              />
            </div>
          </div>
          <div className="font">
            <h3 className="settingsTitle">Font</h3>
            <CustomSelect
              handleSelect={(type, value) => updateSettings(type, value)}
              fontSelected={values.font}
              key="font"
              type="font"
            />
          </div>
          <div className="color">
            <h3 className="settingsTitle">Color</h3>
            <CustomSelect
              handleSelect={(type, value) => updateSettings(type, value)}
              colorSelected={values.color}
              key="color"
              type="color"
            />
          </div>
          <SubmitBtn onClick={handleSubmit}>Apply</SubmitBtn>
        </div>
      </div>
    </ModalOverlay>
  );
}

export default SettingsModal;
