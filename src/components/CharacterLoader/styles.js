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
  border-radius: 4px;
  background: #fff;
  flex-direction: row;

  @media only screen and (min-width: ${screenSize.mobileS}) and (max-width: ${screenSize.mobileL}) {
    flex-direction: column;
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
