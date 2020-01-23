import styled from 'styled-components';

export const Container = styled.nav`
  height: 60px;
  background: #BD0000;
  box-shadow: 0 0 12px 3px #000;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  p {
    color: #fff;
    font-size: 10px;
    width: 10px;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const Logo = styled.img`
  padding: 10px;
  height: 48px;
  flex: 1;

`;

export const Placeholder = styled.div`
  visibility: hidden;
  width: 10px;
  height: 10px;
`;
export const Divider = styled.div`
  width: 2px;
  background: rgba(255,255,255,0.6);
  height: 40px;
  margin-right: 10px;
`;
export const Back = styled.button`
  border: 0;
  border-radius: 50%;
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  background: transparent;

`;
