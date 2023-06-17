import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {useTheme} from 'styled-components';

import {
  Container,
  Form,
  InputGroup,
  Label,
  InputContainer,
  Input,
  Content,
  ForgotPasswordButton,
  ForgotPasswordButtonText,
  Footer,
} from './styles';
import {Button} from '../../../../../components/interface/Forms/Button';

export function SignInForm() {
  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Container>
            <Content>
              <Form>
                <Animatable.View animation="fadeInLeft" duration={300}>
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
                <Animatable.View
                  animation="fadeInLeft"
                  duration={300}
                  delay={300}>
                  <InputGroup>
                    <Label>E a sua senha?</Label>
                    <InputContainer>
                      <Input
                        placeholder="Senha"
                        secureTextEntry
                        placeholderTextColor={theme.colors.comment}
                      />
                    </InputContainer>
                  </InputGroup>
                </Animatable.View>
                <Animatable.View
                  animation="fadeInLeft"
                  duration={300}
                  delay={600}>
                  <ForgotPasswordButton
                    activeOpacity={1}
                    onPress={() => navigation.navigate('ForgotPassword')}>
                    <ForgotPasswordButtonText>
                      Esqueceu a senha?
                    </ForgotPasswordButtonText>
                  </ForgotPasswordButton>
                </Animatable.View>
              </Form>
            </Content>
          </Container>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <Footer>
        <Animatable.View
          animation="fadeInUp"
          duration={300}
          delay={900}
          style={{width: '100%'}}>
          <Button title="Continuar" enabled action={() => {}} />
        </Animatable.View>
      </Footer>
    </>
  );
}
