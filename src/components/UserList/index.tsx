import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="Thiago Demas" />

      <Role>Offline - 20</Role>
      <UserRow nickname="Diego Fernandes" isBot />
      <UserRow nickname="Walter" isBot />
      <UserRow nickname="Manuel" isBot/>
      <UserRow nickname="Ronaldo " isBot />
      <UserRow nickname="Dekisu" />
      <UserRow nickname="Emerson" />
      <UserRow nickname="Daiany" />
      <UserRow nickname="Junior" />
      <UserRow nickname="Daisy" />
      <UserRow nickname="Gardenia" />
      <UserRow nickname="Fellype" />
      <UserRow nickname="Gabi" />
      <UserRow nickname="Cris" />
      <UserRow nickname="Bruce" />
      <UserRow nickname="Marcos" />
      <UserRow nickname="Giovanni" />
      <UserRow nickname="Yanne" />
      <UserRow nickname="Will" />
    </Container>
  );
};

export default UserList;
