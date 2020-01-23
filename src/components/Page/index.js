import React from 'react';
import Header from 'components/Header';
import Trademark from 'components/Trademark';
import { Container, Content } from './styles';

export default function Page({ children }) {
  return (
    <Container>
      <Header />
      <Content>
        {children}
      </Content>
      <Trademark />
    </Container>
  );
}
