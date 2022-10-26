import { View, Text, StyleSheet, Image } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import React, { useState } from "react";
import colors from "../app/colors/colors";
import Screen from "../app/components/Screen";

// const [images, setImages] = useState([
//   require("./asset/logo.png"),
//   require("./asset/logo.png"),
//   require("./asset/telebirr_logo.png"),
// ]);
export default function PromotionPage(props) {
  return (
    <Screen style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("./asset/telebirr_logo.png")}
          style={styles.logoIMage}
        />
      </View>
      <View style={styles.imageContainer}>
        <SliderBox
          image={images}
          sliderBoxHeight={400}
          dotColor={colors.dodgerblue}
          inactiveDotColor={colors.primary}
          paginationBoxVerticalPadding={20}
          autoplay
          circleLoop
        />
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    backgroundColor: "white",
    paddingTop: 10,
    flex: 1,
  },
  logoContainer: {
    width: "100%",
    height: 60,
    backgroundColor: colors.primary,
  },
  logoIMage: {
    width: 200,
    height: 50,
  },
});
