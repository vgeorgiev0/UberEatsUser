import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import restaurants from '../../../assets/data/restaurants.json';

type Props = {};

const RestaurantDetailsScreen = (props: Props) => {
  return (
    <View>
      <Image source={{ uri: restaurants[0].image }} style={styles.image} />
      <Text style={styles.title}>{restaurants[0].name}</Text>
      <Text style={styles.subtitle}>
        ${restaurants[0].deliveryFee} &#8226; {restaurants[0].minDeliveryTime}-
        {restaurants[0].maxDeliveryTime} minutes
      </Text>
    </View>
  );
};

export default RestaurantDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    aspectRatio: 5 / 3,
  },
  title: {},
  subtitle: {},
});
