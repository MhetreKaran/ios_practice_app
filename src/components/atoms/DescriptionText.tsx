import { StyleSheet, Text, TextStyle, View } from 'react-native'
import React from 'react'
import { colors } from '../../assets/color'

interface descriptionTextProps{
  text:string;
  textStyle?:TextStyle,
  numberOfLines?:Number,
}
const DescriptionText = (props:descriptionTextProps) => {
  return (
    <View>
      <Text numberOfLines={props?.numberOfLines} style={[styles.descriptionTextStyle,props?.textStyle]}>{props?.text}</Text>
    </View>
  )
}

export default DescriptionText

const styles = StyleSheet.create({
    descriptionTextStyle:{
        fontWeight:'400',
        color:colors.descriptionTextColor,
        textAlign:'center',
        fontSize:18
    }
})