import styled from 'styled-components';

export const Container = styled.div`
  background: radial-gradient(50% 50% at 50% 50%, #B80000 0%, #940000 15.1%, #6C0101 39.58%, #480101 69.27%, #380505 94.79%);
  height: 100%;
  overflow: auto;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 200px);
  grid-gap: 10px;
  padding: 20px;
`;
