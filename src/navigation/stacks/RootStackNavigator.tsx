import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  RootStackParamList,
  RootStackScreens,
} from '../params/RootStackParams';
import OrderTabs from '../tabs/OrdersTabs';
import { Restaurant } from '../../models';
import { Auth, DataStore } from 'aws-amplify';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { restaurantsAtom } from '../../../state/restaurants';
import { dishesAtom } from '../../../state/dishes';
import { Dish } from '../../models';
import { authUserAtom, dbUserAtom, subAtom } from '../../../state/user';
import Profile from '../../screens/ProfileScreen';
import { User } from '../../models';

const RootStack = createStackNavigator<RootStackParamList>();

const RootStackNavigator: React.FC = () => {
  const setRestaurants = useSetRecoilState(restaurantsAtom);
  const setDishes = useSetRecoilState(dishesAtom);
  const [authUser, setAuthUser] = useRecoilState(authUserAtom);
  const [dbUser, setDbUser] = useRecoilState(dbUserAtom);
  const setSub = useSetRecoilState(subAtom);
  const sub = authUser.attributes?.sub;

  useEffect(() => {
    DataStore.query(Restaurant).then(setRestaurants);
    DataStore.query(Dish).then(setDishes);
  }, []);

  useEffect(() => {
    Auth.currentAuthenticatedUser({ bypassCache: true }).then(setAuthUser);
    console.log(authUser?.attributes?.sub);
  }, []);

  useEffect(() => {
    DataStore.query(User, (user) => user.sub('eq', sub)).then((users) =>
      setDbUser(users[0])
    );
    setDBUser();
  }, [sub]);

  const setDBUser = async () => {
    if (!dbUser) {
      return;
    }
    setSub(dbUser);
  };
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      {dbUser ? (
        <RootStack.Screen name={RootStackScreens.Root} component={OrderTabs} />
      ) : (
        <RootStack.Screen name={RootStackScreens.Profile} component={Profile} />
      )}
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
