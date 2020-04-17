import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: ${props => props.option.top}px;
  left: ${props => props.option.left}px;
  width: unset;
  cursor: move;
  color: transparent;
  line-height: 0.8;
  font-family: 'Anton';
  letter-spacing: 0px;
  padding: 9px 3px 5px 6px;
  white-space: nowrap;
  border: 1px dashed transparent;
  font-size: ${props => props.option.size}px;
  font-weight: ${props => (props.option.bold ? 'bold' : 'normal')};
`;
