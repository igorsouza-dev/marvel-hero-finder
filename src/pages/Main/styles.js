import styled from 'styled-components';

export const Container = styled.div`
  background: radial-gradient(50% 50% at 50% 50%, #B80000 0%, #940000 15.1%, #6C0101 39.58%, #480101 69.27%, #380505 94.79%);
  height: 100%;
  overflow: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
`;

export const Header = styled.div`
  display: flex;
  width: 60%;
  margin-bottom: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SearchBar = styled.input`
  background: #E2EEED;
  width: 100%;
  height: 50px;
  border: 0;
  border-radius: 4px;
  padding: 10px;
  font-size: 24px;
  font-weight: bold;
  font-family: 'Bowlby One SC', cursive;
`;

export const Title = styled.h1`
  color: #fff;
`;

export const SubTitle = styled.h2`
  color: #fff;
`;
