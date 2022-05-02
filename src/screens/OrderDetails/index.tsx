import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import orders from '../../../assets/data/orders.json';
import restaurants from '../../../assets/data/restaurants.json';
import DishListItem from '../../components/DishListItem';
const order = orders[0];

const OrderDetails = () => {
  const HeaderComponent = () => {
    return (
      <View style={styles.container}>
        <Image source={{ uri: order.Restaurant.image }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{order.Restaurant.name}</Text>
          <Text style={styles.subtitle}>{order.status} &#8226; 2 days ago</Text>
          <Text style={styles.menuTitle}>Your orders</Text>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={restaurants[0].dishes}
      renderItem={({ item }) => <DishListItem dish={item} />}
      ListHeaderComponent={HeaderComponent}
    />
  );
};

export default OrderDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconContainer: {
    position: 'absolute',
    top: 40,
    left: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 5 / 3,
  },
  textContainer: { margin: 10 },
  title: { fontSize: 30, fontWeight: '600', marginVertical: 10 },
  subtitle: { color: 'grey', fontSize: 15 },
  menuTitle: {
    marginTop: 30,
    fontSize: 18,
    letterSpacing: 0.7,
    marginHorizontal: 10,
  },
});
