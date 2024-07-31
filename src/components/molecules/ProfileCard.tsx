import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from '../atoms/Icon'
import { iconConstants } from '../../assets/svgIcon'
import { colors } from '../../assets/color'
import { useNavigation } from '@react-navigation/native'

const ProfileCard = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Icon
          iconName={iconConstants.avatar}
          size={60}
          viewBox="0 0 60 60"
          noStroke={true}
        />
        <View
          style={{
            justifyContent: 'center',
            alignContent: 'center',
            marginLeft: 10,
            gap: 6,
          }}>
          <Text
            style={{
              color: colors.whiteTextColor,
              fontWeight: '700',
              fontSize: 18,
              lineHeight: 21,
            }}>
            Jhon Smith
          </Text>
          <Text
            numberOfLines={1}
            style={{
              color: '#4DE0D9',
              fontWeight: '400',
              fontSize: 13,
              lineHeight: 15,
            }}>
            Basic Member
          </Text>
        </View>
      </View>

      
        <View style={{alignSelf: 'center'}}>
        <Icon
          iconName={iconConstants.rightArrow}
          size={15}
          viewBox="0 0 8 13"
          noStroke={true}
          onPress={()=>navigation.navigate('ProfileDetailsScreen')}
        />
        </View>
    </View>
  )
}

export default ProfileCard

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1E2230',
        borderRadius: 12,
        padding: 18,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
})