import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { colors } from '../assets/color'
import CommonHeader from '../components/atoms/CommonHeader'
import { useNavigation } from '@react-navigation/native'
import InputText from '../components/atoms/InputText'
import Icon from '../components/atoms/Icon'
import { iconConstants } from '../assets/svgIcon'
import LongButton from '../components/atoms/LongButton'

const ForgetPassword = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.screenStyle}>
      <CommonHeader 
      headingText='ForgetPassword' 
      imagesrc={require("../assets/images/Illustration5.png")} 
      descText='We will send a mail to the email address you registered to regain your password' 
      goBackFunction={() => navigation.goBack()} />
      <View style={{position:'relative'}}>
      <TextInput style={styles.inputStyle} />
            <Icon
              iconName={iconConstants.mail}
              size={25}
              color={'none'}
              viewBox="0 0 19 15"
              containerStyle={{
                height: 45,
                width: 45,
                position:'absolute',
                top:30,
                left:35
              }}
              onPress={()=>{}}
            />
            </View>
            <LongButton text='Send'/>
    </SafeAreaView>
  )
}

export default ForgetPassword

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
    backgroundColor: colors.screenBackgroundColor,
    paddingHorizontal: 20,
  },
  imageStyle: { height: 206, width: 206 },
  inputStyle: {
    position:'relative',
    alignSelf:'center',
    width: '90%',
    marginVertical:20,
    borderRadius: 20,
    backgroundColor: colors.cardBackgroundColor,
  },
})