import React from 'react';
import PropTypes from 'prop-types';

import { FaTimesCircle } from 'react-icons/fa';
import { Container, Content } from './styles';

interface ModalProps {
  children: React.ReactNode;
  onClose(): void;
}
const Modal: React.FC<ModalProps> = ({ children, onClose }) => (
  <Container>
    <Content>
      <FaTimesCircle size={40} onClick={onClose} color="#B80000" />
      {children}
    </Content>
  </Container>
);

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
