import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WalletCard from '../atoms/WalletCard';
import {colors} from '../../assets/color';

const BalanceCard = () => {
  const data = [1, 2, 3];
  return (
    <View
      style={{
        borderColor: 'red',
        borderWidth: 1,
        height: '50%',
        width: '90%',
      }}></View>
  );
};

export default BalanceCard;

const styles = StyleSheet.create({});
