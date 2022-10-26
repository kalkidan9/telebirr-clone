import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Modal,
  Button,
  TouchableWithoutFeedback,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import color from "../colors/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./style";
import Screen from "./Screen";
import PickerItem from "./PickerItem";
import colors from "../colors/colors";

export default function AppPicker({
  icon,
  items,
  placeholder,
  numberOfColumns = 1,
  selectedItem,
  onSelectItem,
  PickerItemComponent = PickerItem,
}) {
  const [modalVisible, setmodalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setmodalVisible(true)}>
        <View style={style.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={25}
              color={color.medium}
              style={style.icon}
            />
          )}
          {/* <Text style={styles.text}>
            {selectedItem ? selectedItem.label}
          </Text> */}

          {selectedItem ? (
            <Text style={styles.text}>{selectedItem.label}</Text>
          ) : (
            <Text style={styles.placeholder}>{placeholder}</Text>
          )}
          <MaterialCommunityIcons
            name="chevron-down"
            size={25}
            color={color.medium}
          />
        </View>
      </TouchableWithoutFeedback>

      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="close" onPress={() => setmodalVisible(false)} />

          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            numColumns={numberOfColumns}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                label={item.label}
                onPress={() => {
                  setmodalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
}
const style = StyleSheet.create({
  container: {
    backgroundColor: color.light,
    borderRadius: 25,
    padding: 15,
    flexDirection: "row",
    marginVertical: 10,
    width: "100%",
  },
  icon: {
    marginRight: 10,
  },
  placeholder: {
    color: colors.medium,
    flex: 1,
  },
  textInput: {
    color: color.dark,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  text: {
    flex: 1,
  },
});
