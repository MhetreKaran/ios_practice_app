import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LongButton from '../components/atoms/LongButton';
import {colors} from '../assets/color';
import SmallButton from '../components/atoms/SmallButton';
import HeadingText from '../components/atoms/HeadingText';
import DescriptionText from '../components/atoms/DescriptionText';
import { useNavigation } from '@react-navigation/native';

const FirstOnBoarding = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.screenStyle}>
      <View style={styles.container}>
        <SmallButton text={'1 of 3'} />
        <Image
          source={require('../assets/images/image.png')}
          style={{height: 191, width: 238}}
        />
        <HeadingText text={'Welcome to Cryptocurrency'} />
        <DescriptionText
          text={'Reference site about LoreIpsum, giving information origins'}
        />
        <LongButton text={'Get Started'} onPress={()=>navigation.navigate('SecondOnBoarding')} />
      </View>
      <SmallButton text={'Skip'} onPress={() => navigation.reset({
        index: 0,
        routes: [{ name: 'BottomNavigation' }]
      })} containerStyle={{ alignSelf: 'center' }} />
    </SafeAreaView>
  );
};

export default FirstOnBoarding;

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
    marginVertical: 40,
    backgroundColor: colors.cardBackgroundColor,
    marginHorizontal: 20,
    gap: 30,
    paddingVertical: 30,
    paddingHorizontal: 30,
    borderRadius: 20,
    alignItems: 'center',
  },
});
