import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import color from "../colors/colors";

export default function ListItemDeleteAction({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="trash-can"
          size={35}
          color={color.white}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.danger,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});
