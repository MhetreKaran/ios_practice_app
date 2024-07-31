import {Image, Platform, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../assets/color';
import SmallButton from '../components/atoms/SmallButton';
import LongButton from '../components/atoms/LongButton';
import DescriptionText from '../components/atoms/DescriptionText';
import HeadingText from '../components/atoms/HeadingText';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

const SecondOnBoarding = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.screenStyle}>
      <View style={styles.container}>
        <SmallButton
          text={'2 of 3'}
          textStyle={{fontWeight: '400', fontSize: 18}}
          containerStyle={{width: 85, height: 35, backgroundColor: '#FF73AA'}}
        />
        <Image
          source={require('../assets/images/image2.png')}
          style={{height: 214, width: 212}}
        />
        <HeadingText text={'Buy & Sell Bitcoin'} />
        <DescriptionText
          text={'Reference site about Lorem Ipsum, giving information origins'}
        />
        <LongButton
          text={'Get Started'}
          onPress={() => navigation.navigate('WelcomeScreen')}
        />
      </View>
      <SmallButton
        text={'Skip'}
        onPress={() =>
          navigation.goBack()
        }
        textStyle={{fontWeight: '500', fontSize: 20}}
        containerStyle={{
          width: 85,
          height: 35,
          alignSelf: 'center',
          backgroundColor: '#FF73AA',
        }}
      />
    </SafeAreaView>
  );
};

export default SecondOnBoarding;

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
    backgroundColor: colors.screenBackgroundColor,
  },
  buttonContainer: {
    alignSelf: 'flex-end',
    marginHorizontal: 90,
  },
  container: {
    marginVertical: 20,
    backgroundColor: colors.cardBackgroundColor,
    marginHorizontal: 30,
    gap: Platform.OS === 'ios' ? 15 : 40,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
  },
});
