import FastImage from 'react-native-fast-image';
import {getStatusBarHeight, getBottomSpace} from 'react-native-iphone-x-helper';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.ImageBackground`
  background-color: ${({theme}) => theme.colors.background};
  height: 100%;
  flex: 1;
`;

export const Header = styled.View`
  flex: 1;
  margin-top: ${getBottomSpace()
    ? getStatusBarHeight() + RFValue(20)
    : RFValue(20)}px;
  padding: 0 24px;
`;

export const Footer = styled.View`
  justify-content: center;
  align-items: center;
  padding: 0 24px;
  padding-bottom: ${getBottomSpace() ? getBottomSpace() : RFValue(20)}px;
  width: 100%;
`;

export const Welcome = styled.View`
  margin-bottom: ${RFValue(20)}px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled(FastImage)`
  width: ${RFValue(90)}px;
  height: ${RFValue(90)}px;
  margin-bottom: ${RFValue(20)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(24)}px;
  text-align: center;
  color: ${({theme}) => theme.colors.title};
  font-family: ${({theme}) => theme.fonts.regular};
  margin-bottom: ${RFValue(6)}px;
`;

export const Description = styled.Text`
  font-size: ${RFValue(12)}px;
  text-align: center;
  color: ${({theme}) => theme.colors.text};
  font-family: ${({theme}) => theme.fonts.regular};
`;

export const TitleBold = styled.Text`
  font-family: ${({theme}) => theme.fonts.semibold};
`;

export const UserActions = styled.View`
  margin-bottom: ${RFValue(20)}px;
  width: 100%;
`;

export const Copyright = styled.View``;

export const MonoLogo = styled(FastImage)`
  width: ${RFValue(56)}px;
  height: ${RFValue(21)}px;
`;
