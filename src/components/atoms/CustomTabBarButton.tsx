import {StyleSheet, Text, TouchableOpacity, View, Platform} from 'react-native';
import React from 'react';
import Icon from './Icon';
import {iconConstants} from '../../assets/svgIcon';
interface customTabBarButtonProps {
  onPress: Function;
  text: string;
  iconName: string;
  size: number;
  viewBox: string;
}
const CustomTabBarButton = (props: customTabBarButtonProps) => (
  <TouchableOpacity style={styles.customButton} onPress={props.onPress}>
    <Icon
      iconName={props.iconName}
      size={props.size}
      viewBox={props.viewBox}
      noStroke={'none'}
    />
  </TouchableOpacity>
);

export default CustomTabBarButton;

const styles = StyleSheet.create({
  customButton: {
    // justifyContent: 'space-evenly',
    // alignItems: 'center',
    // marginHorizontal: Platform.OS === 'ios' ? 24 : 27,
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {},
});
