import {Feather} from '@expo/vector-icons';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View``;

export const Label = styled.Text`
  font-family: ${({theme}) => theme.fonts.semibold};
  font-size: ${RFValue(18)}px;
  margin-bottom: ${RFValue(6)}px;
  color: ${({theme}) => theme.colors.title};
`;

export const InputContainer = styled.View`
  height: ${RFValue(50)}px;
  border-style: solid;
  justify-content: flex-start;
  align-items: center;
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

export const ShowPasswordButton = styled.TouchableOpacity``;

export const Icon = styled(Feather)`
  color: ${({theme}) => theme.colors.shape};

  font-size: ${RFValue(18)}px;
`;
