import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Dishes } from '../../../types/dishes';

interface BasketDishItemProps {
  basketDish: Dishes;
}
const BasketDishItem: React.FC<BasketDishItemProps> = ({ basketDish }) => {
  return (
    <TouchableOpacity style={styles.row}>
      <View style={styles.quantityContainer}>
        <Text>1</Text>
      </View>
      <Text style={styles.name}>{basketDish.name}</Text>
      <Text style={{ marginLeft: 'auto' }}>
        {basketDish.price?.toFixed(2)} $
      </Text>
    </TouchableOpacity>
  );
};

export default BasketDishItem;

const styles = StyleSheet.create({
  quantityContainer: {
    backgroundColor: 'lightgrey',
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginRight: 10,
    borderRadius: 3,
  },
  name: {
    fontWeight: '600',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
});
