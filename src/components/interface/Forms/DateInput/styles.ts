import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View``;

export const Label = styled.Text`
  font-family: ${({theme}) => theme.fonts.semibold};
  font-size: ${RFValue(16)}px;
  margin-bottom: ${RFValue(6)}px;
  color: ${({theme}) => theme.colors.title};
`;

export const DateInputContainer = styled.TouchableOpacity`
  height: ${RFValue(50)}px;
  border-style: solid;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  border-bottom-width: 2px;
  border-color: ${({theme}) => theme.colors.border};
`;

export const InputField = styled.TextInput`
  color: ${({theme}) => theme.colors.title};
  font-family: ${({theme}) => theme.fonts.regular};
  flex: 1;
  font-size: ${RFValue(12)}px;
`;

export const DateInputText = styled.Text`
  color: ${({theme}) => theme.colors.title};
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
`;
