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
        marginLeft:10,
        padding: 20,
        borderRadius: 12,
      }}>
      <View style={{flexDirection: 'row',justifyContent:'space-between',alignItems:'center'}}>
        <Icon
          iconName={iconConstants.ethernetIcon}
          size={30}
          color={'none'}
          viewBox="0 0 34 36"
          containerStyle={{
            alignSelf:'center',
          }}
        />
          <Text style={{fontSize:14,fontWeight:'500', color:'#A6A3B8'}}>Ethereum</Text>
        <SmallButton
          text={'+2.40%'}
          containerStyle={{}} onPress={()=>{}}        />
      </View>
      <Text style={{color: 'white',fontSize:24,fontWeight:'700'}}>$61,671.50</Text>
      <Text style={{fontSize:12,fontWeight:'500', color:'#A6A3B8'}}>ETH</Text>
    </View>
  );
};

export default PortfolioCard;

const styles = StyleSheet.create({});
