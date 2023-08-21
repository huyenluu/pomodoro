import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/Theme.style";
import { SettingsProvider } from "../context/SettingContext";
import Main from "../components/Main"


//const Main = dynamic(() => import("../components/Main"), { ssr: true });
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
