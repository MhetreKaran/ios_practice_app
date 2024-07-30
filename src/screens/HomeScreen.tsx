import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../assets/color';
import BalanceCard from '../components/molecules/BalanceCard';
import BottomNavigation from '../navigation/BottomNavigation';
import WalletCard from '../components/atoms/WalletCard';
import PortfolioCard from '../components/atoms/PortfolioCard';
import HeadingText from '../components/atoms/HeadingText';
import ListRenderItem from '../components/atoms/ListRenderItem';
import {arrData, iconData} from '../components/staticData';
import Icon from '../components/atoms/Icon';
import {iconConstants} from '../assets/svgIcon';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import MarketCard from '../components/atoms/MarketCard';

const HomeScreen = () => {
  const navigation = useNavigation();
  const renderItem = ({item}) => (
    <View
      style={{
        borderColor: 'white',
        borderWidth: 1,
        height: 170,
        width: 300,
        borderRadius: 12,
      }}></View>
  );
  return (
    <SafeAreaView style={styles.screenStyle}>
      <ScrollView scrollEnabled={true} showsVerticalScrollIndicator={false}>
        <View
          style={{
            marginHorizontal: 16,
            marginTop:16,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Icon
            iconName={iconConstants.menuLeft}
            size={24}
            containerStyle={{
              // width: 31,
              // height: 21,
            }}
            fillColor={'#363D4E'}
            color="#363D4E"
            viewBox="0 0 30 21"
            onPress={() => navigation.goBack()}
          />
          <Icon
            iconName={iconConstants.notification}
            size={24}
            noStroke={true}
            containerStyle={{
              // width: 20,
              // height: 22,
              // marginHorizontal: 10,
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
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}>
          <HeadingText
            text="Hi Alex Smith"
            textStyle={{
              fontSize: 20,
              fontWeight: '500',
              color: colors.blueTextColor,
              lineHeight: 23,
            }}
          />
          <HeadingText
            text="Good Morning"
            textStyle={{
              fontSize: 24,
              fontWeight: '700',
              color: colors.whiteTextColor,
              lineHeight: 28,
            }}
          />
        </View>
        <View style={{marginVertical: 20, paddingLeft: 10}}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={arrData}
            renderItem={({item}) => {
              return <ListRenderItem item={item} />;
            }}
            horizontal
            ItemSeparatorComponent={<View style={{marginRight: 15}} />}
          />
        </View>
        <View style={{}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: 10,
            }}>
            <Text
              style={{color: 'white', fontWeight: '500', fontSize: 20}}
              onPress={() => navigation.navigate('Portfolio')}>
              Portfolio
            </Text>
            <Text style={{color: 'grey', fontWeight: '500', fontSize: 15}} onPress={()=>navigation.navigate('Portfolio')}>
              View All+
            </Text>
          </View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={[1, 1, 1, 1]}
            renderItem={({item,index}) => <PortfolioCard />}
            horizontal
          />
        </View>
        <View>
          <FlatList
            data={iconData}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <View
                  style={{
                    margin: 20,
                    justifyContent: 'center',
                    alignContent: 'center',
                    gap: 20,
                  }}>
                  <Icon
                    iconName={item.iconName}
                    size={70}
                    containerStyle={{
                      width: 59,
                      height: 61,
                    }}
                    viewBox="0 0 59 61"
                    noStroke={true}
                  />
                  <Text
                    style={{
                      color: 'white',
                      textAlign: 'center',
                      justifyContent: 'center',
                      alignSelf: 'center',
                      marginLeft: 10,
                    }}>
                    {item.title}
                  </Text>
                </View>
              );
            }}
          />
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: 10,
            }}>
            <Text
              style={{color: 'white', fontWeight: '500', fontSize: 20}}
              onPress={() => navigation.navigate('MarketScreen')}>
              Market
            </Text>
            <Text onPress={() => navigation.navigate('MarketScreen')} style={{color: 'grey', fontWeight: '500', fontSize: 15}}>
              View All+
            </Text>
          </View>
          <MarketCard
            iconName={iconConstants.coin}
            coinName={'Achain'}
            initialChar={'ACH'}
            price={'$15,813.20'}
            profitOrLoss={'-3.84%'}
            containerStyle={{marginBottom:16,marginHorizontal:12}}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
    backgroundColor: colors.screenBackgroundColor,
    // paddingVertical:20,
  },
});
