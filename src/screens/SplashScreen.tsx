import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {colors} from '../assets/color';
import {CommonActions, useNavigation} from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'FirstOnBoarding'}],
        }),
      );
    }, 3000);
  }, []);
  return (
    <SafeAreaView style={styles.screenStyle}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/splashLogo.png')}
          style={{height: 206, width: 206}}
        />
        <Text style={styles.logoText}>BITEX</Text>
        <View style={styles.loadingBar}></View>
        <Text style={styles.loadingText}>Loading....</Text>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
    backgroundColor: colors.screenBackgroundColor,
  },
  logoContainer: {
    flex: 1,
    gap: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    // fontFamily:'Roboto',
    color: colors.blueTextColor,
    fontWeight: '700',
    fontSize: 50,
  },
  loadingBar: {
    borderWidth: 1,
    padding: 3,
    backgroundColor: 'white',
    borderRadius: 50,
    width: '70%',
  },
  loadingText: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.loadingTextColor,
  },
});
