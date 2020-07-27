import React from 'react';
import { Container, Separator } from './styles';

const ServerList: React.FC = () => {
    return (
        <Container>
            <ServerButton isHome/>

            <Separator />

            <ServerButton />
            <ServerButton />
            <ServerButton hasNotification />
            <ServerButton mentions={3}/>
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton mentions={19}/>
            <ServerButton />
            <ServerButton />
            <ServerButton mentions={2}/>
        
        </Container>
    );
};

export default ServerList;