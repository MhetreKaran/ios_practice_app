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
import DescriptionText from "../components/atoms/DescriptionText";
import LongButton from "../components/atoms/LongButton";
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.screenStyle}>
      <StatusBar backgroundColor={colors.screenBackgroundColor} />
      <View style={styles.mainView}>
        <View style={styles.imageView}>
          <Image
            source={require("../assets/images/image3.png")}
            style={styles.imageStyle}
          />
        </View>
        <View style={styles.textView}>
          <HeadingText text="Welcome to Cryptocurrency" numberOfLines={2} />
          <DescriptionText
            textStyle={{ marginTop: 15 }}
            text={"Deliver your Order around the world without hesitation"}
          />
        </View>

        <View style={styles.buttonView}>
          <LongButton
            onPress={() => {
              navigation.navigate('MainSignIn');
            }}
            text={"Login"}
            TouchableStyle={styles.loginButtonStyle}
          />
          <LongButton
            onPress={() => {
              navigation.navigate('SignInScreen')
            }}
            text={"Register"}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
    backgroundColor: colors.screenBackgroundColor,
    paddingHorizontal: 12,
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
  buttonView: { width:'100%',alignItems:'center' },
  loginButtonStyle: {
    backgroundColor: colors.lightPurple,
    marginVertical: 20,
  },
  textView: { width: "70%", alignItems: "center" },
  imageStyle: { height: 206, width: 206 },
  imageView: {
    width: "80%",
    backgroundColor: colors.cardBackgroundColor,
    height: "40%",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 40,
  },
  mainView: { flex: 1, alignItems: "center", width: "100%" },
});
