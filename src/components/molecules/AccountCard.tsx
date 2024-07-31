import {StyleSheet, Switch, Text, View} from 'react-native';
import React, { useState } from 'react';
import {colors} from '../../assets/color';
import Icon from '../atoms/Icon';
import {iconConstants} from '../../assets/svgIcon';
import { useNavigation } from '@react-navigation/native';

const AccountCard = () => {
    const navigation = useNavigation();
    const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [text, setText] = useState(false);
  const textToggleSwitch = () => setText(previousState => !previousState);
  const [phone, setPhone] = useState(false);
  const phoneToggleSwitch = () => setPhone(previousState => !previousState);
  return (
    <View style={styles.container}>
      {/* top container */}
      <View style={styles.topContainer}>
        <View
          style={{
            borderTopRightRadius: 12,
            borderTopLeftRadius: 12,
            paddingHorizontal: 20,
            paddingVertical: 10,
            backgroundColor: '#34D9D1',
          }}>
          <Text
            style={{
              color: colors.whiteTextColor,
              fontWeight: '700',
              fontSize: 18,
              lineHeight: 21,
              textAlign: 'left',
            }}>
            Account
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 18,
            paddingVertical: 14,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Icon
              iconName={iconConstants.lock}
              size={20}
              containerStyle={{marginRight: 10}}
              fillColor="#EFF0F6"
            />
            <Text
              style={{
                color: '#EFF0F6',
                fontWeight: '500',
                fontSize: 16,
                lineHeight: 18.75,
              }}>
              Change Password
            </Text>
          </View>
          <Icon
            iconName={iconConstants.rightArrow}
            size={15}
            viewBox="0 0 8 13"
            noStroke={true}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 18,
            paddingBottom: 14,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Icon
              iconName={iconConstants.alarm}
              size={20}
              containerStyle={{marginRight: 10}}
              noStroke="none"
            />
            <Text
              style={{
                color: '#EFF0F6',
                fontWeight: '500',
                fontSize: 16,
                lineHeight: 18.75,
              }}>
              Order Management
            </Text>
          </View>
          <Icon
            iconName={iconConstants.rightArrow}
            size={15}
            viewBox="0 0 8 13"
            noStroke={true}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 18,
            paddingBottom: 14,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Icon
              iconName={iconConstants.setting1}
              size={20}
              containerStyle={{marginRight: 10}}
              noStroke="none"
            />
            <Text
              style={{
                color: '#EFF0F6',
                fontWeight: '500',
                fontSize: 16,
                lineHeight: 18.75,
              }}>
              Document Management
            </Text>
          </View>
          <Icon
            iconName={iconConstants.rightArrow}
            size={15}
            viewBox="0 0 8 13"
            noStroke={true}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 18,
            paddingBottom: 14,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Icon
              iconName={iconConstants.payment}
              size={20}
              containerStyle={{marginRight: 10}}
              noStroke="none"
            />
            <Text
              style={{
                color: '#EFF0F6',
                fontWeight: '500',
                fontSize: 16,
                lineHeight: 18.75,
              }}>
              Payment
            </Text>
          </View>
          <Icon
            iconName={iconConstants.rightArrow}
            size={15}
            viewBox="0 0 8 13"
            noStroke={true}
            onPress={()=>navigation.navigate('ScanQRScreen')}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            // justifyContent: 'space-between',
            paddingHorizontal: 18,
            paddingBottom: 14,
          }}>
          <Icon
            iconName={iconConstants.signOut}
            size={20}
            containerStyle={{marginRight: 10}}
            noStroke="none"
          />
          <Text
            style={{
              color: '#EFF0F6',
              fontWeight: '500',
              fontSize: 16,
              lineHeight: 18.75,
            }}>
            Sign Out
          </Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: '#208DFE',
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}>
        <Text
          style={{
            color: '#4DE0D9',
            fontWeight: '700',
            fontSize: 18,
            lineHeight: 21,
          }}>
          More Options
        </Text>
      </View>
      {/* bottom container */}
      <View style={styles.BottomContainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 18,
            paddingVertical: 10,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Icon
              iconName={iconConstants.newsLetter}
              size={20}
              containerStyle={{marginRight: 10}}
              noStroke="none"
            />
            <Text
              style={{
                color: '#EFF0F6',
                fontWeight: '500',
                fontSize: 16,
                lineHeight: 18.75,
              }}>
              Newsletter
            </Text>
          </View>
          <Switch  
        trackColor={{false: '#B4C2CD', true: '#FFFFFF'}}
        thumbColor={isEnabled ? '#5EE5DE' : '#B4C2CD'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 18,
            paddingVertical: 10,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Icon
              iconName={iconConstants.mail}
              size={20}
              containerStyle={{marginRight: 10}}
              fillColor='#EFF0F6'
              
            />
            <Text
              style={{
                color: '#EFF0F6',
                fontWeight: '500',
                fontSize: 16,
                lineHeight: 18.75,
              }}>
              Text Message
            </Text>
          </View>
          <Switch  
        trackColor={{false: '#B4C2CD', true: '#FFFFFF'}}
        thumbColor={text ? '#5EE5DE' : '#B4C2CD'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={textToggleSwitch}
        value={text}
      />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 18,
            paddingVertical: 10,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Icon
              iconName={iconConstants.telephone}
              size={20}
              containerStyle={{marginRight: 10}}
              noStroke="none"
            />
            <Text
              style={{
                color: '#EFF0F6',
                fontWeight: '500',
                fontSize: 16,
                lineHeight: 18.75,
              }}>
              Phone Call
            </Text>
          </View>
          <Switch  
        trackColor={{false: '#B4C2CD', true: '#FFFFFF'}}
        thumbColor={phone ? '#5EE5DE' : '#B4C2CD'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={phoneToggleSwitch}
        value={phone}
      />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 18,
            paddingVertical: 10,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Icon
              iconName={iconConstants.currency}
              size={20}
              containerStyle={{marginRight: 10}}
              noStroke="none"
            />
            <Text
              style={{
                color: '#EFF0F6',
                fontWeight: '500',
                fontSize: 16,
                lineHeight: 18.75,
              }}>
              Currency
            </Text>
          </View>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <Text style={{color: '#B4C2CD',
                fontWeight: '500',
                fontSize: 14,
                marginRight:6,
                lineHeight: 16.41,}}>$USD</Text>
          <Icon
            iconName={iconConstants.rightArrow}
            size={15}
            viewBox="0 0 8 13"
            noStroke={true}
          />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 18,
            paddingVertical: 10,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Icon
              iconName={iconConstants.language}
              size={20}
              containerStyle={{marginRight: 10}}
              noStroke="none"
            />
            <Text
              style={{
                color: '#EFF0F6',
                fontWeight: '500',
                fontSize: 16,
                lineHeight: 18.75,
              }}>
              Language
            </Text>
          </View>
          <View style={{flexDirection:'row',alignItems:'center'}}>
          <Text style={{color: '#B4C2CD',
                fontWeight: '500',
                fontSize: 14,
                marginRight:6,
                lineHeight: 16.41,}}>English</Text>
                <Icon
            iconName={iconConstants.rightArrow}
            size={15}
            viewBox="0 0 8 13"
            noStroke={true}
          />
          </View>
          
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 18,
            paddingVertical: 10,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Icon
              iconName={iconConstants.linkedAccount}
              size={20}
              containerStyle={{marginRight: 10}}
              noStroke="none"
            />
            <Text
              style={{
                color: '#EFF0F6',
                fontWeight: '500',
                fontSize: 16,
                lineHeight: 18.75,
              }}>
              Linked Accounts
            </Text>
          </View>
          <View style={{flexDirection:'row',alignItems:'center'}}>
          <Text style={{color: '#B4C2CD',
                fontWeight: '500',
                fontSize: 14,
                marginRight:6,
                lineHeight: 16.41,}}>Facebook, go...</Text>
          <Icon
            iconName={iconConstants.rightArrow}
            size={15}
            viewBox="0 0 8 13"
            noStroke={true}
          />
          </View>
        </View>
      </View>
    </View>
  );
};

export default AccountCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    marginVertical: 16,
    backgroundColor: colors.mainColor,
  },
  topContainer: {
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    backgroundColor: colors.mainColor,
  },
  BottomContainer: {},
});
