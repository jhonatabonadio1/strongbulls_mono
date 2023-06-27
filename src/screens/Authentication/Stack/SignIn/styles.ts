import FastImage from 'react-native-fast-image';
import {getStatusBarHeight, getBottomSpace} from 'react-native-iphone-x-helper';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.black};
  height: 100%;
  flex: 1;
`;

export const Header = styled.View`
  flex: 1;
  margin-top: ${getBottomSpace()
    ? getStatusBarHeight() + RFValue(20)
    : RFValue(20)}px;
  padding: 0 24px;
  justify-content: center;
`;

export const Welcome = styled.View`
  margin-bottom: ${RFValue(20)}px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled(FastImage)`
  width: ${RFValue(190)}px;
  height: ${RFValue(190)}px;
`;

export const Footer = styled.View`
  padding: 0 24px;
  padding-top: ${RFValue(20)}px;
  padding-bottom: ${getBottomSpace() ? getBottomSpace() : RFValue(20)}px;
  width: 100%;
  background-color: ${({theme}) => theme.colors.shape};
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

export const Form = styled.View``;

export const Divider = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${RFValue(12)}px;
`;
export const DividerLine = styled.View`
  flex: 1;
  height: 1px;
  width: 100%;
  background-color: ${({theme}) => theme.colors.border};
`;
export const DividerText = styled.Text`
  padding: 0 12px;
  text-align: center;
  color: ${({theme}) => theme.colors.comment};
  font-size: ${RFValue(12)}px;
  font-family: ${({theme}) => theme.fonts.regular};
`;

export const ForgotPasswordButton = styled.TouchableOpacity`
  margin-bottom: ${RFValue(20)}px;
`;
export const ForgotPasswordButtonText = styled.Text`
  color: ${({theme}) => theme.colors.comment};
  font-family: ${({theme}) => theme.fonts.semibold};
  font-size: ${RFValue(12)}px;
  text-decoration: underline;
  text-decoration-color: ${({theme}) => theme.colors.comment};
`;

export const UserActions = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Copyright = styled.View`
  margin-top: ${RFValue(6)}px;
`;

export const TechLinkLogo = styled(FastImage)`
  width: ${RFValue(71)}px;
  height: ${RFValue(16)}px;
`;
