import styled from 'styled-components';
import { screenSize } from 'styles/variables';

export const Container = styled.div`
  background: radial-gradient(
    50% 50% at 50% 50%,
    #b80000 0%,
    #940000 15.1%,
    #6c0101 39.58%,
    #480101 69.27%,
    #380505 94.79%
  );
  background-repeat: no-repeat;
  height: 100%;
  overflow: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  padding: 20px;

`;
export const Logo = styled.img`
  width: 375px;

  @media only screen and (max-width: ${screenSize.mobileL}) {
    width: 300px;
  }
`;

export const SubTitle = styled.h2`
  color: #fff;
  margin-bottom: 25px;
`;

export const LoadingText = styled.strong`
  font-size: 36px;
  color: #fff;
  align-self: stretch;
  text-align: center;
`;

export const Divider = styled.div`
  margin: 10px;
  height: 4px;
  width: 370px;
  background: #fff;

  @media only screen and (max-width: ${screenSize.mobileL}) {
    width: 305px;
  }
`;
