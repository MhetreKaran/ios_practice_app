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
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();
const BottomNavigation = () => {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
    screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: false,
        headerShown:false,
      }}
      >
      <Tab.Screen
        name="MainScreen"
        options={{
            tabBarButton: (props) => <CustomTabBarButton onPress={() => {navigation.navigate('MainScreen')  } } text={'Home'} iconName={iconConstants.home} size={25} viewBox='0 0 22 24' />,
          }}
        component={HomeScreen}
      />

<Tab.Screen
        name="WalletScreen"
        options={{
            tabBarButton: (props) => <CustomTabBarButton onPress={() => {} } text={'Home'} iconName={iconConstants.wallet} size={25} viewBox='0 0 22 24' />,
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
            tabBarButton: (props) => <CustomTabBarButton onPress={() => {navigation.navigate('Setting') } } text={'Home'} iconName={iconConstants.setting} size={25} viewBox='0 0 22 24' />,
          }}
        component={Setting}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
      tabBar: {
        backgroundColor: '#1E2230',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 75,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        alignItems: 'center',
      },
    
    
});
