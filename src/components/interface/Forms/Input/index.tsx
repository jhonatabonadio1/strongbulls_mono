import React, {useState} from 'react';
import {ViewStyle, TextInputProps} from 'react-native';
import {useTheme} from 'styled-components';

import {
  Container,
  Icon,
  InputContainer,
  InputField,
  Label,
  ShowPasswordButton,
} from './styles';

type InputProps = {
  label: string;
  style?: ViewStyle;
  passwordInput?: boolean;
};

export function Input({
  label,
  style,
  passwordInput,
  ...rest
}: InputProps & TextInputProps) {
  const [show, setShow] = useState(false);
  const theme = useTheme();
  return !passwordInput ? (
    <Container style={style}>
      <Label>{label}</Label>
      <InputContainer>
        <InputField {...rest} placeholderTextColor={theme.colors.comment} />
      </InputContainer>
    </Container>
  ) : (
    <Container style={style}>
      <Label>{label}</Label>
      <InputContainer>
        <InputField
          {...rest}
          placeholderTextColor={theme.colors.comment}
          secureTextEntry={!show}
          keyboardType="default"
        />
        <ShowPasswordButton activeOpacity={1} onPress={() => setShow(!show)}>
          {!show ? <Icon name="eye-off" /> : <Icon name="eye" />}
        </ShowPasswordButton>
      </InputContainer>
    </Container>
  );
}
