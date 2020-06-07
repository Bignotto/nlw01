import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { AppLoading } from "expo";
import {
  RobotoMono_400Regular,
  RobotoMono_500Medium,
  useFonts,
} from "@expo-google-fonts/roboto-mono";

import Routes from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    RobotoMono_400Regular,
    RobotoMono_500Medium,
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </>
  );
}
