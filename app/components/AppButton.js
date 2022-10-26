import { Button, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../colors/colors";

export default function AppButton({
  title,
  onPress,
  style,
  tcolor = "white",
  color = "primary",
}) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }, style]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: colors[tcolor] }, style]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    // justifyContent: "flex-end",
    padding: 10,
    width: "100%",
    marginVertical: 10,
  },

  text: {
    fontSize: 20,
    textTransform: "capitalize",
    fontWeight: "bold",
    color: colors.white,
    alignSelf: "center",
  },
});
