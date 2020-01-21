import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: ${(props) => props.size}px;
  height: 300px;

  background-image: url(${(props) => props.url});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 4px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);

  img {
    border-radius: 4px;
    height: 100%;
  }
  div {
    background: #B80000;
    width: 100%;
    display: flex;
    height: 48px;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    strong {
      color: #fff;
      text-transform: uppercase;
      text-overflow: clip;
      text-align: center;
    }
    border-radius: 0 0 4px 4px;
  }
  transition: box-shadow 1s ease-out;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 20px rgba(255,255,255, 0.5);
  }
`;
