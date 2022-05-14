import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Auth, DataStore } from 'aws-amplify';
import { User } from '../../models';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { authUserAtom, dbUserAtom, subAtom } from '../../../state/user';

const Profile = () => {
  const setDbUser = useSetRecoilState(dbUserAtom);
  const userA = useRecoilValue(authUserAtom);
  const [name, setName] = useState('');
  const [adress, setAddress] = useState('');
  const [lat, setLat] = useState('0');
  const [lng, setLng] = useState('0');

  const sub = userA.attributes?.sub;

  const onSave = async () => {
    try {
      const user = await DataStore.save(
        new User({
          name,
          adress,
          lat: parseFloat(lat),
          lng: parseFloat(lng),
          sub,
        })
      );

      setDbUser(user);
      console.log(user);
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  const logoutHandler = () => {
    Auth.signOut();
  };

  return (
    <SafeAreaView>
      <Text style={styles.title}>Profile</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Name"
        style={styles.input}
      />
      <TextInput
        value={adress}
        onChangeText={setAddress}
        placeholder="Address"
        style={styles.input}
      />
      <TextInput
        value={lat}
        onChangeText={setLat}
        placeholder="Latitude"
        style={styles.input}
        keyboardType="numeric"
      />
      <TextInput
        value={lng}
        onChangeText={setLng}
        placeholder="Longitude"
        style={styles.input}
      />
      <View>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'green' }]}
          onPress={onSave}
        >
          <Text style={styles.buttonText}> Save</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'red' }]}
          onPress={logoutHandler}
        >
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  input: {
    margin: 10,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 5,
  },
  button: {
    margin: 10,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Profile;
