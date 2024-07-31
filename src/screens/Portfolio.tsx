import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import CommonHeader from '../components/atoms/CommonHeader';
import {colors} from '../assets/color';
import PortfolioHeaderCard from '../components/atoms/PortfolioHeaderCard';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {portfolioData} from '../components/staticData';
import MarketCard from '../components/atoms/MarketCard';
import Icon from '../components/atoms/Icon';
import {iconConstants} from '../assets/svgIcon';
import HeadingText from '../components/atoms/HeadingText';

const Portfolio = () => {
  const navigation = useNavigation();
  const handlleBack = () => {
    console.log('i am here');

    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.screenStyle}>
      {/* <CommonHeader imagesrc={''} headingText={'Portfolio'} goBackFunction={navigation.goBack}/> */}
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
            width: '75%',
            height: '100%',
            justifyContent: 'center',
          }}>
          <HeadingText
            text={'Portfolio'}
            textStyle={{
              color: colors.whiteTextColor,
              fontSize: 22,
              lineHeight: 25.78,
              fontWeight: '700',
            }}
          />
        </View>
        <Icon
          iconName={iconConstants.threeDot}
          size={20}
          color={'white'}
          viewBox="0 0 4 18"
          containerStyle={{
            padding:10,
            borderRadius: 50,
            backgroundColor: colors.cardBackgroundColor,
          }}
          onPress={navigation.goBack}
        />
      </View>
      <PortfolioHeaderCard />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 12,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#34D9D1',
            width: 153,
            padding: 10,
            borderRadius: 50,
          }}>
          <Text style={styles.buttonText}>Highest holdings</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#9B87FF',
            width: 153,
            padding: 10,
            borderRadius: 50,
          }}>
          <Text style={styles.buttonText}>24 Hours</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={portfolioData}
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
        ItemSeparatorComponent={<View style={{marginVertical: 5}} />}
      />
    </SafeAreaView>
  );
};

export default Portfolio;

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
    backgroundColor: colors.screenBackgroundColor,
    paddingHorizontal: 16,
  },
  buttonText: {
    textAlign: 'center',
    color: colors.whiteTextColor,
    fontWeight: '700',
    fontSize: 15,
  },
});
