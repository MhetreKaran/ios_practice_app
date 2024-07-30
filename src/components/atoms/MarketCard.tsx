import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import React from 'react';
import Icon from './Icon';
import {colors} from '../../assets/color';
import {iconConstants} from '../../assets/svgIcon';

interface MarketCardProp {
  iconName: string;
  coinName: string;
  initialChar: string;
  price: string;
  profitOrLoss: string;
  containerStyle?:ViewStyle;
}
const MarketCard = (props: MarketCardProp) => {
  return (
    <View style={[styles.container,props.containerStyle]}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Icon
          iconName={props.iconName}
          size={60}
          containerStyle={{
            width: 50,
            height: 50,
            marginVertical: 10,
          }}
          viewBox="0 0 50 50"
          noStroke={true}
        />
        <View
          style={{
            justifyContent: 'center',
            alignContent: 'center',
            marginLeft: 20,
            marginTop:12
          }}>
          <Text
            style={{
              color: '#4DE0D9',
              fontWeight: '500',
              fontSize: 18,
              lineHeight: 22,
            }}>
            {props.coinName}
          </Text>
          <Text
            style={{
              color: colors.whiteTextColor,
              fontWeight: '500',
              fontSize: 14,
              lineHeight: 17,
            }}>
            {props.initialChar}
          </Text>
        </View>
      </View>
      <View style={{justifyContent: 'center', alignContent: 'center',marginTop:12}}>
        <Text
          style={{
            color: colors.whiteTextColor,
            fontWeight: '500',
            fontSize: 18,
            lineHeight: 22,
          }}>
          {props.price}
        </Text>
        <Text
          style={{
            color: '#FF73AA',
            textAlign: 'right',
            fontSize: 14,
            fontWeight: '500',
          }}>
          {props.profitOrLoss}
        </Text>
      </View>
    </View>
  );
};

export default MarketCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.cardBackgroundColor,
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
