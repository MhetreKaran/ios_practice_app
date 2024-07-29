import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CommonHeader from '../components/atoms/CommonHeader'
import PortfolioHeaderCard from '../components/atoms/PortfolioHeaderCard'
import { colors } from '../assets/color'
import { useNavigation } from '@react-navigation/native'

const MarketScreen = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.screenStyle}>
      <CommonHeader imagesrc={''} headingText={'Market'} goBackFunction={navigation.goBack}/>
      <PortfolioHeaderCard />
    </SafeAreaView>
  )
}

export default MarketScreen

const styles = StyleSheet.create({
    screenStyle: {
        flex: 1,
        backgroundColor: colors.screenBackgroundColor,
        padding: 16,
      },
})