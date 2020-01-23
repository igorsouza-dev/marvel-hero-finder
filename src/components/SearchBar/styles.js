import styled from 'styled-components';
import { screenSize } from 'styles/variables';

export const Container = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  background: #B80000;
  border-radius: 0 4px 4px 0;
  color: #fff;
  width: 70px;
  height: 50px;
  padding: 10px;
  margin-right: 10px;
  transition: background 0.5s ease-out;
  &:hover {
    background: #710000;
  }
`;

export const Input = styled.input`
  background: #e2eeed;
  width: 100%;
  max-width: 400px;
  margin-left: 10px;
  height: 50px;
  border: 0;
  border-radius: 4px 0 0 4px;
  padding: 10px;
  font-size: 24px;
  font-weight: bold;
  &::placeholder{
    font-size: 12px;
    color: #212121;
  }
  @media only screen and (max-width: ${screenSize.mobileL}) {
    max-width: 245px;
    font-size: 18px;

    &::placeholder{
      font-size: 10px;
    color: #212121;
    }
  }

`;
