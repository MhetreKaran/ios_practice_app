import { Image, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import LongButton from '../components/atoms/LongButton'
import DescriptionText from '../components/atoms/DescriptionText'
import { colors } from '../assets/color'
import { useNavigation } from '@react-navigation/native'
import CommonHeader from '../components/atoms/CommonHeader'

const OtpVerification = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.screenStyle}>
      <StatusBar backgroundColor={colors.screenBackgroundColor} />
      <CommonHeader
        goBackFunction={() => { navigation.goBack() }}
        headingText="OTP Verification"
        imagesrc={require("../assets/images/otpLogo.png")}
        descText="An authentication code has been sent to (+880) 111 222 333"
      />
      <View style={styles.container}>
        <View style={{ flexDirection: 'row',gap:20 }}>
          <TextInput style={styles.inputStyle} ><Text style={{ color: 'white' }}>8</Text></TextInput>
          <TextInput style={styles.inputStyle} ><Text style={{ color: 'white' }}></Text></TextInput>
          <TextInput style={styles.inputStyle} ><Text style={{ color: 'white' }}></Text></TextInput>
          <TextInput style={styles.inputStyle} ><Text style={{ color: 'white' }}></Text></TextInput>
        </View>
        <DescriptionText text={`I didn't receive code.`} />
        <Text style={{ color: 'white' }}>Resend Code</Text>
        <LongButton onPress={() => navigation.navigate('CreatePassword')} text='Continue' />
      </View>
    </SafeAreaView>
  )
}

export default OtpVerification

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.screenBackgroundColor
  },
  container: {
    flex: 1,
    marginVertical: 20,
    gap: 20,
    alignItems: 'center'
  },
  inputStyle: {
    textAlign:'center',
    width: 60,
    height:60,
    borderRadius: 50,
    backgroundColor: colors.cardBackgroundColor,
  },
  topHeaderText: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 22,
    color: colors.whiteTextColor,
  }
})