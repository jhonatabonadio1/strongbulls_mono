import {RFValue} from 'react-native-responsive-fontsize';
import {css} from 'styled-components';
import styled from 'styled-components/native';

type ButtonProps = {
  outline?: boolean;
};

export const Container = styled.TouchableOpacity<ButtonProps>`
  height: ${RFValue(50)}px;
  justify-content: center;
  border-radius: ${RFValue(35)}px;
  align-items: center;
  background-color: ${({theme}) => theme.colors.green};
  width: 100%;
  border: 2px solid ${({theme}) => theme.colors.green};

  ${({outline}) =>
    outline &&
    css`
      background-color: transparent;
    `}
`;

export const Title = styled.Text<ButtonProps>`
  font-family: ${({theme}) => theme.fonts.semibold};
  color: ${({theme}) => theme.colors.black};

  ${({outline}) =>
    outline &&
    css`
      color: ${({theme}) => theme.colors.green};
    `}
`;
