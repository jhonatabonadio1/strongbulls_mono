import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {RFValue} from 'react-native-responsive-fontsize';

import {Container, Form, Content, Footer} from './styles';
import {Button} from '../../../../components/interface/Forms/Button';
import {DateInput} from '../../../../components/interface/Forms/DateInput';
import {Input} from '../../../../components/interface/Forms/Input';
import {Radio} from '../../../../components/interface/Forms/Radio';

export function SignUpForm() {
  const navigation = useNavigation();

  const [open, setOpen] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState(new Date());
  const [gender, setGender] = useState('');

  function handleNavigate() {
    navigation.navigate('Category', {
      date,
      email,
      gender,
      name,
    });
  }

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
                    label="Qual o seu nome?"
                    placeholder="Nome completo"
                    value={name}
                    onChangeText={setName}
                    style={{marginBottom: RFValue(12)}}
                  />
                </Animatable.View>
                <Animatable.View
                  animation="fadeInLeft"
                  duration={300}
                  delay={600}>
                  <Input
                    label="E o seu e-mail?"
                    placeholder="E-mail"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    style={{marginBottom: RFValue(12)}}
                  />
                </Animatable.View>
                <Animatable.View
                  animation="fadeInLeft"
                  duration={300}
                  delay={900}>
                  <DateInput
                    date={date}
                    open={open}
                    onPress={() => setOpen(true)}
                    style={{marginBottom: RFValue(12)}}
                    label="E sua data de nascimento?"
                    onConfirm={date => {
                      setOpen(false);
                      setDate(date);
                    }}
                    onCancel={() => {
                      setOpen(false);
                    }}
                  />
                </Animatable.View>
                <Animatable.View
                  animation="fadeInLeft"
                  duration={300}
                  delay={1200}>
                  <Radio
                    label="E o seu gênero?"
                    selected={gender}
                    onSelect={value => setGender(value)}
                    options={[
                      {
                        id: 'M',
                        name: 'Masculino',
                      },
                      {
                        id: 'F',
                        name: 'Feminino',
                      },
                    ]}
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
          delay={1500}
          style={{width: '100%'}}>
          <Button
            title="Continuar"
            enabled={(name.length && email.length && gender.length) !== 0}
            action={handleNavigate}
          />
        </Animatable.View>
      </Footer>
    </>
  );
}
