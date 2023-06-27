import {useNavigation, useRoute} from '@react-navigation/native';
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
import {Button} from '../../../../../components/interface/Forms/Button';
import {Input} from '../../../../../components/interface/Forms/Input';

type Params = {
  name: string;
  email: string;
  date: Date;
  gender: string;
  category: string;
};

export function Sizes() {
  const navigation = useNavigation();
  const route = useRoute();

  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const {name, email, date, gender, category} = route.params as Params;

  function handleNavigate() {
    navigation.navigate('Password', {
      name,
      email,
      date,
      gender,
      category,
      height,
      weight,
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
                    label="Qual sua altura?"
                    placeholder="Altura (cm)"
                    value={height}
                    keyboardType="number-pad"
                    onChangeText={setHeight}
                    style={{marginBottom: RFValue(12)}}
                  />
                </Animatable.View>
                <Animatable.View
                  animation="fadeInLeft"
                  duration={300}
                  delay={600}>
                  <Input
                    label="E o seu peso?"
                    placeholder="Peso (kg)"
                    autoCapitalize="none"
                    value={weight}
                    onChangeText={setWeight}
                    keyboardType="number-pad"
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
          delay={900}
          style={{width: '100%'}}>
          <Button
            title="Continuar"
            enabled={(height.length && weight.length) !== 0}
            action={handleNavigate}
          />
        </Animatable.View>
      </Footer>
    </>
  );
}
