import {format} from 'date-fns';
import React, {useState} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import DatePicker from 'react-native-date-picker';
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
  DateInput,
  DateInputContainer,
} from './styles';
import {Button} from '../../../../components/interface/Forms/Button';

export function SignUpForm() {
  const theme = useTheme();

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

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
                    <Label>Qual o seu nome?</Label>
                    <InputContainer>
                      <Input
                        placeholder="Nome completo"
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
                </Animatable.View>
                <Animatable.View
                  animation="fadeInLeft"
                  duration={300}
                  delay={600}>
                  <InputGroup>
                    <Label>E sua data de nascimento?</Label>
                    <DateInputContainer
                      activeOpacity={1}
                      onPress={() => setOpen(true)}>
                      <DateInput>{format(date, 'dd/MM/yyyy')}</DateInput>
                      <DatePicker
                        modal
                        open={open}
                        date={date}
                        mode="date"
                        onConfirm={date => {
                          setOpen(false);
                          setDate(date);
                        }}
                        onCancel={() => {
                          setOpen(false);
                        }}
                      />
                    </DateInputContainer>
                  </InputGroup>
                </Animatable.View>
                <Animatable.View
                  animation="fadeInLeft"
                  duration={300}
                  delay={900}>
                  <InputGroup>
                    <Label>E qual seu gênero?</Label>
                  </InputGroup>
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
