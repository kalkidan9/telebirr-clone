import { View, Text, StyleSheet } from "react-native";
import React from "react";
import AppText from "../AppText";

export default function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null;
  return (
    <View>
      <Text style={styles.errors}>{error}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  errors: {
    fontSize: 18,
    color: "red",
  },
});
