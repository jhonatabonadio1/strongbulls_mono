import React from 'react';
import {useTheme} from 'styled-components';

import {
  Container,
  Content,
  Header,
  IconsContainer,
  Icon,
  IconButton,
  UserAvatar,
  UserContainerButton,
  UserGreeting,
  UserInfos,
  UserName,
  HeaderContent,
  Title,
  Section,
  BlocksContainer,
  Block,
  BlockText,
  BlockName,
  BlockIcon,
  BlockSmallText,
} from './styles';
import {useAuth} from '../../../../contexts/AuthContext';

export function Home() {
  const {user, signOut} = useAuth();
  const theme = useTheme();

  function handleSignOut() {
    signOut();
  }

  return (
    <Container>
      <Header>
        <HeaderContent>
          <UserContainerButton activeOpacity={1}>
            <UserAvatar
              source={{
                uri: 'https://as2.ftcdn.net/v2/jpg/03/31/69/91/1000_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg',
              }}
            />
            <UserInfos>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>{user.name}</UserName>
            </UserInfos>
          </UserContainerButton>
          <IconsContainer>
            <IconButton activeOpacity={1}>
              <Icon name="bell" />
            </IconButton>
            <IconButton activeOpacity={1} onPress={handleSignOut}>
              <Icon name="log-out" />
            </IconButton>
          </IconsContainer>
        </HeaderContent>

        <BlocksContainer>
          <Block style={{marginLeft: 0}}>
            <BlockIcon name="ruler" style={{color: theme.colors.green}} />
            <BlockText>
              1.85 <BlockSmallText>m</BlockSmallText>
            </BlockText>
            <BlockName>Altura</BlockName>
          </Block>
          <Block>
            <BlockIcon
              name="arrow-left-right"
              style={{color: theme.colors.orange}}
            />
            <BlockText>
              78 <BlockSmallText>kg</BlockSmallText>
            </BlockText>
            <BlockName>PESO</BlockName>
          </Block>
          <Block style={{marginRight: 0}}>
            <BlockIcon
              name="scale-bathroom"
              style={{color: theme.colors.purple}}
            />
            <BlockText>
              22.8 <BlockSmallText>kg/m2</BlockSmallText>
            </BlockText>
            <BlockName>IMC</BlockName>
          </Block>
        </BlocksContainer>
      </Header>
      <Content showsVerticalScrollIndicator={false}>
        <Section>
          <Title>Treinos de hoje</Title>
        </Section>
        <Section>
          <Title>Treino de hoje</Title>
        </Section>
        <Section>
          <Title>Treino de amanhã</Title>
        </Section>
      </Content>
    </Container>
  );
}
