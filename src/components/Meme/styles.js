import styled from 'styled-components';

export const Container = styled.div`
  > button {
    margin: 20px 0 20px 170px;
    border-radius: 4px;
    background: #07f;
    color: #fff;
    padding: 8px 10px;
  }
`;

export const MemeContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 500px;

  :hover .draggable {
    border-color: #000;
  }
`;
