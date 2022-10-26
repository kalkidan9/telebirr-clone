import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./app/Screens/HomeScreen";
import SendMoney from "./app/Screens/SendMoney";
import colors from "./app/colors/colors";
export default function App() {
  return (
    <View style={styles.container}>
      <SendMoney />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
});
