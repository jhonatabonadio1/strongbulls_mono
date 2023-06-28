import {Feather} from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';
import {useTheme} from 'styled-components';

import {Home} from '../screens/Autheticated/Tab/Home';

const {Navigator, Screen} = createBottomTabNavigator();

export function TabRoutes() {
  const theme = useTheme();
  return (
    <Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.comment,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarIcon: ({color}) => {
          if (route.name === 'Initial') {
            return <Feather name="home" size={24} color={color} />;
          }
        },
      })}>
      <Screen name="Initial" component={Home} />
    </Navigator>
  );
}
