import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import color from "../colors/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./style";

export default function AppTextInput({ icon, width = "100%", ...otherProps }) {
  return (
    <View style={[style.container, width]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={25}
          color={color.medium}
          style={style.icon}
        />
      )}
      <TextInput style={styles.default} {...otherProps} />
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    backgroundColor: color.light,
    borderRadius: 25,
    padding: 15,
    flexDirection: "row",
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  textInput: {
    color: color.dark,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});
