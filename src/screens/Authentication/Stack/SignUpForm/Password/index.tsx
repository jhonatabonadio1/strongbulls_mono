import React, {useState} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  TouchableWithoutFeedback,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {RFValue} from 'react-native-responsive-fontsize';

import {Container, Form, Content, Footer} from './styles';
import {Button} from '../../../../../components/interface/Forms/Button';
import {Input} from '../../../../../components/interface/Forms/Input';

export function Password() {
  const [password, setPassword] = useState('');

  function handleNavigate() {}

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Container>
            <Content>
              <Form>
                <Animatable.View
                  animation="fadeInLeft"
                  duration={300}
                  delay={300}>
                  <Input
                    label="Agora, crie sua senha"
                    placeholder="Senha de acesso"
                    value={password}
                    passwordInput
                    onChangeText={setPassword}
                    style={{marginBottom: RFValue(12)}}
                  />
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
          delay={600}
          style={{width: '100%'}}>
          <Button
            title="Finalizar cadastro"
            enabled={password.length !== 0}
            action={handleNavigate}
          />
        </Animatable.View>
      </Footer>
    </>
  );
}
