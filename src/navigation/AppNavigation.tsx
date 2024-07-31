import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from '../screens/SplashScreen';
import FirstOnBoarding from '../screens/FirstOnBoarding';
import SecondOnBoarding from '../screens/SecondOnBoarding';
import LoginScreen from '../screens/LoginScreen';
import SignInScreen from '../screens/SignInScreen';
import MainSignIn from '../screens/MainSignIn';
import OtpVerification from '../screens/OtpVerification';
import CreatePassword from '../screens/CreatePassword';
import ForgetPassword from '../screens/ForgetPassword';
import SelectLocation from '../screens/SelectLocation';
import WelcomeScreen from '../screens/WelcomeScreen';
import HomeScreen from '../screens/HomeScreen';
import { colors } from '../assets/color';
import BottomNavigation from './BottomNavigation';
import Portfolio from '../screens/Portfolio';
import MarketScreen from '../screens/MarketScreen';
import NotificationScreen from '../screens/NotificationScreen';
import Setting from '../screens/Setting';
import ScanQRScreen from '../screens/ScanQRScreen';
import ProfileDetailsScreen from '../screens/ProfileDetailsScreen';
import CoinScreen from '../screens/CoinScreen';

const AppNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false ,animation:'ios',statusBarColor:colors.screenBackgroundColor}}>
        <Stack.Screen name='SplashScreen' component={SplashScreen} />
        <Stack.Screen name='FirstOnBoarding' component={FirstOnBoarding} />
        <Stack.Screen name='SecondOnBoarding' component={SecondOnBoarding} />
        <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} />
        <Stack.Screen name='MainSignIn' component={MainSignIn} />
        <Stack.Screen name='SignInScreen' component={SignInScreen} />
        <Stack.Screen name='OtpVerification' component={OtpVerification} />
        <Stack.Screen name='CreatePassword' component={CreatePassword} />
        <Stack.Screen name='ForgetPassword' component={ForgetPassword} />
        <Stack.Screen name='SelectLocation' component={SelectLocation} />
        <Stack.Screen name='HomeScreen' component={HomeScreen} />
        <Stack.Screen name='BottomNavigation' component={BottomNavigation} />
        <Stack.Screen name='Portfolio' component={Portfolio} />
        <Stack.Screen name='MarketScreen' component={MarketScreen} />
        <Stack.Screen name='NotificationScreen' component={NotificationScreen} />
        <Stack.Screen name='Setting' component={Setting} />
        <Stack.Screen name='ScanQRScreen' component={ScanQRScreen} />
        <Stack.Screen name='ProfileDetailsScreen' component={ProfileDetailsScreen} />
        <Stack.Screen name='CoinScreen' component={CoinScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation