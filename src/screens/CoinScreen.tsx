import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '../assets/color';
import Icon from '../components/atoms/Icon';
import {iconConstants} from '../assets/svgIcon';
import HeadingText from '../components/atoms/HeadingText';
import {useNavigation} from '@react-navigation/native';
import CoinCard from '../components/atoms/CoinCard';
import LongButton from '../components/atoms/LongButton';
import DetailsCard from '../components/atoms/DetailsCard';
import {coinDetails, periodData} from '../components/staticData';
import CandleStickCharts from '../components/molecules/CandleStickCharts';

const CoinScreen = () => {
  const navigation = useNavigation();
  const [periodActive,setPeriodActive]=useState('1D');
  return (
    <SafeAreaView style={styles.screenStyle}>
      <ScrollView scrollEnabled={true} showsVerticalScrollIndicator={false}>
        <View
          style={{
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
              backgroundColor: colors.darkBGColor,
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
              text={'Bitcoin (BTC)'}
              textStyle={{
                color: colors.whiteTextColor,
                fontSize: 22,
                lineHeight: 25.78,
                fontWeight: '700',
              }}
            />
          </View>
          <Icon
            iconName={iconConstants.heart}
            size={20}
            color={'white'}
            viewBox="0 0 22 23"
            containerStyle={{
              padding: 10,
              borderRadius: 50,
              backgroundColor: colors.darkBGColor,
            }}
            onPress={navigation.goBack}
          />
        </View>
        <CoinCard />
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 18,
            justifyContent: 'space-between',
          }}>
          <LongButton
            text={'Global Average'}
            onPress={() => {}}
            TouchableStyle={{width: '40%', padding: 12}}
            textStyle={{fontSize: 12}}
          />
          <View style={{flexDirection: 'row', gap: 20}}>
            <Icon
              iconName={iconConstants.candle}
              size={36}
              viewBox="0 0 36 36"
              noStroke={true}
            />
            <Icon
              iconName={iconConstants.maximum}
              size={36}
              viewBox="0 0 36 36"
              noStroke={true}
            />
          </View>
        </View>
        {/* <Image
          source={require('../assets/images/candlesticks.png')}
          style={{
            width: 325,
            height: 264,
            alignSelf: 'center',
            marginBottom: 20,
          }}
        /> */}
        <CandleStickCharts />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 16,
          }}>
          {periodData.map((item,index) => {
            return (
              <TouchableOpacity key={index} onPress={()=>{setPeriodActive(item.time)}} style={{backgroundColor:periodActive===item.time?'#34D9D1':colors.cardBackgroundColor,borderRadius:50,paddingHorizontal:10,paddingVertical:8}} >
                <Text
                  style={{
                    color: colors.whiteTextColor,
                    fontSize: 12,
                    fontWeight: '700',
                    lineHeight: 14.06,
                  }}>
                  {item?.time}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <ScrollView horizontal={true} style={{ width: "100%",paddingHorizontal:20 }}>
        <FlatList
          data={coinDetails}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => {
            return <DetailsCard title={item.title} price={item.price} />;
          }}
          ItemSeparatorComponent={<View style={{marginVertical: 10}}></View>}
          nestedScrollEnabled={true}
        />
        </ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 20,
            paddingHorizontal: 10,
          }}>
          <LongButton
            text={'Sell'}
            onPress={() => {}}
            textStyle={{fontWeight: '500', fontSize: 16, lineHeight: 18.75}}
            TouchableStyle={{width: '45%', backgroundColor: '#9B87FF'}}
          />
          <LongButton
            text={'Buy'}
            onPress={() => {}}
            textStyle={{fontWeight: '500', fontSize: 16, lineHeight: 18.75}}
            TouchableStyle={{width: '45%'}}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CoinScreen;

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
    backgroundColor: colors.cardBackgroundColor,
    paddingHorizontal: 16,
  },
});
