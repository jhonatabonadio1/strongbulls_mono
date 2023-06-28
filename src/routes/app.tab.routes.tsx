import {AntDesign as Feather} from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';
import {View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {useTheme} from 'styled-components';

import {Home} from '../screens/Autheticated/Tab/Home';

const {Navigator, Screen} = createBottomTabNavigator();

export function TabRoutes() {
  const theme = useTheme();
  return (
    <Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: theme.colors.shape,
        tabBarInactiveTintColor: theme.colors.comment,
        tabBarStyle: {
          backgroundColor: theme.colors.primary,
          position: 'absolute',
          bottom: 20,

          marginHorizontal: 20,
          borderRadius: 50,
        },
        tabBarShowLabel: false,
        headerShown: false,
      })}>
      <Screen
        name="Initial"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => {
            return <Feather name="home" size={size} color={color} />;
          },
        }}
      />
      <Screen
        name="Initial2"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => {
            return <Feather name="calendar" size={size} color={color} />;
          },
        }}
      />
      <Screen
        name="Initial3"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => {
            return (
              <View
                style={{
                  width: size + RFValue(20),
                  height: size + RFValue(20),
                  borderRadius: RFValue(30),

                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: theme.colors.secondary,
                  marginBottom: RFValue(25),
                }}>
                <Feather name="plus" size={size} color={theme.colors.primary} />
              </View>
            );
          },
        }}
      />
      <Screen
        name="Initial4"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => {
            return <Feather name="barschart" size={size} color={color} />;
          },
        }}
      />
      <Screen
        name="Initial5"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => {
            return <Feather name="clockcircleo" size={size} color={color} />;
          },
        }}
      />
    </Navigator>
  );
}
