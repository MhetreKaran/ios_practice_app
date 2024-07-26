import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../assets/color';
import SmallButton from '../components/atoms/SmallButton';
import LongButton from '../components/atoms/LongButton';
import DescriptionText from '../components/atoms/DescriptionText';
import HeadingText from '../components/atoms/HeadingText';
import { useNavigation } from '@react-navigation/native';

const SecondOnBoarding = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.screenStyle}>
      <View style={styles.container}>
        <SmallButton text={'2 of 3'} containerStyle={{}} />
        <Image
          source={require('../assets/images/image2.png')}
          style={{height: 214, width: 212}}
        />
        <HeadingText text={'Buy & Sell Bitcoin'} />
        <DescriptionText
          text={'Reference site about Lorem Ipsum, giving information origins'}
        />
        <LongButton text={'Get Started'} onPress={()=>navigation.navigate('WelcomeScreen')} />
      </View>
      <SmallButton text={'Skip'} onPress={()=>navigation.reset({
        index: 0,
        routes: [{ name: 'BottomNavigation' }]
      })} containerStyle={{alignSelf:'center'}}/>
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
    marginVertical: 40,
    backgroundColor: colors.cardBackgroundColor,
    marginHorizontal: 30,
    gap: 30,
    paddingVertical: 30,
    paddingHorizontal: 30,
    borderRadius: 20,
    alignItems: 'center',
  },
});
