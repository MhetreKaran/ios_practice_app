import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScreenContainer } from 'react-native-screens'
import CommonHeader from '../components/atoms/CommonHeader'
import HeadingText from '../components/atoms/HeadingText'
import { colors } from '../assets/color'
import { iconConstants } from '../assets/svgIcon'
import Icon from '../components/atoms/Icon'
import { useNavigation } from '@react-navigation/native'

const NotificationScreen = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.ScreenContainer}>
       <View
        style={{ position: "relative", flexDirection: "row", width: "100%", height: 60, alignItems: "center", marginBottom: 25 }}
      >
        <Icon
          iconName={iconConstants.backArrow}
          size={30}
          color={"white"}
          viewBox="2 4 26 20"
          containerStyle={{
            height: 45,
            width: 45,
            borderRadius: 25,
            backgroundColor: colors.darkBGColor,
          }}
          onPress={()=>navigation.goBack()}
        />
        <View
          style={{
            width: "70%"
            , height: "100%",
            justifyContent: "center"
          }}
        >
          <HeadingText
            text={'Notification'}
            textStyle={{
              color: colors.whiteTextColor,
              fontSize: 22,
              lineHeight: 25.78,
              fontWeight: "700",
            }}
          />
        </View>
      </View>
      <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Icon
          iconName={iconConstants.coin}
          size={60}
          containerStyle={{
            width: 50,
            height: 50,
            marginVertical: 10,
          }}
          viewBox="0 0 50 50"
          noStroke={true}
        />
        <View
          style={{
            justifyContent: 'center',
            alignContent: 'center',
            marginLeft: 20,
            marginTop:12
          }}>
          <Text
            style={{
              color: '#4DE0D9',
              fontWeight: '500',
              fontSize: 18,
              lineHeight: 22,
            }}>
            ETH received
          </Text>
          <Text
            style={{
              color: colors.whiteTextColor,
              fontWeight: '500',
              fontSize: 14,
              lineHeight: 17,
            }}>
           
          </Text>
        </View>
      </View>
      <View style={{justifyContent: 'center', alignContent: 'center',marginTop:12}}>
        <Text
          style={{
            color: colors.whiteTextColor,
            fontWeight: '500',
            fontSize: 18,
            lineHeight: 22,
          }}>
         
        </Text>
        <Text
          style={{
            color: '#FF73AA',
            textAlign: 'right',
            fontSize: 14,
            fontWeight: '500',
          }}>
          
        </Text>
      </View>
    </View>
    </SafeAreaView>
  )
}

export default NotificationScreen

const styles = StyleSheet.create({
    ScreenContainer:{
        flex: 1,
        backgroundColor: colors.cardBackgroundColor,
        paddingHorizontal:16
    },
    container: {
        backgroundColor: '#1E2230',
        borderRadius: 12,
        paddingHorizontal: 20,
        paddingBottom: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
})