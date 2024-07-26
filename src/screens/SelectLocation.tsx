import { Image, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { colors } from '../assets/color'
import LongButton from '../components/atoms/LongButton'
import { useNavigation } from '@react-navigation/native'
import CommonHeader from '../components/atoms/CommonHeader'

const SelectLocation = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.screenStyle}>
    <StatusBar backgroundColor={colors.screenBackgroundColor} />
    <CommonHeader
        goBackFunction={() => {navigation.goBack()}}
        headingText="Select Location"
        imagesrc={require("../assets/images/locationLogo.png")}
      />
    <View style={styles.container}>
      <TextInput style={styles.inputStyle} placeholder='Enter Country'  placeholderTextColor={'grey'}/>
      <TextInput style={styles.inputStyle} placeholder='Enter City' placeholderTextColor={'grey'} />
      <LongButton text='Continue' onPress={()=>navigation.navigate('MainSignIn')}/>
    </View>
  </SafeAreaView>
  )
}

export default SelectLocation

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
    backgroundColor: colors.screenBackgroundColor,
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
    gap:30,
    marginTop:20,
    paddingHorizontal:20,
    // justifyContent: 'center',
    alignItems: 'center'
  },
  inputStyle: {
    width: '90%',
    borderRadius: 20,
    paddingHorizontal:10,
    backgroundColor: colors.cardBackgroundColor,
  },
  topHeaderText: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 22,
    marginVertical:30,
    color: colors.whiteTextColor,
  },
  imageStyle: { height: 206, width: 206 },
})