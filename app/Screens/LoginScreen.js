import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Button,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import * as Yup from "yup";
import {
  AppForm,
  AppFormField,
  ErrorMessage,
  SubmitButton,
} from "../app/components/forms";
import colors from "../app/colors/colors";
import AppButton from "../app/components/AppButton";

const validationSchema = Yup.object().shape({
  mobile: Yup.string().required().email().label("Mobile"),
  pin: Yup.string().required().min(4).label("PIN"),
});
export default function WellcomeScreen(props) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image
            source={require("../ethio_telecom/asset/logo.png")}
            style={styles.image}
          />
          <Text style={styles.language}> language</Text>
        </View>
        <Text style={styles.wellcome}> Well Come To Telebirr</Text>

        <View style={styles.textInputContainer}>
          <Text>Mobile number</Text>
          <TextInput style={styles.textInput} placeholder="251" />
        </View>
        <View style={styles.textInputContainer}>
          <Text>PIN</Text>
          <TextInput style={styles.textInput} placeholder="Enter PIN" />
        </View>

        <TouchableOpacity>
          <Text style={styles.forgotPin}> Forgot PIN ?</Text>
        </TouchableOpacity>

        <AppButton title="login" color="dodgerblue" style={styles.button} />
        <View style={styles.accountCreat}>
          <Text style={styles.textAccount}>Don't have an account?</Text>
          <TouchableOpacity>
            <Text style={styles.textAccountNew}>Create New Account</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.copyrightText}>
          <Text>copyright 1984-2021 © Ethio telecom. All</Text>
          <Text>Rights Reserved</Text>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  accountCreat: {
    flexDirection: "row",
  },
  button: {
    marginLeft: 35,
    width: "80%",
  },
  copyrightText: {
    paddingTop: 50,
    alignSelf: "center",
  },
  forgotPin: {
    paddingTop: 20,
    fontWeight: "bold",
    color: "dodgerblue",
    paddingLeft: 30,
    paddingBottom: 20,
  },
  language: {
    paddingTop: 20,
    paddingLeft: 30,
  },
  logo: {
    flexDirection: "row",
  },
  image: {
    width: 200,
    height: 50,
    padding: 0,
    margin: 10,
  },
  textAccount: {
    paddingLeft: 35,
    paddingRight: 15,
    padding: 5,
    fontSize: 12,
    fontFamily: "normal",
  },
  textAccountNew: {
    padding: 5,
    color: "dodgerblue",
    fontSize: 12,
  },
  textInput: {
    borderRadius: 50,
  },
  textInputContainer: {
    borderRadius: 2,
    height: 65,
    width: "80%",
    paddingLeft: 10,
    borderColor: colors.medium,
    backgroundColor: colors.white,
    margin: 10,
    marginLeft: 35,
    borderWidth: 1,
  },
  wellcome: {
    fontSize: 24,
    alignSelf: "center",
    color: "dodgerblue",
    fontWeight: "bold",
    paddingTop: 20,
    paddingBottom: 20,
    fontFamily: "Roboto",
  },
});
