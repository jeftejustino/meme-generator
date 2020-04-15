import styled from 'styled-components';

export const Container = styled.div``;

export const Title = styled.div`
  text-align: center;
  font-size: 26px;
  font-weight: bold;
  color: #333;
`;

export const Section = styled.section`
  display: flex;

  > div {
    flex-basis: 50%;
    width: 50%;
  }
`;
