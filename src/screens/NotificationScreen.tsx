import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScreenContainer} from 'react-native-screens';
import CommonHeader from '../components/atoms/CommonHeader';
import HeadingText from '../components/atoms/HeadingText';
import {colors} from '../assets/color';
import {iconConstants} from '../assets/svgIcon';
import Icon from '../components/atoms/Icon';
import {useNavigation} from '@react-navigation/native';
import NotificationCard from '../components/atoms/NotificationCard';
import Notification from '../components/molecules/Notification';

const NotificationScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.ScreenContainer}>
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
            text={'Notification'}
            textStyle={{
              color: colors.whiteTextColor,
              fontSize: 22,
              lineHeight: 25.78,
              fontWeight: '700',
            }}
          />
        </View>
      </View>
      <Notification />
    </SafeAreaView>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: colors.cardBackgroundColor,
    paddingHorizontal: 16,
  },
 
});
