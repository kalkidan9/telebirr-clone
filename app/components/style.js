import { StyleSheet, Platform } from "react-native";
import color from "../colors/colors";
export default styles = StyleSheet.create({
  text: {
    // color: color,
    fontSize: 24,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  default: {
    color: color.dark,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});
