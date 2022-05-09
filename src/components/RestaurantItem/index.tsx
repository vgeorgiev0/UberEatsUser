import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Restaurant } from '../../models';
import { RootStackScreens } from '../../navigation/params/RootStackParams';

interface RestaurantItemProps {
  restaurant: Restaurant;
}

const RestaurantItem: React.FC<RestaurantItemProps> = ({ restaurant }) => {
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity
      style={styles.restaurantContainer}
      onPress={() => {
        navigation.navigate(RootStackScreens.RestaurantDetails, {
          id: restaurant.id,
        });
      }}
    >
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
            ${restaurant.deliveryFee?.toFixed(1)} &#8226;{' '}
            {restaurant.minDeliveryTime}-{restaurant.maxDeliveryTime} minutes
          </Text>
        </View>
        <View style={styles.rating}>
          <Text style={{ fontSize: 16 }}>
            {restaurant.rating?.toFixed(1)} ⭐
          </Text>
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
    padding: 10,
    marginVertical: 10,
  },
  title: { fontSize: 15, fontWeight: 'bold', marginVertical: 5 },
  subtitle: { color: 'grey' },
  row: { flexDirection: 'row', alignItems: 'center' },
  rating: {
    marginLeft: 'auto',
    backgroundColor: '#ffaa',
    width: 70,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
});
