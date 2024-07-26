import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import {colors} from '../assets/color';
import LongButton from '../components/atoms/LongButton';
import {CommonActions, useNavigation} from '@react-navigation/native';
import CommonHeader from '../components/atoms/CommonHeader';
import Icon from '../components/atoms/Icon';
import {iconConstants} from '../assets/svgIcon';
const MainSignIn = () => {
  const navigation = useNavigation();
  const handleSignIn = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'BottomNavigation'}],
      }),
    );
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
        descText="Choose a secure password that will be easy for you to remember."
      />
      <View style={styles.container}>
        <View style={{width: '95%', gap: 10,marginVertical:30, alignItems: 'center'}}>
          <TextInput style={styles.inputStyle} />
            <Icon
              iconName={iconConstants.mail}
              size={25}
              color={'none'}
              viewBox="0 0 19 15"
              containerStyle={{
                height: 45,
                width: 45,
                position:'absolute',
                left:50,
                top:10,
              }}
              onPress={()=>{}}
            />
          <TextInput style={styles.inputStyle} />
            <Icon
              iconName={iconConstants.lock}
              size={25}
              color={'none'}
              viewBox="0 0 18 20"
              containerStyle={{
                height: 45,
                width: 45,
                position:'absolute',
                top:70,
                left:50,
              }}
              onPress={()=>{}}
            />
        </View>
        <View style={{flexDirection: 'row',marginBottom:10,columnGap:80, alignContent: 'space-between'}}>
          <Text style={{color: 'white'}}>Remember Me</Text>
          <Text
            onPress={() => navigation.navigate('ForgetPassword')}
            style={{color: 'orange'}}>
            Forget Password
          </Text>
        </View>
        <LongButton text={'Sign In'} onPress={() => handleSignIn()} />
        <View style={{flexDirection: 'row',position:'absolute',bottom:40, justifyContent: 'flex-end'}}>
          <Text style={{color: 'white'}}>Already have not an account ? </Text>
          <Text
            onPress={() => navigation.navigate('SignInScreen')}
            style={{color: 'orange'}}>
            Sign up!
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MainSignIn;

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
    backgroundColor: colors.screenBackgroundColor,
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  inputStyle: {
    width: '80%',
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
