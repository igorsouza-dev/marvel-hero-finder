import styled from 'styled-components';

export const Container = styled.div`
  background-image: linear-gradient(25deg, #33000c, #67041c, #a20c2a, #e01639);
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 150px);
`;

export const CharCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 200px;

  img {
    border-radius: 50%;
    height: 50px;
    width: 50px;
  }
`;
