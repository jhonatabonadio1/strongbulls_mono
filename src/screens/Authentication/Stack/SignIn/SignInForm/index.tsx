import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {RFValue} from 'react-native-responsive-fontsize';

import {
  Container,
  Form,
  Content,
  ForgotPasswordButton,
  ForgotPasswordButtonText,
  Footer,
} from './styles';
import {Button} from '../../../../../components/interface/Forms/Button';
import {Input} from '../../../../../components/interface/Forms/Input';

export function SignInForm() {
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
                  <Input
                    label="Qual seu e-mail?"
                    placeholder="E-mail"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    style={{marginBottom: RFValue(12)}}
                  />
                </Animatable.View>
                <Animatable.View
                  animation="fadeInLeft"
                  duration={300}
                  delay={300}>
                  <Input
                    label="E sua senha?"
                    placeholder="Senha"
                    autoCapitalize="none"
                    passwordInput
                    keyboardType="email-address"
                    style={{marginBottom: RFValue(12)}}
                  />
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
