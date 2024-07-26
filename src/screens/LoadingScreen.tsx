import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { colors } from "../assets/color";
import HeadingText from "../components/atoms/HeadingText";

const LoadingScreen = () => {
  return (
    <SafeAreaView style={styles.screenStyle}>
      <StatusBar backgroundColor={colors.screenBackgroundColor} />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image
          source={require("../assets/images/Logo.png")}
          style={{ height: 206, width: 206 }}
        />
        <HeadingText
          text={"BITEX"}
          textStyle={{ fontSize: 50, lineHeight: 58.59 }}
        />
      </View>
    </SafeAreaView>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
    backgroundColor: colors.screenBackgroundColor,
  },
  buttonContainer: {
    alignSelf: "flex-end",
    marginHorizontal: 90,
  },
  container: {
    marginTop: 40,
    backgroundColor: colors.cardBackgroundColor,
    marginHorizontal: 20,
    gap: 30,
    padding: 20,
    borderRadius: 20,
  },
});
