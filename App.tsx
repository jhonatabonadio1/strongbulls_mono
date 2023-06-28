import {
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import * as SplashScreen from 'expo-splash-screen';
import React, {useCallback} from 'react';
import {StatusBar, Text, TextInput} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {enableScreens} from 'react-native-screens';
import {ThemeProvider} from 'styled-components';

import {AppProvider} from './src/contexts';
import theme from './src/global/styles/theme';
import {Routes} from './src/routes';

SplashScreen.preventAutoHideAsync();

interface TextWithDefaultProps extends Text {
  defaultProps: {allowFontScaling?: boolean};
}

interface InputWithDefaultProps extends TextInput {
  defaultProps: {allowFontScaling?: boolean};
}

enableScreens();

export default function App() {
  // eslint-disable-next-line no-multi-assign
  (Text as unknown as TextWithDefaultProps).defaultProps = (
    Text as unknown as TextWithDefaultProps
  ).defaultProps = (Text as unknown as TextWithDefaultProps).defaultProps || {};
  (Text as unknown as TextWithDefaultProps).defaultProps.allowFontScaling =
    false;
  (Text as unknown as TextWithDefaultProps).defaultProps = {
    ...((Text as unknown as TextWithDefaultProps).defaultProps || {}),
    allowFontScaling: false,
  };

  // eslint-disable-next-line no-multi-assign
  (TextInput as unknown as InputWithDefaultProps).defaultProps = (
    TextInput as unknown as InputWithDefaultProps
  ).defaultProps =
    (TextInput as unknown as InputWithDefaultProps).defaultProps || {};
  (
    TextInput as unknown as InputWithDefaultProps
  ).defaultProps.allowFontScaling = false;
  (TextInput as unknown as InputWithDefaultProps).defaultProps = {
    ...((TextInput as unknown as InputWithDefaultProps).defaultProps || {}),
    allowFontScaling: false,
  };

  const appTheme: any = theme;

  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{flex: 1}} onLayout={onLayoutRootView}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.primary}
      />
      <AppProvider>
        <ThemeProvider theme={appTheme}>
          <Routes />
        </ThemeProvider>
      </AppProvider>
    </GestureHandlerRootView>
  );
}
