import {Feather, MaterialCommunityIcons} from '@expo/vector-icons';
import FastImage from 'react-native-fast-image';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  height: 100%;
  background-color: ${({theme}) => theme.colors.background};
`;

export const Header = styled.View`
  padding: ${RFValue(16)}px 24px;
  height: ${RFPercentage(29)}px;
  background-color: ${({theme}) => theme.colors.primary};
`;
export const HeaderContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-style: solid;
  border-bottom-color: ${({theme}) => theme.colors.borderOpacityLight};
  border-bottom-width: 1px;
  padding-bottom: ${RFValue(12)}px;
  margin-bottom: ${RFValue(12)}px;
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

export const BlocksContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Block = styled.View`
  flex: 1;
  background: ${({theme}) => theme.colors.iconBackgroundOpacity};
  margin-right: ${RFValue(12)}px;
  border-radius: ${RFValue(16)}px;
  height: ${RFValue(85)}px;
  justify-content: center;
  align-items: center;
`;
export const BlockIcon = styled(MaterialCommunityIcons)`
  color: ${({theme}) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
  margin-bottom: ${RFValue(6)}px;
`;
export const BlockText = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.shape};
  font-size: ${RFValue(14)}px;
`;
export const BlockName = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.comment};
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;
`;
export const BlockSmallText = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(10)}px;
`;
export const Content = styled.ScrollView`
  flex: 1;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  margin-top: -${RFPercentage(2)}px;
  background-color: ${({theme}) => theme.colors.background};
  padding: ${RFValue(12)}px 24px;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.semibold};
  color: ${({theme}) => theme.colors.title};
  font-size: ${RFValue(16)}px;
`;
export const Section = styled.View``;
