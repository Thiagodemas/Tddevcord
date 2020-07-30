import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>

        {Array.from(Array(6).keys()).map((n) => (
          <ChannelMessage
            key={n}
            author="Thiago Demas"
            date="19/05/2020"
            content="Hoje é o meu aniversário!"
          />
        ))}

        <ChannelMessage
          author="Ronaldo"
          date="19/05/2020"
          content={
            <>
              <Mention>@Thiago Demas</Mention>, me ensina a jogar PES,
              por favor?
            </>
          }
          hasMention
          isBot
        />
        {Array.from(Array(5).keys()).map((n) => (
          <ChannelMessage
            key={n}
            author="Thiago Demas"
            date="19/05/2020"
            content="Hoje é o meu aniversário!"
          />
        ))}
        <ChannelMessage
          author="Walter"
          date="19/05/2020"
          content={
            <>
              <Mention>@Thiago Demas</Mention>, Boa Tardeee!
            </>
          }
          hasMention
          isBot
        />
         <ChannelMessage
          author="Wendell"
          date="19/05/2020"
          content={
            <>
              <Mention>@Thiago Demas</Mention>, eu quero me tornar Flamenguista!!
            </>
          }
          hasMention
        
        />
        {Array.from(Array(5).keys()).map((n) => (
          <ChannelMessage
            key={n}
            author="Thiago Demas"
            date="19/05/2020"
            content="Hoje é o meu aniversário!"
          />
        ))}

      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
