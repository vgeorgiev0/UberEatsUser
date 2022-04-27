import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import restaurants from '../../../assets/data/restaurants.json';
import DishListItem from '../../components/DishListItem';

const RestaurantDetailsScreen = () => {
  const HeaderComponent = () => {
    return (
      <View>
        <Image source={{ uri: restaurants[0].image }} style={styles.image} />
        {/* @ts-ignore */}
        <Ionicons
          name="arrow-back-circle"
          size={45}
          color="white"
          style={styles.iconContainer}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{restaurants[0].name}</Text>
          <Text style={styles.subtitle}>
            ${restaurants[0].deliveryFee} &#8226;{' '}
            {restaurants[0].minDeliveryTime}-{restaurants[0].maxDeliveryTime}{' '}
            minutes
          </Text>
          <Text style={styles.menuTitle}>Menu</Text>
        </View>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={restaurants[0].dishes}
        renderItem={({ item }) => <DishListItem dish={item} />}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={HeaderComponent}
      />
    </View>
  );
};

export default RestaurantDetailsScreen;

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
