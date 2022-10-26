import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../../app/colors/colors";

export default function ListItem({ source, title }) {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Image source={source} style={styles.image} />
        <Text>{title}</Text>
      </View>
      <TouchableOpacity>
        <View style={styles.itemContainer2}>
          <Image source={source} style={styles.image} />
          <Text>{title}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.footerMenu}>
        <MaterialCommunityIcons name="email" size={30} color={colors.white} />
        <MaterialCommunityIcons name="email" size={30} color={colors.white} />
        <MaterialCommunityIcons name="email" size={30} color={colors.white} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  footerMenu: {
    flexDirection: "row",
    height: 40,
    width: "100%",
    backgroundColor: colors.dodgerblue,
  },
  itemContainer: {
    // flex: 1,
    padding: 10,
    backgroundColor: colors.primary,
  },
  itemContainer2: {
    // flex: 1,
    padding: 10,
    backgroundColor: colors.secondary,
  },
  image: {
    width: "25%",
    height: 30,
  },
});
