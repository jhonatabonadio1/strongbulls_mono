import React from 'react';

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
} from './styles';
import {useAuth} from '../../../../contexts/AuthContext';

export function Home() {
  const {user, signOut} = useAuth();

  function handleSignOut() {
    signOut();
  }
  return (
    <Container>
      <Header>
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
          <IconButton>
            <Icon name="bell" />
          </IconButton>
          <IconButton activeOpacity={1} onPress={handleSignOut}>
            <Icon name="log-out" />
          </IconButton>
        </IconsContainer>
      </Header>
      <Content />
    </Container>
  );
}
