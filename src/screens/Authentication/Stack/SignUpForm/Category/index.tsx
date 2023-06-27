import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
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

type Params = {
  name: string;
  email: string;
  date: Date;
  gender: string;
};

export function Category() {
  const navigation = useNavigation();
  const route = useRoute();

  const {name, email, date, gender} = route.params as Params;

  const [category, setCategory] = useState('');

  function handleNavigate() {
    navigation.navigate('Sizes', {
      name,
      email,
      date,
      gender,
      category,
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
          <Button
            title="Continuar"
            enabled={category.length !== 0}
            action={handleNavigate}
          />
        </Animatable.View>
      </Footer>
    </>
  );
}
