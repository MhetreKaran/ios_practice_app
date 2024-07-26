import { StyleSheet, Text, TextStyle, View } from 'react-native'
import React from 'react'
import { colors } from '../../assets/color'

interface headingTextProps{
  text:string;
  textStyle?:TextStyle,
  numberOfLines?:Number,
}
const HeadingText = (props:headingTextProps) => {
  return (
    <View style={{marginHorizontal:20}}>
      <Text numberOfLines={props?.numberOfLines} style={[styles.headingTextStyle,props.textStyle]}>{props.text}</Text>
    </View>
  )
}

export default HeadingText

const styles = StyleSheet.create({
    headingTextStyle:{
        fontWeight:'700',
        color:colors.headingTextColor,
        textAlign:'center',
        fontSize:30,
        fontFamily:'Roboto'
    }
})