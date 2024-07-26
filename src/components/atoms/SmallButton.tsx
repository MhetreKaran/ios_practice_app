import { StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import React from 'react'
import { colors } from '../../assets/color'

interface smallButtonProps {
  text: String,
  containerStyle: ViewStyle,
  onPress:Function
}

const SmallButton = (props: smallButtonProps) => {
  return (
    <TouchableOpacity onPress={props?.onPress} style={[styles.btnContainer, props.containerStyle]}>
      <Text style={styles.textStyle}>{props.text}</Text>
    </TouchableOpacity>
  )
}

export default SmallButton

const styles = StyleSheet.create({
  btnContainer: {
    width: 80,
    backgroundColor: colors.pinkButtonColor,
    borderRadius: 50,
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8
  },
  textStyle: {
    textAlign: 'center',
    color: colors.whiteTextColor,
    fontWeight: '400',
    fontSize: 18
  }
})