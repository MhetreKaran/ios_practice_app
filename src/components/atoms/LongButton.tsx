import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import React from "react";
import { colors } from "../../assets/color";

interface LongButtonProps {
  text: string;
  textStyle?: TextStyle;
  numberOfLines?: Number;
  onPress: Function;
  TouchableStyle?: ViewStyle;
}
const LongButton = (props: LongButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.btnContainer, props?.TouchableStyle]}
      onPress={props?.onPress}
    >
      <Text
        numberOfLines={props?.numberOfLines}
        style={[styles.textStyle, props?.textStyle]}
      >
        {props?.text}
      </Text>
    </TouchableOpacity>
  );
};

export default LongButton;

const styles = StyleSheet.create({
  btnContainer: {
    width:'100%',
    backgroundColor: colors.blueLongButtonColor,
    borderRadius: 50,
    padding: 16,
  },
  textStyle: {
    textAlign: "center",
    color: colors.whiteTextColor,
    fontWeight: "700",
    fontSize: 18,
    width: "100%",
  },
});
