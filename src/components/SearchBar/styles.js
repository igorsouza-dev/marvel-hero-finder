import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  border: 0;
  background: #B80000;
  border-radius: 0 4px 4px 0;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  padding: 8px;
  width: 100px;
  height: 50px;
  transition: background 0.5s ease-out;
  &:hover {
    background: #810000;
  }
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
