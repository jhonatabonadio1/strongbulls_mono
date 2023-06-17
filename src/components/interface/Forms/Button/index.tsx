import React from 'react';
import {ActivityIndicator, ViewStyle} from 'react-native';
import {useTheme} from 'styled-components';

import {Container, Title} from './styles';

type Props = {
  title: string;
  action: () => void;
  enabled: boolean;
  isLoading?: boolean;
  outline?: boolean;
  style?: ViewStyle;
};

export function Button({
  title,
  action,
  enabled,
  isLoading,
  outline = false,
  style,
}: Props) {
  const theme = useTheme();
  return (
    <Container
      outline={outline}
      onPress={action}
      activeOpacity={1}
      disabled={!enabled}
      style={{...style, opacity: !enabled ? 0.6 : 1}}>
      {isLoading ? (
        <ActivityIndicator color={theme.colors.black} />
      ) : (
        <Title outline={outline}>{title}</Title>
      )}
    </Container>
  );
}
