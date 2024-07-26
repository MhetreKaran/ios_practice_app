import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CommonHeader from '../components/atoms/CommonHeader'
import { colors } from '../assets/color'
import PortfolioCard from '../components/atoms/PortfolioCard'
import PortfolioHeaderCard from '../components/atoms/PortfolioHeaderCard'
import { SafeAreaView } from 'react-native-safe-area-context'

const Portfolio = () => {
  return (
    <SafeAreaView style={styles.screenStyle}>
      <CommonHeader imagesrc={''} headingText={'Portfolio'} />
      <PortfolioHeaderCard />
    </SafeAreaView>
  )
}

export default Portfolio

const styles = StyleSheet.create({
    screenStyle: {
        flex: 1,
        backgroundColor: colors.screenBackgroundColor,
        padding: 16,
      },
})