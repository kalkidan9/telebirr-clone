import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  onPress,
} from "react-native";
import React from "react";
import color from "../colors/colors";
import AppText from "../components/AppText";
import {
  Swipeable,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ListItem({
  image,
  title,
  subtitle,
  onPress,
  ImageComponent,
  renderRightActions,
}) {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={color.light} onPress={onPress}>
          <View style={styles.container}>
            {ImageComponent}
            {image && <Image source={image} style={styles.image} />}
            <View style={styles.detailsContainer}>
              <AppText style={styles.title} numberOfLines={1}>
                {" "}
                {title}
              </AppText>
              {subtitle && (
                <AppText style={styles.subtitle} numberOfLines={2}>
                  {subtitle}
                </AppText>
              )}
            </View>
            <MaterialCommunityIcons name="chevron-right" size={25} />
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    padding: 15,
    backgroundColor: color.white,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  title: {
    numberOfLines: 1,
    fontSize: 18,
    textTransform: "capitalize",
  },
  subtitle: {
    fontSize: 18,
    marginLeft: 5,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
});
