import {FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import CommonHeader from '../components/atoms/CommonHeader';
import {colors} from '../assets/color';
import {useNavigation} from '@react-navigation/native';
import MarketCard from '../components/atoms/MarketCard';
import {marketData} from '../components/staticData';
import HeadingText from '../components/atoms/HeadingText';
import Icon from '../components/atoms/Icon';
import {iconConstants} from '../assets/svgIcon';

const MarketScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.screenStyle}>
      <View
        style={{
          // position: 'relative',
          flexDirection: 'row',
          width: '100%',
          height: 60,
          alignItems: 'center',
          marginBottom: 10,
        }}>
        <Icon
          iconName={iconConstants.backArrow}
          size={30}
          color={'white'}
          viewBox="2 4 26 20"
          containerStyle={{
            height: 45,
            width: 45,
            borderRadius: 25,
            backgroundColor: colors.cardBackgroundColor,
          }}
          onPress={navigation.goBack}
        />
        <View
          style={{
            width: '70%',
            height: '100%',
            justifyContent: 'center',
          }}>
          <HeadingText
            text={'Market Trends'}
            textStyle={{
              color: colors.whiteTextColor,
              fontSize: 22,
              lineHeight: 25.78,
              fontWeight: '700',
            }}
          />
        </View>
        <Icon
            iconName={iconConstants.searchIcon}
            size={24}
            fillColor={'#4DE0D9'}
            noStroke={true}
            containerStyle={{
              padding:10,
              borderRadius:12,
              backgroundColor: '#191C26',
            }}
            viewBox="0 0 20 22"
            onPress={navigation.goBack}
          />
      </View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor:colors.cardBackgroundColor,
          borderRadius:50,
          paddingHorizontal:16,
          paddingVertical:20,
          marginBottom:20
          
        }}>
        <Icon iconName={iconConstants.searchIcon}  size={25} noStroke='none' />
        <TextInput
        placeholder='Search Currency ...'
        placeholderTextColor={colors.whiteTextColor}
          style={{
            flex: 1,
            paddingLeft:10,
            color:colors.whiteTextColor
          }}
        />
      </View>
      <FlatList
        data={marketData}
        renderItem={({item, index}) => {
          return (
            <MarketCard
              iconName={item.iconName}
              coinName={item.coinName}
              initialChar={item.initialCharacter}
              price={item.price}
              profitOrLoss={item.profitOrLoss}
              onPress={()=>navigation.navigate('CoinScreen')}
            />
          );
        }}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={<View style={{marginVertical: 8}} />}
      />
    </SafeAreaView>
  );
};

export default MarketScreen;

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
    backgroundColor: colors.screenBackgroundColor,
    paddingHorizontal: 16,
  },
});
