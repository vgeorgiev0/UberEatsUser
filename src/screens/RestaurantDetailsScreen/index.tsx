import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React, { SetStateAction, useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import DishListItem from '../../components/DishListItem';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  RootStackParamList,
  RootStackScreens,
} from '../../navigation/params/RootStackParams';
import Loading from '../../components/Loading';
// import { useRecoilValue } from 'recoil';
// import {
//   getRestaurantDishes,
//   getSelectedRestaurantSelector,
// } from '../../../state/restaurants';
import { Dish, Restaurant } from '../../models';
import { DataStore } from 'aws-amplify';

type RestaurantDetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  RootStackScreens.RestaurantDetails
>;

const RestaurantDetailsScreen: React.FC<RestaurantDetailsScreenProps> = ({
  navigation,
  route,
}) => {
  const id = route.params?.id;
  const [restaurant, setRestaurant] = useState<Restaurant>();
  const [dishes, setDishes] = useState<any>();

  // const dishes = useRecoilValue(getRestaurantDishes(id));
  // const restaurant = useRecoilValue(getSelectedRestaurantSelector(id));

  console.log(id);

  useEffect(() => {
    if (!id) {
      return;
    }
    DataStore.query(Restaurant, id).then(setRestaurant);

    DataStore.query(Dish, (dish) => dish.restaurantID('eq', id)).then(
      setDishes
    );
  }, [id]);

  if (!restaurant) {
    return <Loading />;
  }

  const HeaderComponent = () => {
    return (
      <View>
        <Image source={{ uri: restaurant.image }} style={styles.image} />
        <Ionicons
          name="arrow-back-circle"
          size={45}
          color="white"
          style={styles.iconContainer}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{restaurant.name}</Text>
          <Text style={styles.subtitle}>
            ${restaurant.deliveryFee.toFixed(2)} &#8226;{' '}
            {restaurant.minDeliveryTime}-{restaurant.maxDeliveryTime} minutes
          </Text>
          <Text style={styles.menuTitle}>Menu</Text>
        </View>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={dishes}
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
