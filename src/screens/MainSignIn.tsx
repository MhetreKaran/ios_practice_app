import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors} from '../assets/color';
import LongButton from '../components/atoms/LongButton';
import {CommonActions, useNavigation} from '@react-navigation/native';
import CommonHeader from '../components/atoms/CommonHeader';
import Icon from '../components/atoms/Icon';
import {iconConstants} from '../assets/svgIcon';
import {SafeAreaView} from 'react-native-safe-area-context';
const MainSignIn = () => {
  const navigation = useNavigation();
  const handleSignIn = () => {
    // navigation.dispatch(
    //   CommonActions.reset({
    //     index: 0,
    //     routes: [{name: 'BottomNavigation'}],
    //   }),
    // );
    navigation.navigate('BottomNavigation');
  };
  return (
    <SafeAreaView style={styles.screenStyle}>
        <StatusBar backgroundColor={colors.screenBackgroundColor} />
        <CommonHeader
          goBackFunction={() => {
            navigation.goBack();
          }}
          headingText="Sign In"
          imagesrc={require('../assets/images/signIn.png')}
        />

        <View style={styles.container}>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: colors.cardBackgroundColor,
              borderRadius: 50,
              paddingHorizontal: 25,
              paddingVertical: 16,
              marginBottom: 10,
            }}>
            <Icon
              iconName={iconConstants.mail}
              viewBox="0 0 19 15"
              containerStyle={{
                justifyContent:'center',
                alignItems:'center'
              }}
              fillColor='#FE8270'
              size={25}
              // noStroke={'none'}
            />
            <TextInput
              placeholder="johndoe@mail.com"
              placeholderTextColor={colors.whiteTextColor}
              style={{
                flex: 1,
                paddingLeft: 14,
                fontWeight: '400',
                fontSize: 14,
                color: colors.whiteTextColor,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: colors.cardBackgroundColor,
              borderRadius: 50,
              paddingHorizontal: 25,
              paddingVertical: 16,
              marginBottom: 20,
            }}>
            <Icon
              iconName={iconConstants.lock}
              viewBox="0 0 18 20"
              containerStyle={{
                justifyContent:'center',
                alignItems:'center'
              }}
              size={25}
              fillColor='#FE8270'
              noStroke={false}
              
            />
            <TextInput
              placeholder="*********************"
              placeholderTextColor={colors.whiteTextColor}
              style={{
                flex: 1,
                paddingLeft: 14,
                fontWeight: '400',
                fontSize: 14,
                color: colors.whiteTextColor,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginBottom: 10,
              columnGap: 60,
              alignContent: 'space-between',
            }}>
            <Text
              style={{
                color: colors.whiteTextColor,
                fontWeight: '400',
                fontSize: 16,
              }}>
              Remember Me
            </Text>
            <Text
              onPress={() => navigation.navigate('ForgetPassword')}
              style={{color: '#FDAE67', fontSize: 16, fontWeight: '400'}}>
              Forget Password ?
            </Text>
          </View>
          <LongButton text={'Sign In'} onPress={() => handleSignIn()} />
        </View>
     
      <View
        style={{
          flexDirection: 'row',
          paddingBottom: 20,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            marginRight: 8,
            fontSize: 16,
            fontWeight: '500',
          }}>
          Already have not an account ?{' '}
        </Text>
        <Text
          onPress={() => navigation.navigate('SignInScreen')}
          style={{color: '#FDAE67', fontSize: 16, fontWeight: '500'}}>
          Sign up !
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default MainSignIn;

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
    backgroundColor: colors.screenBackgroundColor,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
    marginTop: 24,
    alignItems: 'center',
  },
  inputStyle: {
    width: '80%',
    color: colors.whiteTextColor,
    padding: 15,
    borderRadius: 20,
    backgroundColor: colors.cardBackgroundColor,
  },
  topHeaderText: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 22,
    marginVertical: 30,
    color: colors.whiteTextColor,
  },
});
