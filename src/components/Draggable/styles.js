import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: unset;
  cursor: move;
  color: transparent;
  line-height: 0.8;
  letter-spacing: -2px;
  padding: 3px 6px;
  white-space: nowrap;
  border: 1px dashed transparent;
  font-size: ${props => props.option.size}px;
  font-weight: ${props => (props.option.bold ? 'bold' : 'normal')};
`;
