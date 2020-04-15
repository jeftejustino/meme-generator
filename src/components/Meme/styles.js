import styled from 'styled-components';

export const Container = styled.div``;

export const MemeContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 500px;

  :hover .draggable {
    border-color: #000;
  }
`;
