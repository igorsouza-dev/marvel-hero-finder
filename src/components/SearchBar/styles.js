import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  border: 0;
  background: #d6d6d6;
  border-radius: 0 4px 4px 0;
  color: #212121;
  padding: 5px;
  height: 50px;
`;

export const Input = styled.input`
  background: #e2eeed;
  width: 100%;
  height: 50px;
  border: 0;
  border-radius: 4px 0 0 4px;
  padding: 10px;
  font-size: 24px;
  font-weight: bold;
  font-family: 'Bowlby One SC', cursive;
`;
