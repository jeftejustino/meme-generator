import styled from 'styled-components';

export const Container = styled.div``;

export const CheckBox = styled.div`
  background: ${props => (props.active ? '#333' : '#ccc')};
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
