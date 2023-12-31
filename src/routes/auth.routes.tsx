import {Feather} from '@expo/vector-icons';
import {HeaderBackButtonProps} from '@react-navigation/elements';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {useTheme} from 'styled-components';

import {SignIn} from '../screens/Authentication/Stack/SignIn';
import {ForgotPassword} from '../screens/Authentication/Stack/SignIn/Forgot';
import {SignUpForm} from '../screens/Authentication/Stack/SignUpForm';
import {Category} from '../screens/Authentication/Stack/SignUpForm/Category';
import {Password} from '../screens/Authentication/Stack/SignUpForm/Password';
import {Sizes} from '../screens/Authentication/Stack/SignUpForm/Sizes';
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
        name="ForgotPassword"
        component={ForgotPassword}
        options={{
          ...headerStyle,
          headerTitle: 'Esqueceu a senha?',
        }}
      />
      <Screen
        name="SignUpForm"
        component={SignUpForm}
        options={{
          ...headerStyle,
          headerTitle: 'Seus dados',
        }}
      />
      <Screen
        name="Category"
        component={Category}
        options={{
          ...headerStyle,
          headerTitle: 'Categoria',
        }}
      />
      <Screen
        name="Sizes"
        component={Sizes}
        options={{
          ...headerStyle,
          headerTitle: 'Peso e altura',
        }}
      />
      <Screen
        name="Password"
        component={Password}
        options={{
          ...headerStyle,
          headerTitle: 'Senha',
        }}
      />
    </Navigator>
  );
}
