import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  align-items: center;
  overflow:auto;
`;
export const TopContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  align-self: stretch;
`;

export const Back = styled.button`
  border: 0;
  border-radius: 4px;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  background: #8b0000;
  padding: 10px;
  transition: background 0.5s ease-out;
  &:hover {
    background: #710000;
  }

`;
