import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  CheckBox,
  Remove,
  InputText,
  InputSize,
  InputColor,
  DivText,
} from './styles';

export default function CustomText({ options, setOptions }) {
  function handleAddText() {
    setOptions([
      ...options,
      {
        text: 'Teste',
        size: 42,
        bold: true,
        color: '#ffffff',
        shadow: true,
        shadowColor: '#000000',
        left: 0,
        top: 0,
      },
    ]);
  }

  function handleChange(value, index, type) {
    options[index][type] = value;
    setOptions([...options]);
  }

  function handleRemoveText(index) {
    options.splice(index, 1);
    setOptions([...options]);
  }

  return (
    <Container>
      <button type="button" onClick={handleAddText}>
        Adicionar Texto
      </button>

      {options.map((text, index) => (
        <DivText key={String(index)}>
          <InputText
            type="text"
            value={text.text}
            onChange={e => handleChange(e.target.value, index, 'text')}
          />
          <div className="buttons">
            <div className="bc">
              Texto
              <InputColor
                type="color"
                value={text.color}
                onChange={e => handleChange(e.target.value, index, 'color')}
              />
            </div>
            <CheckBox
              active={text.bold}
              onClick={() => handleChange(!text.bold, index, 'bold')}
            >
              Bold
            </CheckBox>
            <CheckBox
              active={text.shadow}
              onClick={() => handleChange(!text.shadow, index, 'shadow')}
            >
              Shadow
            </CheckBox>
            <div className="bc">
              Sombra
              <InputColor
                type="color"
                value={text.shadowColor}
                onChange={e =>
                  handleChange(e.target.value, index, 'shadowColor')
                }
              />
            </div>
            {/* <input
            type="number"
            value={text.left}
            onChange={e => handleChange(e.target.value, index, 'left')}
          />

          <input
            type="number"
            value={text.top}
            onChange={e => handleChange(e.target.value, index, 'top')}
          /> */}
            <div className="bc">
              Tamanho
              <InputSize
                type="number"
                value={text.size}
                onChange={e => handleChange(e.target.value, index, 'size')}
              />
            </div>
            <Remove type="button" onClick={() => handleRemoveText(index)}>
              Remover
            </Remove>
          </div>
        </DivText>
      ))}
    </Container>
  );
}

CustomText.propTypes = {
  options: PropTypes.array.isRequired,
  setOptions: PropTypes.func.isRequired,
};
