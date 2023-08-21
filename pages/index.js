import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/Theme.style";
import { SettingsProvider } from "../context/SettingContext";
//import Main from "../components/Main"

//to-do: check responsiveness
//to-do: handle timer finish state
const Main = dynamic(() => import("../components/Main"), { ssr: false });
function App() {
  return (
    <>
      <Head>
        <title>Pomodoro timer</title>
      </Head>
      <ThemeProvider theme={theme}>
        <SettingsProvider>
          <Main />
        </SettingsProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
