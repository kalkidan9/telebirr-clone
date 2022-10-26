import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Button,
} from "react-native";
import React from "react";
import colors from "../../app/colors/colors";
import AppButton from "../../app/components/AppButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const catagories = [
  {
    title: "Deposit Cash",
    image: require("../asset/telebirr_logo.png"),
    icon: "database-plus-outline",
    color: colors.orange,
  },
  {
    title: "Buy Airtime/Package",
    image: require("../asset/logo.png"),
    icon: "phone-plus",
    color: colors.orange,
  },
  {
    title: "Send Money",
    image: require("../asset/telebirr_logo.png"),
    icon: "arrow-right-circle-outline",
    color: colors.orange,
  },
  {
    title: "Pay With Telebirr",
    image: require("../asset/telebirr_logo.png"),
    icon: "database-export",
    color: colors.orange,
  },
  {
    title: "Recieve Payment",
    image: require("../asset/telebirr_logo.png"),
    icon: "database",
    color: colors.orange,
  },
  {
    title: "Pay For Merchant",
    image: require("../asset/telebirr_logo.png"),
    icon: "storefront-outline",
    color: colors.orange,
  },
  {
    title: "Withdraw Cash",
    image: require("../asset/telebirr_logo.png"),
    icon: "database-minus-outline",
    color: colors.orange,
  },
  {
    title: "Gerd",
    image: require("../asset/telebirr_logo.png"),
    icon: "home-lightning-bolt",
    color: colors.orange,
  },
];

export default function ItemList(props) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <FlatList
          data={catagories}
          numColumns={2}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <View style={styles.listContainer}>
                <View style={styles.icon}>
                  {/* <Image source={item.image} style={styles.image} /> */}
                  <MaterialCommunityIcons
                    name={item.icon}
                    size={30}
                    color={item.color}
                  />
                  <Text style={styles.text}>{item.title}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />

        <View style={styles.scanButton}>
          <Text style={styles.buttonText}>Scan QR</Text>
        </View>
        <View style={styles.scanButtonMini}>
          <Text style={styles.buttonTextMini}>Mini Statement</Text>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  listContainer: {
    width: 150,
    height: 80,
    backgroundColor: colors.white,
    marginHorizontal: 10,
    margin: 3,
    marginBottom: 20,
    paddingTop: 10,
  },

  icon: {
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: colors.primary,
  },

  text: {
    fontSize: 14,
    color: colors.dodgerblue,
    paddingBottom: 3,
    alignSelf: "center",
    fontWeight: "bold",
  },
  scanButton: {
    width: "90%",
    height: 45,
    padding: 10,
    marginLeft: 20,
    paddingHorizontal: 10,
    backgroundColor: colors.dodgerblue,
    borderRadius: 25,
  },
  scanButtonMini: {
    width: "90%",
    height: 45,
    padding: 10,
    marginLeft: 20,
    paddingHorizontal: 10,
    backgroundColor: colors.white,
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "center",
    color: colors.white,
  },
  buttonTextMini: {
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "center",
    color: colors.dodgerblue,
  },
});
