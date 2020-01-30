import React from 'react';
import { FaAngleLeft } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import {
  Container,
  Logo,
  LogoContainer,
  Back,
  Divider,
  Placeholder,
} from './styles';

const Header: React.FC = () => {
  const history = useHistory();
  return (
    <Container>
      <Back onClick={() => history.goBack()}>
        <FaAngleLeft color="#fff" size={36} />
      </Back>
      <LogoContainer onClick={() => history.push('/')}>
        <Logo src="/marvel.svg" alt="marvel" />
        <Divider />
        <p>Character finder</p>
      </LogoContainer>
      <Placeholder />
    </Container>
  );
};
export default Header;
