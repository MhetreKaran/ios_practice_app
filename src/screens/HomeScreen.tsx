
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../assets/color';
import BalanceCard from '../components/molecules/BalanceCard';
import BottomNavigation from '../navigation/BottomNavigation';
import WalletCard from '../components/atoms/WalletCard';
import PortfolioCard from '../components/atoms/PortfolioCard';
import HeadingText from '../components/atoms/HeadingText';
import ListRenderItem from '../components/atoms/ListRenderItem';
import { arrData } from '../components/staticData';
import Icon from '../components/atoms/Icon';
import { iconConstants } from '../assets/svgIcon';

const HomeScreen = ({navigation}) => {
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
      <Icon
          iconName={iconConstants.backArrow}
          size={30}
          color={"white"}
          viewBox="2 4 26 20"
          containerStyle={{
            height: 45,
            width: 45,
            borderRadius: 25,
            backgroundColor: colors.cardBackgroundColor,
          }}
          onPress={navigation.goBack}
        />
      <View style={{flexDirection:"column",alignItems:'flex-start',paddingVertical:30}}>
            <HeadingText text='Hi Alex Smith' textStyle={{fontSize:20,fontWeight:'500',color:colors.blueTextColor,lineHeight:23}}/>
            <HeadingText text='Good Morning' textStyle={{fontSize:24,fontWeight:'700',color:colors.whiteTextColor,lineHeight:28}}/>
          </View>
            <View style={{ marginVertical:20}}>
              <FlatList showsHorizontalScrollIndicator={false} data={arrData} renderItem={({item})=>{
                return(
                  <ListRenderItem item={item}/>
                )
              }} horizontal ItemSeparatorComponent={<View style={{marginRight:15}}/>}/>
            </View>
      <View style={{}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 10,
          }}>
          <Text style={{color: 'white', fontWeight: '500', fontSize: 20}}>
            Portfolio
          </Text>
          <Text style={{color: 'grey', fontWeight: '500', fontSize: 15}}>
            View All+
          </Text>
        </View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={<View style={{margin: 10}}></View>}
          data={[1, 1, 1, 1]}
          renderItem={({item}) => <PortfolioCard />}
          horizontal
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
    backgroundColor: colors.screenBackgroundColor,
    paddingHorizontal: 20,
    paddingTop:25
  },
});
