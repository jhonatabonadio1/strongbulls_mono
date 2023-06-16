import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import {SignIn} from '../screens/SignIn';

const {Navigator, Screen} = createStackNavigator();

const options = {
  headerShown: false,
};

export function AuthRoutes() {
  return (
    <Navigator screenOptions={options}>
      <Screen name="SignIn" component={SignIn} />
    </Navigator>
  );
}
