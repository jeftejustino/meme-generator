import React from 'react';
import PropTypes from 'prop-types';

import { Container, CheckBox } from './styles';

export default function CustomText({ options, setOptions }) {
  function handleAddText() {
    setOptions([
      ...options,
      {
        text: 'Teste',
        size: 14,
        bold: true,
        color: '#000000',
        shadow: true,
        shadowColor: '#ffffff',
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
      {options.map((text, index) => (
        <div key={String(index)}>
          <textarea
            type="text"
            value={text.text}
            onChange={e => handleChange(e.target.value, index, 'text')}
          />

          <input
            type="color"
            value={text.color}
            onChange={e => handleChange(e.target.value, index, 'color')}
          />
          <input
            type="color"
            value={text.shadowColor}
            onChange={e => handleChange(e.target.value, index, 'shadowColor')}
          />

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

          <input
            type="number"
            value={text.left}
            onChange={e => handleChange(e.target.value, index, 'left')}
          />

          <input
            type="number"
            value={text.top}
            onChange={e => handleChange(e.target.value, index, 'top')}
          />

          <input
            type="number"
            value={text.size}
            onChange={e => handleChange(e.target.value, index, 'size')}
          />

          <button type="button" onClick={() => handleRemoveText(index)}>
            Remover
          </button>
        </div>
      ))}

      <button type="button" onClick={handleAddText}>
        Adicionar
      </button>
    </Container>
  );
}

CustomText.propTypes = {
  options: PropTypes.array.isRequired,
  setOptions: PropTypes.func.isRequired,
};
