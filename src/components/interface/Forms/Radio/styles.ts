import {MaterialCommunityIcons} from '@expo/vector-icons';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View``;

export const Label = styled.Text`
  font-family: ${({theme}) => theme.fonts.semibold};
  font-size: ${RFValue(16)}px;
  margin-bottom: ${RFValue(12)}px;
  color: ${({theme}) => theme.colors.title};
`;

export const InputContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Group = styled.TouchableOpacity`
  flex-direction: row;
  flex: 1;
  align-items: center;
`;

export const Name = styled.Text``;

export const Icon = styled(MaterialCommunityIcons)`
  color: ${({theme}) => theme.colors.black};
  margin-right: ${RFValue(6)}px;
  font-size: ${RFValue(18)}px;
`;
