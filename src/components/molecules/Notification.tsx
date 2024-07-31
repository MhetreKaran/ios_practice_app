import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import NotificationCard from '../atoms/NotificationCard';
import {notificationData} from '../staticData';

const Notification = () => {
  return (
    <FlatList
      data={notificationData}
      renderItem={({item, index}) => {
        return (
          <NotificationCard
            iconName={item.iconName}
            title={item.title}
            description={item.description}
            days={item?.days}
          />
        );
      }}
      ItemSeparatorComponent={<View style={{marginBottom:10}} />}
    />
  );
};

export default Notification;

const styles = StyleSheet.create({});
