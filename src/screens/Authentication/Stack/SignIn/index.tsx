import {useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

import {
  Container,
  Header,
  Footer,
  Welcome,
  UserActions,
  Copyright,
  TechLinkLogo,
  Logo,
  Form,
  ForgotPasswordButton,
  ForgotPasswordButtonText,
  Divider,
  DividerLine,
  DividerText,
} from './styles';
import logo from '../../../../assets/images/logo.png';
import techlinkLogo from '../../../../assets/images/logo_techlink.png';
import {Button} from '../../../../components/interface/Forms/Button';
import {Input} from '../../../../components/interface/Forms/Input';
import {useAuth} from '../../../../contexts/AuthContext';

const DEFAULT_PASSWORD = '123456';

export function SignIn() {
  const navigation = useNavigation();
  const {signIn} = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const user = {
    id: '1',
    name: 'Visitante',
    email,
    gender: 'M',
    date: new Date(),
    category: 'RX',
    height: '1,85',
    weight: '78',
  };

  function handleSignIn() {
    if (password === DEFAULT_PASSWORD) {
      signIn({
        user,
      });
    }
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <Welcome>
              <Logo source={logo} />
            </Welcome>
          </Header>

          <Footer>
            <Form>
              <Input
                label="Qual seu e-mail?"
                placeholder="E-mail"
                autoCapitalize="none"
                value={email}
                onChangeText={text => setEmail(text)}
                keyboardType="email-address"
                style={{marginBottom: RFValue(12)}}
              />

              <Input
                label="E sua senha?"
                placeholder="Senha"
                autoCapitalize="none"
                onChangeText={text => setPassword(text)}
                value={password}
                passwordInput
                keyboardType="email-address"
                style={{marginBottom: RFValue(12)}}
              />

              <ForgotPasswordButton
                activeOpacity={1}
                onPress={() => navigation.navigate('ForgotPassword')}>
                <ForgotPasswordButtonText>
                  Esqueceu a senha?
                </ForgotPasswordButtonText>
              </ForgotPasswordButton>

              <Button
                title="Fazer login"
                outline
                action={handleSignIn}
                enabled
                style={{marginBottom: RFValue(12)}}
              />
            </Form>

            <Divider>
              <DividerLine />
              <DividerText>ou</DividerText>
              <DividerLine />
            </Divider>
            <UserActions>
              <Button
                title="Abra sua conta"
                action={() => navigation.navigate('SignUpForm')}
                enabled
                style={{marginBottom: RFValue(12)}}
              />
              <Copyright>
                <TechLinkLogo source={techlinkLogo} />
              </Copyright>
            </UserActions>
          </Footer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
