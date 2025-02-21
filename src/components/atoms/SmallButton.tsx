import { StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native'
import React from 'react'
import { colors } from '../../assets/color'

interface smallButtonProps {
  text: String,
  containerStyle?: ViewStyle,
  onPress?:Function,
  textStyle?:TextStyle
}

const SmallButton = (props: smallButtonProps) => {
  return (
    <TouchableOpacity onPress={props?.onPress} style={[styles.btnContainer, props.containerStyle]}>
      <Text style={[styles.textStyle,props.textStyle]}>{props.text}</Text>
    </TouchableOpacity>
  )
}

export default SmallButton

const styles = StyleSheet.create({
  btnContainer: {
    width: 57,
    height:24,
    backgroundColor: '#34D9D1',
    borderRadius: 50,
    justifyContent: 'center',
  },
  textStyle: {
    textAlign: 'center',
    color: colors.whiteTextColor,
    fontWeight: '400',
    fontSize: 12
  }
})