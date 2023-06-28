import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import React from 'react';
import {useTheme} from 'styled-components';

import {StackRoutes} from './app.stack.routes';
import {AuthRoutes} from './auth.routes';
import {useAuth} from '../contexts/AuthContext';

export function Routes() {
  const theme: any = useTheme();
  const {user} = useAuth();

  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: theme.colors.background,
      secondaryContainer: 'transparent',
    },
  };

  return (
    <NavigationContainer theme={navTheme}>
      {user.id ? <StackRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
