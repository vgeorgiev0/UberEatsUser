import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  RootStackParamList,
  RootStackScreens,
} from '../params/RootStackParams';
import OrderTabs from '../tabs/OrdersTabs';
import { Restaurant } from '../../models';
import { Auth, DataStore } from 'aws-amplify';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { restaurantsAtom } from '../../../state/restaurants';
import { dishesAtom } from '../../../state/dishes';
import { Dish } from '../../models';
import { authUserAtom, dbUserAtom } from '../../../state/user';
import Profile from '../../screens/ProfileScreen';
import { User } from '../../models';

const RootStack = createStackNavigator<RootStackParamList>();

const RootStackNavigator: React.FC = () => {
  const setRestaurants = useSetRecoilState(restaurantsAtom);
  const setDishes = useSetRecoilState(dishesAtom);
  const [authUser, setAuthUser] = useRecoilState(authUserAtom);
  const [dbUser, setDbUser] = useRecoilState(dbUserAtom);
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
  }, [sub]);

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
