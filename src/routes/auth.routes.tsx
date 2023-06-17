import {Feather} from '@expo/vector-icons';
import {HeaderBackButtonProps} from '@react-navigation/elements';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {useTheme} from 'styled-components';

import {SignIn} from '../screens/Authentication/Stack/SignIn';
import {SignInForm} from '../screens/Authentication/Stack/SignIn/SignInForm';
const {Navigator, Screen} = createStackNavigator();

const options = {
  headerShown: false,
};

export function AuthRoutes() {
  const theme = useTheme();

  const headerStyle = {
    headerBackTitleVisible: false,
    headerStyle: {
      backgroundColor: theme.colors.background,
      borderWidth: 0,
      shadowRadius: 0,
      shadowOffset: {
        height: 0,
        width: 0,
      },
    },
    headerLeft: (props: HeaderBackButtonProps) => (
      <TouchableOpacity activeOpacity={1} onPress={props.onPress}>
        <Feather
          name="chevron-left"
          color={props.tintColor}
          size={RFValue(20)}
        />
      </TouchableOpacity>
    ),
    headerTitleStyle: {
      fontFamily: theme.fonts.semibold,
    },
    headerLeftContainerStyle: {
      paddingLeft: 24,
    },
    headerRightContainerStyle: {
      paddingLeft: 24,
    },
    headerTintColor: theme.colors.title,
  };

  return (
    <Navigator>
      <Screen name="SignIn" component={SignIn} options={options} />
      <Screen
        name="SignInForm"
        component={SignInForm}
        options={{
          ...headerStyle,
          headerTitle: 'Login',
        }}
      />
    </Navigator>
  );
}
