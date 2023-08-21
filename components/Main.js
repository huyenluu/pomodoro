import React, { useState, useContext } from "react";

import Timer from "../components/Timer";
import SettingsModal from "../components/SettingsModal";
import { IoIosSettings } from "react-icons/io";
import { AppContainer } from "../styles/Index.styles";
import { SettingsContext } from "../context/SettingContext";

//to-do: check responsiveness
//to-do: handle timer finish state

function Main() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { settings } = useContext(SettingsContext);
  return (
    <AppContainer font={settings.font}>
      <h1 className="title">Pomodoro</h1>
      <Timer />
      <div onClick={() => setIsModalOpen(true)}>
        <IoIosSettings className="icon" />
      </div>
      <SettingsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </AppContainer>
  );
}

export default Main;
