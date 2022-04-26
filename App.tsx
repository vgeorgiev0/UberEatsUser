import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, View } from 'react-native';
import RestaurantItem from './src/components/RestaurantItem';

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <RestaurantItem
          uri={`https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant2.jpeg`}
          title={'title'}
          subtitle={'subtitle'}
        />
        <RestaurantItem
          uri={`https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant2.jpeg`}
          title={'title'}
          subtitle={'subtitle'}
        />
        <RestaurantItem
          uri={`https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant2.jpeg`}
          title={'title'}
          subtitle={'subtitle'}
        />
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    aspectRatio: 5 / 3,
    marginBottom: 5,
    borderRadius: 10,
  },
  restaurantContainer: {
    width: '100%',
    backgroundColor: '#fa12',
    padding: 10,
    marginVertical: 10,
  },
  title: { fontSize: 15, fontWeight: 'bold', marginVertical: 5 },
  subtitle: { color: 'grey' },
});
