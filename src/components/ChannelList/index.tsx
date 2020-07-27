import React from 'react';

import ChannelButton from '../ChannelButton';

import { Container, Category, AddCategoryIcon } from './styles';

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="chat-livre" />
      <ChannelButton channelName="trabalho" />
      <ChannelButton channelName="Geração Gamers" />
      <ChannelButton channelName="Minenaldo" />
      <ChannelButton channelName="PES2020" />
      <ChannelButton channelName="PES2020" />
    </Container>
  );
};

export default ChannelList;
