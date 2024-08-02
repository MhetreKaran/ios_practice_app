import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from '../components/atoms/Icon';
import {iconConstants} from '../assets/svgIcon';
import {colors} from '../assets/color';
import {useNavigation} from '@react-navigation/native';
import HeadingText from '../components/atoms/HeadingText';
import LongButton from '../components/atoms/LongButton';

const ScanQRScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.screenStyle}>
      <View style={{flexDirection: 'row', width: '100%', marginVertical: 18}}>
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
          onPress={() => navigation.goBack()}
        />
        <View
          style={{
            width: '70%',
            justifyContent: 'center',
          }}>
          <HeadingText
            text={'Scan QR code'}
            textStyle={{
              color: colors.whiteTextColor,
              fontSize: 22,
              lineHeight: 25.78,
              fontWeight: '700',
            }}
          />
        </View>
      </View>
      <Text
        style={{
          textAlign: 'center',
          paddingHorizontal: 45,
          fontWeight: '400',
          fontSize: 14,
          lineHeight: 16.41,
          color: '#C0C9EA',
        }}>
        Place QR code inside the frame to scan please avoid shake to get results
        quickly
      </Text>
      <TouchableOpacity onPress={()=>navigation.navigate('QRScannerScreen')}>
      <Image
        source={require('../assets/images/QR-Code-Scan.png')}
        style={{
          width: 203,
          height: 198,
          alignSelf: 'center',
          marginVertical: 40,
        }}
      /></TouchableOpacity>
      <Text style={{textAlign:'center',color:'#F8F8FB',fontWeight:'700',fontSize:20,lineHeight:23}}>70%</Text>
      <View style={styles.loadingBar}></View>
      <Text style={{textAlign:'center',color:'#F8F8FB',fontWeight:'400',fontSize:14,lineHeight:16,marginBottom:16}}>Scanning ...</Text>
      <LongButton text={'Place Code'} onPress={()=>{}}  />
    </SafeAreaView>
  );
};

export default ScanQRScreen;

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
    backgroundColor: colors.cardBackgroundColor,
    paddingHorizontal: 16,
  },
  loadingBar: {
    borderWidth: 1,
    padding: 3,
    alignSelf:'center',
    backgroundColor: 'white',
    borderRadius: 50,
    width: '70%',
    marginVertical:20
  },
});
