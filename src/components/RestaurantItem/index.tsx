import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Restaurant } from '../../../types/restaurant';

interface RestaurantItemProps {
  restaurant: Restaurant;
}

const RestaurantItem: React.FC<RestaurantItemProps> = ({ restaurant }) => {
  return (
    <TouchableOpacity style={styles.restaurantContainer}>
      <Image
        style={styles.image}
        source={{
          uri: restaurant.image,
        }}
      />

      <View style={styles.row}>
        <View>
          <Text style={styles.title}>{restaurant.name}</Text>
          <Text style={styles.subtitle}>
            ${restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime}-
            {restaurant.maxDeliveryTime} minutes
          </Text>
        </View>
        <View style={styles.rating}>
          <Text>{restaurant.rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantItem;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    aspectRatio: 5 / 3,
    marginBottom: 5,
    borderRadius: 10,
  },
  restaurantContainer: {
    width: '100%',
    backgroundColor: '#fa12',
    padding: 10,
    marginVertical: 10,
  },
  title: { fontSize: 15, fontWeight: 'bold', marginVertical: 5 },
  subtitle: { color: 'grey' },
  row: { flexDirection: 'row', alignItems: 'center' },
  rating: {
    marginLeft: 'auto',
    backgroundColor: '#affa',
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
});
