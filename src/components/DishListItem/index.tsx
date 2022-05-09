import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { RootStackScreens } from '../../navigation/params/RootStackParams';
import { Dish } from '../../models';

interface DishListItemProps {
  dish: Dish | null;
}

const DishListItem: React.FC<DishListItemProps> = ({ dish }) => {
  const navigation = useNavigation<any>();
  const navigationHandler = () => {
    navigation.navigate(RootStackScreens.Dish, { id: dish?.id });
  };
  if (!dish) {
    return (
      <View>
        <Text>No Dishes</Text>
      </View>
    );
  }

  return (
    <TouchableOpacity style={styles.container} onPress={navigationHandler}>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{dish.name}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {dish.description}
        </Text>
        <Text style={styles.price}>${dish.price?.toFixed(2)}</Text>
      </View>
      <View>
        {dish.image && (
          <Image source={{ uri: dish.image }} style={styles.image} />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default DishListItem;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  textContainer: { flex: 1 },
  name: {
    fontWeight: '600',
    fontSize: 16,
    letterSpacing: 0.5,
  },
  description: {
    color: 'grey',
    marginVertical: 10,
  },
  price: { fontSize: 16 },
  image: { height: 100, aspectRatio: 1, borderRadius: 10 },
});
