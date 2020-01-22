import styled from 'styled-components';

export const Container = styled.div`
  background: radial-gradient(
    50% 50% at 50% 50%,
    #b80000 0%,
    #940000 15.1%,
    #6c0101 39.58%,
    #480101 69.27%,
    #380505 94.79%
  );
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

export const SubTitle = styled.h2`
  color: #fff;
  margin-bottom: 15px;
`;
