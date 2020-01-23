import React from 'react';
import { FaTimesCircle } from 'react-icons/fa';
import { Container, Content } from './styles';

export default function Modal({ children, onClose }) {
  return (
    <Container>
      <Content>
        <FaTimesCircle size={40} onClick={onClose} color="#B80000" />
        {children}
      </Content>
    </Container>
  );
}
