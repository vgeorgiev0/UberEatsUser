import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import restaurants from '../../../assets/data/restaurants.json';

import BasketDishItem from '../../components/BasketDishItem';
const Basket: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{restaurants[0].name}</Text>

      <Text style={styles.yourItems}>Your Items</Text>

      <FlatList
        data={restaurants[0].dishes}
        renderItem={({ item }) => <BasketDishItem basketDish={item} />}
      />

      <View style={styles.separator}></View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Create order</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Basket;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    width: '100%',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginVertical: 10,
  },
  yourItems: {
    fontSize: 19,
    fontWeight: 'bold',
    marginTop: 20,
  },
  separator: {
    height: 1,
    backgroundColor: 'lightgrey',
    marginVertical: 10,
  },
  button: {
    backgroundColor: 'black',
    marginTop: 'auto',
    padding: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
