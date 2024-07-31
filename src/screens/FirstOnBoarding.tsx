import {Dimensions, Image,  StyleSheet,Platform, Text, View} from 'react-native';
import React from 'react';
import LongButton from '../components/atoms/LongButton';
import {colors} from '../assets/color';
import SmallButton from '../components/atoms/SmallButton';
import HeadingText from '../components/atoms/HeadingText';
import DescriptionText from '../components/atoms/DescriptionText';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const height = Dimensions.get('screen').height;
const FirstOnBoarding = () => {
    const navigation = useNavigation();
    console.log('height',height);
    
  return (
    <SafeAreaView style={styles.screenStyle}>
      <View style={styles.container}>
        <SmallButton text={'1 of 3'} textStyle={{fontWeight:'400',fontSize:18}} containerStyle={{width:85,height:35, backgroundColor:'#FF73AA'}}/>
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
      <SmallButton text={'Skip'} onPress={() => navigation.goBack()} 
      textStyle={{fontWeight:'500',fontSize:20}}
      containerStyle={{width:85, height:35, alignSelf: 'center', backgroundColor:'#FF73AA'}} />
    </SafeAreaView>
  );
};

export default FirstOnBoarding;

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
    backgroundColor: colors.cardBackgroundColor,
  },
  buttonContainer: {
    alignSelf: 'flex-end',
    marginHorizontal: 90,
  },
  container: {
    marginVertical: 40,
    backgroundColor: colors.darkBGColor,
    marginHorizontal: 20,
    gap: Platform.OS === 'ios'? 15:40,
    paddingVertical: 30,
    paddingHorizontal: 30,
    borderRadius: 20,
    alignItems: 'center',
  },
});
