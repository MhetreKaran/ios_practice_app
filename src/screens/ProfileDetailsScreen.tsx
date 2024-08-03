import {Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from '../components/atoms/Icon';
import {iconConstants} from '../assets/svgIcon';
import {colors} from '../assets/color';
import {useNavigation} from '@react-navigation/native';
import HeadingText from '../components/atoms/HeadingText';
import InputField from '../components/atoms/InputField';
import LongButton from '../components/atoms/LongButton';

const ProfileDetailsScreen = () => {
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
            text={'Profile Details'}
            textStyle={{
              color: colors.whiteTextColor,
              fontSize: 22,
              lineHeight: 25.78,
              fontWeight: '700',
            }}
          />
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      >
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollViewContainer}>
      <Image
        source={require('../assets/images/profile.png')}
        style={{
          width: Platform.OS === 'ios'?100:120,
          height: Platform.OS === 'ios'?100:120,
          alignSelf: 'center',
          marginBottom: 10,
        }}
      />
      <Text
        style={{
          textAlign: 'center',
          color: colors.whiteTextColor,
          fontWeight: '700',
          fontSize: 20,
          lineHeight: 23,
        }}>
        Jhon Smitha
      </Text>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 10,
          marginBottom:Platform.OS === 'ios'?20:30,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: '#4DE0D9',
            fontWeight: '400',
            fontSize: 20,
            lineHeight: 23,
            marginRight: 3,
          }}>
          Account Credit:
        </Text>
        <Text
          style={{
            color: '#FE8270',
            fontWeight: '400',
            fontSize: 20,
            lineHeight: 23,
          }}>
          $200.00
        </Text>
      </View>
      <InputField iconName={iconConstants.edit} placeholderText='Wiliam Jonson'/>
      <InputField iconName={iconConstants.edit} placeholderText='+880 000 111 333'/>
      <InputField iconName={iconConstants.edit} placeholderText='youremail@website.com'/>
      <InputField iconName={iconConstants.edit} placeholderText='Iris Watson P.O. Box 283 8562 Fusce Rd.Frederick Nebraska'/>
      <LongButton text={'Save Now'} onPress={()=>{}} TouchableStyle={{width:'95%',alignSelf:'center',marginTop:Platform.OS==='ios'?8:20}}/>
        </ScrollView>
        </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ProfileDetailsScreen;

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
    backgroundColor: colors.cardBackgroundColor,
    paddingHorizontal: 16,
  },
  scrollViewContainer: {
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
});
