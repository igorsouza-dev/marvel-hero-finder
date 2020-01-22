import styled from 'styled-components';
import { device, screenSize } from 'styles/variables';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, ${(props) => props.size}px);
  grid-gap: 10px;
  padding: 10px;
  @media only screen and (max-width: ${screenSize.mobileL}) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    max-width: ${screenSize.mobileL};
    overflow-x: scroll;
  }
  @media only screen and (${device.mobileL}) {
    grid-template-columns: repeat(2, ${(props) => props.size}px);
  }
  @media only screen and (${device.tablet}) {
    grid-template-columns: repeat(3, ${(props) => props.size}px);
  }
  @media only screen and (${device.laptop}) {
    grid-template-columns: repeat(5, ${(props) => props.size}px);
  }
`;
