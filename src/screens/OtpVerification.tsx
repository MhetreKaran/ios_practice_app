import { Image,  StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import LongButton from '../components/atoms/LongButton'
import DescriptionText from '../components/atoms/DescriptionText'
import { colors } from '../assets/color'
import { useNavigation } from '@react-navigation/native'
import CommonHeader from '../components/atoms/CommonHeader'
import { SafeAreaView } from 'react-native-safe-area-context'

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
          <TextInput style={styles.inputStyle} keyboardType='number-pad' placeholder='8' placeholderTextColor={colors.whiteTextColor} />
          <TextInput style={styles.inputStyle} keyboardType='number-pad' />
          <TextInput style={styles.inputStyle} keyboardType='number-pad'/>
          <TextInput style={styles.inputStyle} keyboardType='number-pad'/>
        </View>
        <View style={{flexDirection:'row'}}>
        <DescriptionText text={`I didn't receive code.`} />
        <Text style={{ color: '#FE8270',textAlign:'center',fontWeight:'700',fontSize:16 }}>Resend Code</Text>
        </View>
        <Text style={{color:'#4DE0D9',fontWeight:'500',fontSize:16}}>1:20 Sec left</Text>
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
    backgroundColor: colors.cardBackgroundColor
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
    color:colors.whiteTextColor,
    borderRadius: 50,
    backgroundColor: colors.darkBGColor,
  },
  topHeaderText: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 22,
    color: colors.whiteTextColor,
  }
})