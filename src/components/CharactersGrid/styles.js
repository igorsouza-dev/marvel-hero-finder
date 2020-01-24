import styled from 'styled-components';
import { device, screenSize } from 'styles/variables';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 200px);
  grid-gap: 10px;
  padding: 10px;
  justify-content: center;
  @media only screen and (max-width: ${screenSize.mobileL}) {
    margin-top: 25px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    max-width: ${screenSize.mobileL};
    overflow-x: scroll;
  }
  @media only screen and (${device.mobileL}) {
    grid-template-columns: repeat(2, 200px);
  }
  @media only screen and (${device.tablet}) {
    grid-template-columns: repeat(3, 200px);
  }
  @media only screen and (${device.laptop}) {
    grid-template-columns: repeat(5, 200px);
  }
`;

export const InfoText = styled.h2`
  color: #fff;
  text-align: center;
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
