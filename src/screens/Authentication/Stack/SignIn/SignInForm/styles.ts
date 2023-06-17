import {getBottomSpace} from 'react-native-iphone-x-helper';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: space-around;
  background-color: ${({theme}) => theme.colors.background};
`;

export const Content = styled.View`
  padding: 0 24px;
`;

export const Form = styled.View``;
export const InputGroup = styled.View`
  margin-bottom: ${RFValue(20)}px;
`;
export const Label = styled.Text`
  font-family: ${({theme}) => theme.fonts.semibold};
  font-size: ${RFValue(18)}px;
  margin-bottom: ${RFValue(6)}px;
  color: ${({theme}) => theme.colors.title};
`;
export const InputContainer = styled.View`
  height: ${RFValue(50)}px;
  border-style: solid;
  border-bottom-width: 2px;
  border-color: ${({theme}) => theme.colors.border};
  justify-content: center;
`;
export const Input = styled.TextInput`
  color: ${({theme}) => theme.colors.title};
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
`;

export const ForgotPasswordButton = styled.TouchableOpacity`
  margin-bottom: ${RFValue(20)}px;
`;
export const ForgotPasswordButtonText = styled.Text`
  color: ${({theme}) => theme.colors.comment};
  font-family: ${({theme}) => theme.fonts.semibold};
  font-size: ${RFValue(12)}px;
`;

export const Footer = styled.View`
  justify-content: center;
  align-items: center;
  padding: 0 24px;
  padding-bottom: ${getBottomSpace() ? getBottomSpace() : RFValue(20)}px;
  width: 100%;
`;
