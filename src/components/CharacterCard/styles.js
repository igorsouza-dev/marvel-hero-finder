import styled from 'styled-components';
import { screenSize } from 'styles/variables';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: ${(props) => props.size}px;
  height: 300px;

  background-image: url(${(props) => props.url});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 4px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  border: solid 2px #363131;
  transition: box-shadow 0.5s ease-out;
  flex-shrink: 0;
  @media only screen and (max-width: ${screenSize.mobileL}) {
    margin: 5px;
  }
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 20px #b80000;
  }
  img {
    border-radius: 4px;
    height: 100%;
  }
  div {
    background: #b80000;
    width: 100%;
    display: flex;
    height: 48px;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    strong {
      color: #fff;
      text-transform: uppercase;
      text-overflow: clip;
      text-align: center;
    }
    border-radius: 0 0 4px 4px;
  }
`;
