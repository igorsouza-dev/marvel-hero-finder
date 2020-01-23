import styled from 'styled-components';
import { screenSize } from 'styles/variables';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  overflow:auto;
  padding-top: 70px;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: ${screenSize.mobileL}) {
    justify-content: center;
    align-items: center;
  }


`;
