import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';

import {
  Container,
  Header,
  Footer,
  Title,
  TitleBold,
  Description,
  Welcome,
  UserActions,
  Copyright,
  MonoLogo,
  Logo,
} from './styles';
import logo from '../../../../assets/images/logo.png';
import monoLogo from '../../../../assets/images/mono_logo.png';
import slide1 from '../../../../assets/images/slides/1.jpg';
import slide2 from '../../../../assets/images/slides/2.jpg';
import {Button} from '../../../../components/interface/Forms/Button';

const randomImage = Math.floor(Math.random() * 2);

export function SignIn() {
  const navigation = useNavigation();
  return (
    <Container source={randomImage === 0 ? slide1 : slide2}>
      <Header />

      <Footer>
        <Welcome>
          <Logo source={logo} />
          <Title>
            Bem-vindo(a) ao Time <TitleBold>No Boundaries</TitleBold>
          </Title>
          <Description>
            Faça o login ou crie sua conta para acessar o aplicativo.
          </Description>
        </Welcome>
        <UserActions>
          <Button
            title="Abrir conta"
            action={() => navigation.navigate('SignUpForm')}
            enabled
            style={{marginBottom: RFValue(12)}}
          />
          <Button
            title="Fazer login"
            action={() => navigation.navigate('SignInForm')}
            enabled
            outline
          />
        </UserActions>
        <Copyright>
          <MonoLogo source={monoLogo} />
        </Copyright>
      </Footer>
    </Container>
  );
}
