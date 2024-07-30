import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../../assets/color';
import SmallButton from './SmallButton';

const PortfolioHeaderCard = () => {
  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity
        style={{
          backgroundColor: '#C1B2FF',
          width: 96,
          paddingVertical: 6,
          borderRadius: 50,
          marginBottom: 8,
        }}>
        <Text style={styles.textStyle}>{'BTC/USD'}</Text>
      </TouchableOpacity>
      <Text style={styles.priceText}>$ 5,781.00</Text>
      <View style={styles.cardBottomContainer}>
        <Text
          style={{
            fontSize: 12,
            fontWeight: '400',
            color: colors.whiteTextColor,
            alignSelf: 'center',
          }}>
          + $248.23 (+0.35)
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: '#FF73AA',
            width: 96,
            paddingVertical: 10,
            borderRadius: 50,
            marginBottom: 8,
          }}>
          <Text style={styles.textStyle}>{'Add Balance'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PortfolioHeaderCard;

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    backgroundColor: colors.cardBackgroundColor,
    padding: 16,
    marginBottom: 10,
    borderRadius: 14,
  },
  priceText: {
    color: colors.whiteTextColor,
    fontWeight: '700',
    fontSize: 30,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '400',
    color: colors.whiteTextColor,
  },
  cardBottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
});
