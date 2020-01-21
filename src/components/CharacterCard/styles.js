import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 300px;

  background: #f3f3f3;
  border-radius: 4px;
  img {
    border-radius: 4px;
    width: 60%;
  }
  strong {
    font-family: 'Lobster', cursive;
  }
`;
