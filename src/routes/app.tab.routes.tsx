import {Feather} from '@expo/vector-icons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import * as React from 'react';
import {View} from 'react-native';
import {useTheme} from 'styled-components';

import {SignIn} from '../screens/Authentication/Stack/SignIn';
import {Home} from '../screens/Autheticated/Tab/Home';

const {Navigator, Screen} = createMaterialBottomTabNavigator();

export function TabRoutes() {
  const theme = useTheme();
  return (
    <Navigator
      activeColor={theme.colors.primary}
      inactiveColor={theme.colors.comment}
      sceneAnimationEnabled
      sceneAnimationType="shifting"
      labeled={false}
      screenOptions={{}}
      barStyle={{
        backgroundColor: theme.colors.shape,
        borderTopWidth: 1,
        borderTopColor: theme.colors.border,
        paddingBottom: 0,
      }}>
      <Screen
        name="Initial"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <View>
              <Feather name="home" size={24} color={color} />
            </View>
          ),
        }}
      />
      <Screen
        name="Teste"
        component={SignIn}
        options={{
          tabBarIcon: ({color}) => (
            <View>
              <Feather name="home" size={24} color={color} />
            </View>
          ),
        }}
      />
    </Navigator>
  );
}
