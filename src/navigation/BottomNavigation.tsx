import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import Icon from '../components/atoms/Icon';
import Setting from '../screens/Setting';
import { colors } from '../assets/color';

const Tab = createMaterialBottomTabNavigator();
const BottomNavigation = () => {
    return (
        <Tab.Navigator
            barStyle={{ backgroundColor: colors.mainColor,
                borderTopLeftRadius: 25,
                borderTopRightRadius: 25,
                position: "absolute",
                bottom: 0,}}
            initialRouteName='HomeScreen'
            
            activeColor="black"
            inactiveColor="black">
            <Tab.Screen name="HomeScreen" options={{
                tabBarLabel: 'Home',
            }} component={HomeScreen} />

            <Tab.Screen name="Setting" options={{
                tabBarLabel: 'Setting',
            }} component={Setting} />
        </Tab.Navigator>
    )
}

export default BottomNavigation

const styles = StyleSheet.create({})