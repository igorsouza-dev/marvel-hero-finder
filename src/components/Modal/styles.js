import styled from 'styled-components';
import { screenSize } from 'styles/variables';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0,0,0,0.4);
  z-index: 99999;
  display: flex;
  justify-content: center;
  align-items: center;


`;

export const Content = styled.div`
  width: 500px;
  height: 600px;
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  position: relative;
  svg {
    position: absolute;
    top: -20px;
    right: -20px;
    background: #fff;
    border: 0;
    border-radius: 50%;
    box-shadow: 0 0 12px 1px #000;

    &:hover {
      cursor: pointer;
    }
  }
  @media only screen and (min-width: ${screenSize.mobileS}) and (max-width: ${screenSize.mobileL}) {
    width: 100%;
    margin: 0 25px;
    height: 500px;

  }
`;
