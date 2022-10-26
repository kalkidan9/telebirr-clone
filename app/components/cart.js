//import { View, Text } from "react-native";
import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import color from "../colors/colors";

export default function Cart({ title, subtitle, image }) {
  return (
    <View style={styles.cart}>
      <Image source={image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title} </Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  cart: {
    flex: 1,
    // padding: 20,
    paddingTop: 40,
    borderRadius: 25,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 250,
    margin: 10,
    // borderRadius: 25,
  },
  title: {
    //padding: 20,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 7,
    color: color.secondary,
  },
  textContainer: {
    padding: 20,
  },

  subtitle: {
    // margin: 10,
    fontSize: 25,
    fontWeight: "bold",
    //paddingLeft: 80,
    color: color.primary,
  },
});
