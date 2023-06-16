import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components';

import theme from './src/global/styles/theme';
import { Routes } from './src/routes';

export default function App() {
  const appTheme: any = theme;
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={appTheme}>
        <Routes />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
