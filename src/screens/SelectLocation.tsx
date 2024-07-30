import { Image,  StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { colors } from '../assets/color'
import LongButton from '../components/atoms/LongButton'
import { useNavigation } from '@react-navigation/native'
import CommonHeader from '../components/atoms/CommonHeader'
import { SafeAreaView } from 'react-native-safe-area-context'
import SelectDropdown from 'react-native-select-dropdown'
import Icon from '../components/atoms/Icon'
import { iconConstants } from '../assets/svgIcon'
const countries = [
  { title: 'India', code: 'IN', capital: 'New Delhi' },
  { title: 'United States', code: 'US', capital: 'Washington, D.C.' },
  { title: 'Canada', code: 'CA', capital: 'Ottawa' },
  { title: 'United Kingdom', code: 'GB', capital: 'London' },
  { title: 'Australia', code: 'AU', capital: 'Canberra' },
  { title: 'Germany', code: 'DE', capital: 'Berlin' },
  { title: 'France', code: 'FR', capital: 'Paris' },
  { title: 'Japan', code: 'JP', capital: 'Tokyo' },
  { title: 'Brazil', code: 'BR', capital: 'Brasília' },
  { title: 'South Africa', code: 'ZA', capital: 'Pretoria' },
];
const cities = [
  { title: 'New York', country: 'United States', state: 'New York', population: 8419600 },
  { title: 'London', country: 'United Kingdom', state: 'England', population: 8982000 },
  { title: 'Tokyo', country: 'Japan', state: 'Tokyo', population: 13929286 },
  { title: 'Sydney', country: 'Australia', state: 'New South Wales', population: 5373000 },
  { title: 'Toronto', country: 'Canada', state: 'Ontario', population: 2731579 },
  { title: 'Paris', country: 'France', state: 'Île-de-France', population: 2148327 },
  { title: 'Berlin', country: 'Germany', state: 'Berlin', population: 3644826 },
  { title: 'São Paulo', country: 'Brazil', state: 'São Paulo', population: 12106920 },
  { title: 'Cape Town', country: 'South Africa', state: 'Western Cape', population: 433688 },
  { title: 'Mumbai', country: 'India', state: 'Maharashtra', population: 12442373 },
  { title: 'Moscow', country: 'Russia', state: 'Moscow', population: 11920000 },
  { title: 'Istanbul', country: 'Turkey', state: 'Istanbul', population: 15462452 },
  { title: 'Dubai', country: 'United Arab Emirates', state: 'Dubai', population: 3318000 },
  { title: 'Buenos Aires', country: 'Argentina', state: 'Buenos Aires', population: 2890151 },
  { title: 'Seoul', country: 'South Korea', state: 'Seoul', population: 9776000 },
];

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
    <SelectDropdown
    data={countries}
    onSelect={(selectedItem, index) => {
      console.log(selectedItem, index);
    }}
    renderButton={(selectedItem, isOpened) => {
      return (
        <View style={styles.dropdownButtonStyle}>
          <Text style={styles.dropdownButtonTxtStyle}>
            {(selectedItem && selectedItem.title) || 'Select your Country'}
          </Text>
          <Icon iconName={iconConstants.dropDown} viewBox='0 0 18 9' size={20} noStroke={'none'} containerStyle={styles.dropdownButtonArrowStyle} />
        </View>
      );
    }}
    renderItem={(item, index, isSelected) => {
      return (
        <View style={{...styles.dropdownItemStyle, ...(isSelected && {backgroundColor: '#D2D9DF'})}}>
          <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
        </View>
      );
    }}
    showsVerticalScrollIndicator={false}
    dropdownStyle={styles.dropdownMenuStyle}
  />
     <SelectDropdown
    data={cities}
    onSelect={(selectedItem, index) => {
      console.log(selectedItem, index);
    }}
    renderButton={(selectedItem, isOpened) => {
      return (
        <View style={styles.dropdownButtonStyle}>
          <Text style={styles.dropdownButtonTxtStyle}>
            {(selectedItem && selectedItem.title) || 'Select your City'}
          </Text>
          <Icon iconName={iconConstants.dropDown} viewBox='0 0 18 9' size={20} noStroke={'none'} containerStyle={styles.dropdownButtonArrowStyle} />
        </View>
      );
    }}
    renderItem={(item, index, isSelected) => {
      return (
        <View style={{...styles.dropdownItemStyle, ...(isSelected && {backgroundColor: '#D2D9DF'})}}>
          <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
        </View>
      );
    }}
    showsVerticalScrollIndicator={false}
    dropdownStyle={styles.dropdownMenuStyle}
  />
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
  //
  dropdownButtonStyle: {
    width: '100%',
    height: 50,
    backgroundColor: colors.cardBackgroundColor,
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 16,
    fontWeight: '400',
    color: '#ACBAC3',
  },
  dropdownButtonArrowStyle: {
    fontSize: 28,
  },
  dropdownButtonIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  dropdownMenuStyle: {
    backgroundColor: '#E9ECEF',
    borderRadius: 8,
  },
  dropdownItemStyle: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    color: '#black',
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
})