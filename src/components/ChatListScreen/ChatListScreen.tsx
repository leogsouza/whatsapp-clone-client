import React from 'react';
import styled from 'styled-components';
import ChatList from './ChatList';
import ChatNavbar from './ChatNavbar';

const Container = styled.div`
  height: 100vh;
`;

const ChatListScreen: React.FC = () => (
  <Container>
    <ChatNavbar />
    <ChatList />
  </Container>
);

export default ChatListScreen;
