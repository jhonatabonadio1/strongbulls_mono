import {Feather} from '@expo/vector-icons';
import FastImage from 'react-native-fast-image';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  height: 100%;
  background-color: ${({theme}) => theme.colors.background};
`;

export const Header = styled.View`
  padding: ${RFValue(16)}px 24px;
  background-color: ${({theme}) => theme.colors.primary};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const UserContainerButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;
export const UserAvatar = styled(FastImage)`
  width: ${RFValue(42)}px;
  height: ${RFValue(42)}px;
  border-radius: ${RFValue(50)}px;
  margin-right: ${RFValue(12)}px;
`;
export const UserInfos = styled.View``;
export const UserGreeting = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.shape};
  font-size: ${RFValue(12)}px;
`;
export const UserName = styled.Text`
  font-family: ${({theme}) => theme.fonts.semibold};
  color: ${({theme}) => theme.colors.shape};
  font-size: ${RFValue(14)}px;
`;

export const IconsContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const IconButton = styled.TouchableOpacity`
  margin-left: ${RFValue(12)}px;
  border-radius: ${RFValue(50)}px;
  width: ${RFValue(32)}px;
  height: ${RFValue(32)}px;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.colors.iconBackgroundOpacity};
`;

export const Icon = styled(Feather)`
  color: ${({theme}) => theme.colors.shape};
  font-size: ${RFValue(16)}px;
`;

export const Content = styled.View`
  flex: 1;
`;
