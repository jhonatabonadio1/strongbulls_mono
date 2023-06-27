import React from 'react';
import {Keyboard, TouchableWithoutFeedback} from 'react-native';
import * as Animatable from 'react-native-animatable';
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
            <Animatable.View animation="fadeInLeft" duration={300} delay={300}>
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
            </Animatable.View>
          </Form>
        </Content>

        <Footer>
          <Animatable.View
            animation="fadeInUp"
            duration={300}
            delay={600}
            style={{width: '100%'}}>
            <Button title="Continuar" enabled action={() => {}} />
          </Animatable.View>
        </Footer>
        <KeyboardSpacer />
      </Container>
    </TouchableWithoutFeedback>
  );
}
