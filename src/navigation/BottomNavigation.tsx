import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import Icon from '../components/atoms/Icon';
import Setting from '../screens/Setting';
import {colors} from '../assets/color';
import CustomTabBarButton from '../components/atoms/CustomTabBarButton';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { iconConstants } from '../assets/svgIcon';

const Tab = createBottomTabNavigator();
const BottomNavigation = () => {
  return (
    <Tab.Navigator
    screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: false,
        headerShown:false,
      }}
      >
      <Tab.Screen
        name="HomeScreen"
        options={{
            tabBarButton: (props) => <CustomTabBarButton onPress={() => { } } text={'Home'} iconName={iconConstants.home} size={25} viewBox='0 0 22 24' />,
          }}
        component={HomeScreen}
      />

<Tab.Screen
        name="WalletScreen"
        options={{
            tabBarButton: (props) => <CustomTabBarButton onPress={() => { } } text={'Home'} iconName={iconConstants.wallet} size={25} viewBox='0 0 22 24' />,
          }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Main"
        options={{
            tabBarButton: (props) => <CustomTabBarButton onPress={() => { } } text={'Home'} iconName={iconConstants.bottomPlus} size={50} viewBox='0 0 50 55' />,
          }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="ChatScreen"
        options={{
            tabBarButton: (props) => <CustomTabBarButton onPress={() => { } } text={'Home'} iconName={iconConstants.chat} size={25} viewBox='0 0 22 24' />,
          }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="SettingScreen"
        options={{
            tabBarButton: (props) => <CustomTabBarButton onPress={() => { } } text={'Home'} iconName={iconConstants.setting} size={25} viewBox='0 0 22 24' />,
          }}
        component={HomeScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
      tabBar: {
        height:'10%',
        backgroundColor: '#1E2230',
        // borderTopLeftRadius:12,
        // borderTopRightRadius:12,
      },
    
    
});
