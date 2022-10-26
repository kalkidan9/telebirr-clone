import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
// import AppButton from "../app/components/AppButton";
import colors from "../colors/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ItemList from "../component/ItemList";

export default function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={require("../asset/telebirr_logo.png")}
        />
      </View>

      <Text style={styles.text}> Good Morning Kalkidan Haile</Text>
      <TouchableOpacity>
        <View style={styles.viewBlanceButton}>
          <Text style={styles.viewBalanceText}> View Balancce</Text>
          <MaterialCommunityIcons name="eye-off" size={30} />
        </View>
      </TouchableOpacity>

      <View style={styles.transactionContainer}>
        <MaterialCommunityIcons
          name="database"
          color={colors.dodgerblue}
          size={25}
        />
        <Text style={styles.transactionText}> Transaction Details</Text>
        <MaterialCommunityIcons
          name="chevron-right"
          size={25}
          color={colors.dodgerblue}
        />
      </View>

      <View style={styles.menuContainer}>
        <ItemList />
      </View>
      <View style={styles.footerMenu}>
        <MaterialCommunityIcons
          name="wallet-outline"
          size={40}
          color={colors.white}
        />
        <MaterialCommunityIcons
          name="cellphone-wireless"
          size={40}
          color={colors.white}
        />
        <MaterialCommunityIcons name="account" size={40} color={colors.white} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  button: {
    padding: 5,
    fontSize: 15,
    color: colors.dodgerblue,
  },
  footerMenu: {
    flexDirection: "row",
    height: 60,
    width: "100%",
    backgroundColor: colors.dodgerblue,
    justifyContent: "space-evenly",
    padding: 1,
    marginVertical: 10,
    paddingTop: 10,
  },

  image: {
    width: "40%",
    height: 60,
    paddingLeft: 20,
  },

  menuContainer: {
    borderRadius: 10,
    margin: 10,
    flex: 1,
    backgroundColor: colors.lightgray,
  },
  text: {
    fontSize: 18,
    alignSelf: "flex-end",
    paddingRight: 10,
    paddingBottom: 20,
  },
  transactionContainer: {
    flexDirection: "row",
    paddingTop: 20,
    justifyContent: "center",
  },
  transactionText: {
    color: colors.dodgerblue,
    paddingLeft: 10,
    paddingRight: 10,
  },
  viewBlanceContainer: {
    flexDirection: "row",
  },
  viewBlanceButton: {
    width: "100%",
    height: 40,
    backgroundColor: colors.light,
    flexDirection: "row",
    justifyContent: "center",
  },
  viewBalanceText: {
    color: colors.dodgerblue,
    fontSize: 16,
    alignSelf: "center",
    paddingRight: 100,
    paddingLeft: 100,
  },
});
