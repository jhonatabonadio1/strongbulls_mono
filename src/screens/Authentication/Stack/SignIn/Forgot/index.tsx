import React from 'react';
import {Keyboard, TouchableWithoutFeedback} from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import {useTheme} from 'styled-components';

import {
  Container,
  Form,
  InputGroup,
  Label,
  InputContainer,
  Input,
  Content,
  Footer,
} from './styles';
import {Button} from '../../../../../components/interface/Forms/Button';

export function ForgotPassword() {
  const theme = useTheme();
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Content>
          <Form>
            <InputGroup>
              <Label>Qual o seu e-mail?</Label>
              <InputContainer>
                <Input
                  placeholder="E-mail"
                  autoCapitalize="none"
                  keyboardType="email-address"
                  placeholderTextColor={theme.colors.comment}
                />
              </InputContainer>
            </InputGroup>
          </Form>
        </Content>

        <Footer>
          <Button title="Continuar" enabled action={() => {}} />
        </Footer>
        <KeyboardSpacer />
      </Container>
    </TouchableWithoutFeedback>
  );
}
