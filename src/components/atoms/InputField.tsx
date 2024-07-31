import { StyleSheet, Text, TextInput, View,Platform } from 'react-native'
import React from 'react'
import Icon from './Icon'
import { iconConstants } from '../../assets/svgIcon'
import { colors } from '../../assets/color'
interface inputFieldProps{
    iconName:string
    placeholderText:string

}
const InputField = (props:inputFieldProps) => {
  return (
    <View
    style={{
      flexDirection: 'row-reverse',
      backgroundColor: colors.darkBGColor,
      borderRadius: 50,
      paddingHorizontal: 25,
      marginHorizontal:16,
      paddingVertical: Platform.OS==='ios'?16:8,
      marginBottom: 10,
    }}>
    <Icon
      iconName={props.iconName}
      viewBox="0 0 19 15"
      containerStyle={{
        justifyContent:'center',
        alignItems:'center'
      }}
      size={25}
      noStroke={'none'}
    />
    <TextInput
      placeholder={props.placeholderText}
      placeholderTextColor={colors.whiteTextColor}
      style={{
        flex: 1,
        paddingLeft: 14,
        fontWeight: '400',
        fontSize: 16,
        lineHeight:18.75,
        color: colors.whiteTextColor,
      }}
    />
  </View>
  )
}

export default InputField

const styles = StyleSheet.create({})