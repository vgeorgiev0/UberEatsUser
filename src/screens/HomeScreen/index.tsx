import { StyleSheet, FlatList, View } from 'react-native';
import RestaurantItem from '../../../src/components/RestaurantItem';
import { useRecoilValue } from 'recoil';
import { restaurantsAtom } from '../../../state/restaurants';

export default function HomeScreen() {
  const restaurants = useRecoilValue(restaurantsAtom);

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
