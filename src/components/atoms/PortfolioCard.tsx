import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../assets/color';
import Icon from './Icon';
import {iconConstants} from '../../assets/svgIcon';
import SmallButton from './SmallButton';

const PortfolioCard = () => {
  return (
    <View
      style={{
        backgroundColor: colors.cardBackgroundColor,
        height: 129,
        width: 201,
        gap: 5,
        padding: 20,
        borderRadius: 12,
      }}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Icon
          iconName={iconConstants.ethernetIcon}
          size={45}
          color={'none'}
          viewBox="0 0 34 36"
          containerStyle={{
            height: 45,
            width: 45,
          }}
        />

        <SmallButton
          text={'+2.40%'}
          containerStyle={{width: 100, paddingHorizontal: 0}}
        />
      </View>
      <Text style={{color: 'white'}}>$61,671.50</Text>
      <Text style={{color: 'grey'}}>ETH</Text>
    </View>
  );
};

export default PortfolioCard;

const styles = StyleSheet.create({});
