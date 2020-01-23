import React from 'react';
import Header from 'components/Header';
import Trademark from 'components/Trademark';
import PropTypes from 'prop-types';
import { Container, Content } from './styles';

function PageContainer({ children }) {
  return (
    <Container>
      <Header />
      <Content>{children}</Content>
      <Trademark />
    </Container>
  );
}

PageContainer.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PageContainer;
