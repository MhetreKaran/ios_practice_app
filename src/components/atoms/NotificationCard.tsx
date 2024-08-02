import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../assets/color';
import {iconConstants} from '../../assets/svgIcon';
import Icon from './Icon';

interface notificationCardProp {
  iconName: string;
  title: string;
  description: string;
  days?: string;
}
const NotificationCard = (props: notificationCardProp) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Icon
          iconName={props.iconName}
          size={50}
          viewBox="0 0 50 50"
          noStroke={true}
        />
        <View
          style={{
            paddingHorizontal:10,
            justifyContent: 'center',
            alignContent: 'center',
            gap: 6,
          }}>
          <Text
            style={{
              color: '#EFF0F6',
              fontWeight: '700',
              fontSize: 16,
              lineHeight: 18.75,
            }}>
            {props.title}
          </Text>
          <Text
            numberOfLines={1}
            style={{
              color: '#EFF0F6',
              fontWeight: '400',
              fontSize: 14,
              lineHeight: 17,
            }}>
            {props.description}
          </Text>
        </View>
      </View>

      {typeof props?.days !== 'undefined' && props?.days.length > 0 && (
        <View style={{alignSelf: 'flex-end'}}>
          <Text
            style={{
              color: '#D0D3E5',
              textAlign: 'center',
              fontSize: 14,
              fontWeight: '400',
              lineHeight:16.41
            }}>
            {props?.days}
          </Text>
        </View>
      )}
    </View>
  );
};

export default NotificationCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1E2230',
    borderRadius: 12,
    padding: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
