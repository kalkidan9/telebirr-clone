import React from "react";
import { Text } from "react-native";

// import defaultStyles from "../config/styles";
import styles from "./style";

function AppText({ children, style, ...otherProps }) {
  return (
    <Text style={[styles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
}

export default AppText;
