import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
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
import {Button} from '../../../../components/interface/Forms/Button';

export function SignUpForm() {
  const theme = useTheme();

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Container>
            <Content>
              <Form>
                <InputGroup>
                  <Label>Qual o seu nome?</Label>
                  <InputContainer>
                    <Input
                      placeholder="Nome completo"
                      placeholderTextColor={theme.colors.comment}
                    />
                  </InputContainer>
                </InputGroup>
                <InputGroup>
                  <Label>E o seu e-mail?</Label>
                  <InputContainer>
                    <Input
                      placeholder="E-mail"
                      autoCapitalize="none"
                      keyboardType="email-address"
                      placeholderTextColor={theme.colors.comment}
                    />
                  </InputContainer>
                </InputGroup>
                <InputGroup>
                  <Label>E o seu telefone?</Label>
                  <InputContainer>
                    <Input
                      placeholder="Telefone"
                      keyboardType="number-pad"
                      placeholderTextColor={theme.colors.comment}
                    />
                  </InputContainer>
                </InputGroup>
                <InputGroup>
                  <Label>E qual seu gênero?</Label>
                </InputGroup>
              </Form>
            </Content>
          </Container>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <Footer>
        <Button title="Continuar" enabled action={() => {}} />
      </Footer>
    </>
  );
}
