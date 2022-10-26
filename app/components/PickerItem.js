import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import AppText from "./AppText";

export default function PickerItem({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  text: { padding: 20 },
});
