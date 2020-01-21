import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, ${(props) => props.size}px);
  grid-gap: 10px;
`;
