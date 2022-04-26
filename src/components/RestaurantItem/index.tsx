import { Image, StyleSheet, Text, View } from 'react-native';

interface RestaurantItemProps {
  uri: string;
  title: string;
  subtitle: string;
}

const RestaurantItem: React.FC<RestaurantItemProps> = ({
  uri,
  title,
  subtitle,
}) => {
  return (
    <View style={styles.restaurantContainer}>
      <Image
        style={styles.image}
        source={{
          uri: uri,
        }}
      />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

export default RestaurantItem;

const styles = StyleSheet.create({
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
