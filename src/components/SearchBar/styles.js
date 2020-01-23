import styled from 'styled-components';

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
  transition: background 0.5s ease-out;
  &:hover {
    background: #710000;
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
  &::placeholder{
    font-size: 12px;
    color: #212121;
  }
`;
