import styled from 'styled-components';

export const Container = styled.div`
  > button {
    background: #fff;
    border: 1px solid #000;
    color: #000;
    padding: 8px 15px;
    border-radius: 5px;
    margin-bottom: 20px;
  }
`;

export const CheckBox = styled.div`
  background: ${props => (props.active ? '#333' : '#fff')};
  color: ${props => (props.active ? '#fff' : '#333')};
  border: 1px solid #333;
  display: inline-block;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  padding: 5px 8px;
`;

export const Remove = styled.button`
  background: #f00;
  color: #fff;
  padding: 8px 5px;
  font-size: 12px;
  border-radius: 5px;
  margin-left: 5px;
`;

export const InputText = styled.input`
  width: 100%;
  line-height: 30px;
  margin-bottom: 10px;
  padding: 0px 8px;
`;

export const InputSize = styled.input`
  width: 60px;
  text-align: center;
  margin-left: 5px;
`;

export const InputColor = styled.input`
  margin-left: 5px;
`;

export const DivText = styled.div`
  padding-bottom: 30px;
  border-bottom: 1px dashed #ccc;
  margin-bottom: 30px;

  .buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .bc {
      border: 1px solid #333;
      padding: 2px;
      height: 30px;
      display: flex;
      align-items: center;
    }
  }
`;
