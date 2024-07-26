import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import DescriptionText from './DescriptionText'
import { colors } from './../../assets/color';
import Icon from './Icon';
import { iconConstants } from '../../assets/svgIcon';

const InputText = () => {
    const [showPassword, setShowPassword]=useState(true)
  return (
    <View style={{borderWidth:1,borderColor:colors.whiteTextColor,borderRadius:40,paddingHorizontal:20,paddingVertical:8,height:60,marginVertical:15,flexDirection:"row",justifyContent:"space-between"}}>
        <View style={{flexDirection:"column"}}>
        <DescriptionText text='Password' textStyle={{fontSize:13,fontWeight:'500',textAlign:"left"}}/>
      <TextInput placeholder="**********"
           placeholderTextColor={colors.whiteTextColor}
           returnKeyType='go'
           style={{color:'white'}}
           secureTextEntry={showPassword}
           autoCorrect={false} />
        </View>

           <Icon iconName={iconConstants.eye} onPress={()=>setShowPassword(!showPassword)} size={20} containerStyle={{justifyContent:"center",width:50,alignItems:'center'}}/>
    </View>
  )
}

export default InputText

const styles = StyleSheet.create({})