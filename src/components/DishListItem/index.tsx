import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Dishes } from '../../../types/restaurant';

interface DishListItemProps {
  dish: Dishes;
}

const DishListItem: React.FC<DishListItemProps> = ({ dish }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{dish.name}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {dish.description}
        </Text>
        <Text style={styles.price}>${dish.price}</Text>
      </View>
      <View>
        {dish.image && (
          <Image source={{ uri: dish.image }} style={styles.image} />
        )}
      </View>
    </View>
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
