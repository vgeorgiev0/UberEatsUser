import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Orders } from '../../../types/orders';
import { useNavigation } from '@react-navigation/native';
import { RootStackScreens } from '../../navigation/params/RootStackParams';

interface OrderListItemProps {
  order: Orders;
}

const OrderListItem: React.FC<OrderListItemProps> = ({ order }) => {
  const navigation = useNavigation<any>();
  const navigationHandler = () => {
    navigation.navigate(RootStackScreens.OrderDetailScreen);
  };
  return (
    <TouchableOpacity style={styles.container} onPress={navigationHandler}>
      <Image style={styles.image} source={{ uri: order.Restaurant.image }} />

      <View style={styles.infoContainer}>
        <Text style={styles.title}>{order.Restaurant.name}</Text>
        <Text style={styles.priceAndStatus}>3 items 38.45 $</Text>
        <Text style={styles.priceAndStatus}>
          2 days ago &#8226; {order.status}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default OrderListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center',
  },
  infoContainer: {},
  image: {
    width: 75,
    height: 75,
    marginRight: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  priceAndStatus: {
    marginVertical: 5,
    color: '#696969',
  },
});
