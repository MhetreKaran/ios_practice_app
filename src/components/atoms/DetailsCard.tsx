import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../assets/color';

interface detailsCardProps {
  title: string;
  price: string;
}
const DetailsCard = (props: detailsCardProps) => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontWeight: '400',
          fontSize: 12,
          lineHeight: 14.06,
          color: '#4DE0D9',
        }}>
        {props.title}
      </Text>
      <Text
        style={{
          fontWeight: '700',
          fontSize: 16,
          lineHeight: 18.75,
          color: colors.whiteTextColor,
        }}>
        {props.price}
      </Text>
    </View>
  );
};

export default DetailsCard;

const styles = StyleSheet.create({
  container: {
    width: '45%',
    backgroundColor: colors.mainColor,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 12,
    marginHorizontal:10,
    gap:4
  },
});
