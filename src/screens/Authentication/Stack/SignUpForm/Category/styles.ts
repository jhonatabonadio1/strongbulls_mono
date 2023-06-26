import {getBottomSpace} from 'react-native-iphone-x-helper';
import {RFValue} from 'react-native-responsive-fontsize';
import {css} from 'styled-components';
import styled from 'styled-components/native';

type Selected = {
  selected?: boolean;
};

export const Container = styled.View`
  flex: 1;
  justify-content: space-around;
  background-color: ${({theme}) => theme.colors.background};
`;

export const Content = styled.View`
  padding: 0 24px;
`;

export const Form = styled.View``;

export const SelectBox = styled.TouchableOpacity<Selected>`
  width: 100%;
  padding: ${RFValue(12)}px;
  border: 1px solid ${({theme}) => theme.colors.border};
  border-radius: 12px;
  margin-bottom: ${RFValue(12)}px;

  ${({selected}) =>
    selected &&
    css`
      border: 1px solid ${({theme}) => theme.colors.primary};
    `}
`;

export const SelectBoxTitle = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({theme}) => theme.fonts.semibold};
  color: ${({theme}) => theme.colors.title};
`;

export const SelectBoxDescription = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text};
`;

export const Footer = styled.View`
  justify-content: center;
  align-items: center;
  padding: 0 24px;
  padding-bottom: ${getBottomSpace() ? getBottomSpace() : RFValue(20)}px;
  width: 100%;
`;
