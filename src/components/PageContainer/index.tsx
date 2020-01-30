import React from 'react';
import Header from 'components/Header';
import Trademark from 'components/Trademark';
import PropTypes from 'prop-types';
import { Container, Content } from './styles';

interface PageContainerProps {
  children: React.ReactNode;
}
const PageContainer: React.FC<PageContainerProps> = ({ children }) => (
  <Container>
    <Header />
    <Content>{children}</Content>
    <Trademark />
  </Container>
);

PageContainer.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PageContainer;
