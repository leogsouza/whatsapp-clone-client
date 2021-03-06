import { Toolbar } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const Container = styled(Toolbar)`
  background-color: var(--primary-bg);
  color: var(--primary-text);
  font-size: 20px;
  line-height: 40px;
`;

const ChatNavbar: React.FC = () => <Container>WhatsApp Clone</Container>;

export default ChatNavbar;
