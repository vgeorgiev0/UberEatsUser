import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import restaurants from '../../../assets/data/restaurants.json';
import { AntDesign } from '@expo/vector-icons';
const DishDetailsScreen: React.FC = () => {
  const [quantity, setQuantity] = useState(1);
  const dish = restaurants[0].dishes[0];

  const onPlus = () => {
    setQuantity(quantity + 1);
  };

  const onMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const getTotal = () => {
    return dish.price * quantity;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{dish.name}</Text>
      <Text style={styles.description}>{dish.description}</Text>
      <View style={styles.separator}></View>

      <View style={styles.row}>
        {/* @ts-ignore */}
        <AntDesign
          name="minuscircleo"
          size={60}
          color={'black'}
          onPress={onMinus}
        />
        <Text style={styles.quantity}>{quantity}</Text>
        {/* @ts-ignore */}
        <AntDesign
          name="pluscircleo"
          size={60}
          color={'black'}
          onPress={onPlus}
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          Add {quantity} to basket &#8226; {getTotal().toFixed(2)}$
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default DishDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    width: '100%',
    padding: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
    marginVertical: 10,
  },
  description: {
    color: '#696969',
  },
  separator: {
    height: 1,
    backgroundColor: 'lightgrey',
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  quantity: {
    fontSize: 25,
    marginHorizontal: 20,
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
