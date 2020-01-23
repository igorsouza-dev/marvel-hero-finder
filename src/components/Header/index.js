import React from 'react';
import { FaAngleLeft } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { Container, Logo, Back } from './styles';

export default function Header() {
  const history = useHistory();
  return (
    <Container>
      <Back onClick={() => history.goBack()}>
        <FaAngleLeft color="#fff" size={32} />
      </Back>
      <Logo src="/marvel.svg" alt="marvel" onClick={() => history.push('/')} />
    </Container>
  );
}
