import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import React from "react";
import colors from "../colors/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function SendMoney(props) {
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="chevron-left"
            size={60}
            color={colors.white}
          />
        </TouchableOpacity>
        <Text
          style={{
            paddingLeft: 70,
            paddingTop: 15,
            fontSize: 20,
            color: colors.white,
          }}
        >
          Send Money
        </Text>
      </View>
      <View style={styles.sendTo}>
        <Text style={styles.sendToText}> Send To</Text>

        <TextInput
          style={styles.textInput}
          // placeholder="  Enter mobile number "
          placeholder={"Enter mobile number"}
        />
      </View>
      <View style={styles.sendAmount}>
        <Text style={styles.sendToText}> Set Amount</Text>

        <TextInput
          style={styles.textInput}
          placeholder="  Enter Amount                                         (ETB)"
        />
      </View>
      <View style={styles.button}>
        <Button title="Next" color={colors.lightgray} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
  button: {
    // width: "90%",
    justifyContent: "center",
    paddingLeft: 20,
    paddingRight: 20,
  },
  headerView: {
    flexDirection: "row",
    // width: "100%",
    height: 80,
    backgroundColor: colors.dodgerblue,
    paddingTop: 20,
  },
  icon: {
    flexDirection: "row",
  },
  textInput: {
    // flex: 1,
    height: 45,
    width: "95%",
    borderWidth: 0.5,
    margin: 10,
    marginBottom: 5,
    borderColor: colors.dodgerblue,
  },
  textInputIcon: {
    alignSelf: "center",
  },
  sendAmount: {
    borderColor: colors.orange,
    borderWidth: 0.5,
    width: "95%",
    height: 120,
    margin: 10,
    paddingBottom: 5,
    marginBottom: 70,
  },

  sendTo: {
    borderColor: colors.orange,
    borderWidth: 1,
    // width: "95%",
    height: 120,
    margin: 10,
    paddingBottom: 5,
  },
  sendToText: {
    fontSize: 18,
    padding: 10,
  },
});
