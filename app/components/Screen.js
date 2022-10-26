import { View, Text, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import React from "react";
import Constants from "expo-constants";

export default function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    // justifyContent: "center",
    // alignItems: "center",
  },
  view: {
    flex: 1,
    paddingTop: 10,
  },
});
