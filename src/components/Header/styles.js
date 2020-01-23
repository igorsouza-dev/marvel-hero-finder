import styled from 'styled-components';

export const Container = styled.nav`
  height: 60px;
  background: #BD0000;
  box-shadow: 0 0 12px 3px #000;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  padding: 10px;
`;

export const Logo = styled.img`
  padding: 10px;
  height: 48px;
  flex: 1;
  &:hover {
    cursor: pointer;
  }
`;

export const Back = styled.button`
  border: 0;
  border-radius: 50%;
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  padding: 10px;
  background: transparent;

`;
