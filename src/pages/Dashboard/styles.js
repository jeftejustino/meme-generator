import styled from 'styled-components';

export const Container = styled.div``;

export const Title = styled.div`
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 40px;
  padding-top: 40px;
  color: #333;
`;

export const Section = styled.section`
  display: flex;
  padding: 0px 50px;

  > div {
    flex-basis: 50%;
    width: 50%;
  }
`;
