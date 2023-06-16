import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import React from 'react';
import {useTheme} from 'styled-components';

import {AuthRoutes} from './auth.routes';

export function Routes() {
  const theme: any = useTheme();

  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: theme.colors.background,
    },
  };

  return (
    <NavigationContainer theme={navTheme}>
      <AuthRoutes />
    </NavigationContainer>
  );
}
