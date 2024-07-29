import { Image,  StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { colors } from '../assets/color'
import DescriptionText from '../components/atoms/DescriptionText'
import LongButton from '../components/atoms/LongButton'
import { useNavigation } from '@react-navigation/native'
import CommonHeader from '../components/atoms/CommonHeader'
import { SafeAreaView } from 'react-native-safe-area-context'

const SignInScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.screenStyle}>
      <StatusBar backgroundColor={colors.screenBackgroundColor} />
      <CommonHeader
        goBackFunction={() => { navigation.goBack() }}
        headingText="Sign In"
        imagesrc={require("../assets/images/register.png")}
        descText="Simply enter your phone number to login or create an account."
      />
        <TextInput style={styles.inputStyle} ><Text style={{ color: 'white' }}>+88</Text></TextInput>
        <DescriptionText text='By using our mobile app, you agree to our Privacy Policy' />
        <LongButton  text='Continue' onPress={() => navigation.navigate('OtpVerification')} />
    </SafeAreaView>
  )
}

export default SignInScreen

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
    paddingHorizontal:20,
    gap:30,
    backgroundColor: colors.screenBackgroundColor
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputStyle: {
    width: '80%',
    height: 40,
    alignSelf:'center',
    borderRadius: 20,
    backgroundColor: colors.cardBackgroundColor,
    paddingHorizontal:10
  },
  topHeaderText: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 22,
    color: colors.whiteTextColor,
  }
})