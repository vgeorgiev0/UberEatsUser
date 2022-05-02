import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import orders from '../../../assets/data/orders.json';
import OrderListItem from '../../components/OrderListItem';
type Props = {};

const OrdersScreen = (props: Props) => {
  return (
    <View style={styles.screen}>
      <FlatList
        data={orders}
        renderItem={({ item }) => <OrderListItem order={item} />}
      />
    </View>
  );
};

export default OrdersScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: '100%',
    paddingTop: 30,
  },
});
