import React, {useState} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  TouchableWithoutFeedback,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

import {
  Container,
  Form,
  Content,
  Footer,
  SelectBox,
  SelectBoxTitle,
  SelectBoxDescription,
} from './styles';
import {Button} from '../../../../../components/interface/Forms/Button';

export function Category() {
  const [category, setCategory] = useState('');

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <StatusBar barStyle="dark-content" />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Container>
            <Content>
              <Form>
                <Animatable.View
                  animation="fadeInLeft"
                  duration={300}
                  delay={300}
                  style={{width: '100%'}}>
                  <SelectBox
                    onPress={() => setCategory('scale')}
                    selected={category === 'scale'}
                    activeOpacity={1}>
                    <SelectBoxTitle>Scale (iniciante)</SelectBoxTitle>
                    <SelectBoxDescription>
                      Aquele que está iniciando sua jornada
                    </SelectBoxDescription>
                  </SelectBox>
                </Animatable.View>
                <Animatable.View
                  animation="fadeInLeft"
                  duration={300}
                  delay={600}
                  style={{width: '100%'}}>
                  <SelectBox
                    onPress={() => setCategory('intermediario')}
                    selected={category === 'intermediario'}
                    activeOpacity={1}>
                    <SelectBoxTitle>Intermediário</SelectBoxTitle>
                    <SelectBoxDescription>
                      Aquele que possui certo conhecimento e experiência na
                      modalidade.
                    </SelectBoxDescription>
                  </SelectBox>
                </Animatable.View>
                <Animatable.View
                  animation="fadeInLeft"
                  duration={300}
                  delay={900}
                  style={{width: '100%'}}>
                  <SelectBox
                    onPress={() => setCategory('rx')}
                    selected={category === 'rx'}
                    activeOpacity={1}>
                    <SelectBoxTitle>RX (avançado)</SelectBoxTitle>
                    <SelectBoxDescription>
                      Aquele que já atingiu um alto nível de habilidade.
                    </SelectBoxDescription>
                  </SelectBox>
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
          delay={1200}
          style={{width: '100%'}}>
          <Button title="Continuar" enabled action={() => {}} />
        </Animatable.View>
      </Footer>
    </>
  );
}
