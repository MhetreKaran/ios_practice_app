import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors} from '../assets/color';
import CommonHeader from '../components/atoms/CommonHeader';
import {useNavigation} from '@react-navigation/native';
import InputText from '../components/atoms/InputText';
import Icon from '../components/atoms/Icon';
import {iconConstants} from '../assets/svgIcon';
import LongButton from '../components/atoms/LongButton';
import {SafeAreaView} from 'react-native-safe-area-context';

const ForgetPassword = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.screenStyle}>
      <CommonHeader
        headingText="ForgetPassword"
        imagesrc={require('../assets/images/Illustration5.png')}
        descText="We will send a mail to the email address you registered to regain your password"
        goBackFunction={() => navigation.goBack()}
      />
      {/* <View style={{position:'relative'}}>
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
                top:30,
                left:35
              }}
              onPress={()=>{}}
            />
            </View> */}
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: colors.cardBackgroundColor,
          borderRadius: 50,
          paddingHorizontal: 25,
          paddingVertical: 16,
          marginVertical: 20,
        }}>
        <Icon
          iconName={iconConstants.mail}
          viewBox="0 0 19 15"
          size={25}
          containerStyle={{justifyContent: 'center', alignItems: 'center'}}
          fillColor="#8A8D9F"
          noStroke={false}
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
      <Text
        style={{
          color: '#FE8270',
          fontWeight: '400',
          fontSize: 16,
          textAlign: 'center',
        }}>
        Email sent to ex*****@gmail.com
      </Text>
      <TouchableOpacity style={styles.btnContainer}>
        <Text style={styles.textStyle}>Send</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
    backgroundColor: colors.screenBackgroundColor,
    paddingHorizontal: 20,
  },
  imageStyle: {height: 206, width: 206},
  inputStyle: {
    position: 'relative',
    alignSelf: 'center',
    width: '90%',
    marginVertical: 20,
    borderRadius: 20,
    backgroundColor: colors.cardBackgroundColor,
  },
  btnContainer: {
    width: '100%',
    backgroundColor: colors.blueLongButtonColor,
    borderRadius: 50,
    padding: 16,
    marginTop: 16,
  },
  textStyle: {
    textAlign: 'center',
    color: colors.whiteTextColor,
    fontWeight: '700',
    fontSize: 18,
    width: '100%',
  },
});
