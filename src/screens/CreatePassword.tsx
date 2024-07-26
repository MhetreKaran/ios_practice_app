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
import SmallButton from "../components/atoms/SmallButton";
import { iconConstants } from "../assets/svgIcon";
import RevIcon from "../components/atoms/Icon";
import CommonHeader from "../components/atoms/CommonHeader";
import InputText from "../components/atoms/InputText";
import LongButton from "../components/atoms/LongButton";
import { useNavigation } from "@react-navigation/native";

const CreatePassword = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.screenStyle}>
      <StatusBar backgroundColor={colors.screenBackgroundColor} />
      <CommonHeader
        goBackFunction={() => {navigation.goBack()}}
        headingText="Create password"
        imagesrc={require("../assets/images/Illustration4.png")}
        descText="Choose a secure password that will be easy for you to remember."
      />

      <InputText />
      <LongButton textStyle={{}} text='Continue' onPress={()=>navigation.navigate('SelectLocation')}/>
    </SafeAreaView>
  );
};

export default CreatePassword;

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
    backgroundColor: colors.screenBackgroundColor,
    paddingHorizontal: 20,
  },
  imageStyle: { height: 206, width: 206 },
});
