import {  ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../assets/color'
import Icon from '../components/atoms/Icon'
import { iconConstants } from '../assets/svgIcon'
import { useNavigation } from '@react-navigation/native'
import HeadingText from '../components/atoms/HeadingText'
import ProfileCard from '../components/molecules/ProfileCard'
import AccountCard from '../components/molecules/AccountCard'

const Setting = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.screenStyle}>
    
    <View style={{flexDirection: 'row', width: '100%', marginVertical: 18}}>
        <Icon
          iconName={iconConstants.backArrow}
          size={30}
          color={'white'}
          viewBox="2 4 26 20"
          containerStyle={{
            height: 45,
            width: 45,
            borderRadius: 25,
            backgroundColor: colors.darkBGColor,
          }}
          onPress={() => navigation.goBack()}
        />
        <View
          style={{
            width: '70%',
            justifyContent: 'center',
          }}>
          <HeadingText
            text={'Settings'}
            textStyle={{
              color: colors.whiteTextColor,
              fontSize: 22,
              lineHeight: 25.78,
              fontWeight: '700',
            }}
          />
        </View>
      </View>
      <ScrollView scrollEnabled={true} showsVerticalScrollIndicator={false}>
      <ProfileCard />
      <AccountCard />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Setting

const styles = StyleSheet.create({
  screenStyle:{
    flex:1,
    backgroundColor:colors.cardBackgroundColor,
    paddingHorizontal:16,
  }
})