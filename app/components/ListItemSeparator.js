import { View, Text, StyleSheet } from "react-native";
import React from "react";
import color from "../colors/colors";

export default function ListItemSeparator() {
  return <View style={styles.separator}></View>;
}
const styles = StyleSheet.create({
  separator: {
    wodth: "100%",
    height: 1,
    backgroundColor: color.light,
  },
});
