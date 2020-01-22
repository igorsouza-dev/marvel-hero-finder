import styled from 'styled-components';
import { screenSize } from 'styles/variables';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
export const Section = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px;
  height: max-content;
  width: 100%;
  max-width: 900px;
  border-radius: 4px;
  background: #fff;
  flex-direction: row;
  animation: glowing 1000ms ease-out alternate infinite;
  @keyframes glowing {
    0% {
      box-shadow: 0 0 -10px #b80000;
    }
    100% {
      box-shadow: 0 0 10px #b80000;
    }
  }
  @media only screen and (min-width: ${screenSize.mobileS}) and (max-width: ${screenSize.mobileL}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const Picture = styled.img`
  height: 100%;
  max-height: 300px;
  border-radius: 4px;
`;

export const Label = styled.span`
  font-weight: bold;
  color: #363131;
  font-size: 24px;
`;

export const Text = styled.span`
  font-family: 'Bowlby One SC', cursive;
  font-size: 18px;
  margin-bottom: 15px;
  margin-left: 10px;
  line-height: 24px;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const InfoText = styled.h1`
  color: #fff;
  text-align: center;
`;
export const ErrorText = styled.h2`
  color: #bcef00;
  text-align: center;
  font-weight: bold;
`;
export const Content = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
