import { StyleSheet, FlatList, View } from 'react-native';
import RestaurantItem from '../../../src/components/RestaurantItem';
import restaurants from '../../../assets/data/restaurants.json';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={restaurants}
        renderItem={({ item }) => <RestaurantItem restaurant={item} />}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10 },
});
