import { StatusBar } from "expo-status-bar";
import * as Font from "expo-font";
import React, { useState } from "react";
import Home from "./screens/home";
import { AppLoading } from "expo";
import Navigator from "./routes/drawer";
const getFonts = () => {
  return Font.loadAsync({ 
    "Asap-regular": require("./assets/fonts/Asap-Regular.ttf"),
    "Asap-bold": require("./assets/fonts/Asap-SemiBold.ttf"),
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return <Navigator />;
  } else {
    return (
      // triggers an async task, when complete will trigger the onfinish finction
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );
  }
}
