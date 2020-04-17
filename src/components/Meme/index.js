import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import Draggable from '~/components/Draggable';

import { Container, MemeContainer } from './styles';
import meme1 from '~/assets/memes/meme1.png';

export default function Meme({ options, setOptions }) {
  const [imagem, setImagem] = useState(meme1);
  const canvas = useRef(null);
  const memeRef = useRef(null);

  function onChange(files) {
    const reader = new FileReader();

    reader.onload = e => {
      setImagem(e.target.result);
    };

    reader.readAsDataURL(files[0]);
  }

  function handleDownload() {
    const lnk = document.createElement('a');
    let e;

    lnk.download = 'meme.png';

    lnk.href = canvas.current.toDataURL('image/png;base64');

    if (document.createEvent) {
      e = document.createEvent('MouseEvents');
      e.initMouseEvent(
        'click',
        true,
        true,
        window,
        0,
        0,
        0,
        0,
        0,
        false,
        false,
        false,
        false,
        0,
        null
      );

      lnk.dispatchEvent(e);
    } else if (lnk.fireEvent) {
      lnk.fireEvent('onclick');
    }
  }

  async function loadScreen() {
    const img = document.createElement('img');
    img.src = imagem;
    img.onload = () => {
      const h = (img.height * 550) / img.width;
      canvas.current.height = h;
      canvas.current.style.letterSpacing = '0px';
      const context = canvas.current.getContext('2d');
      context.clearRect(0, 0, canvas.current.width, canvas.current.height);
      context.drawImage(img, 0, 0, 550, h);
      context.beginPath();

      options.map(option => {
        if (option.bold) {
          context.font = `bold ${option.size}px Anton`;
        } else {
          context.font = `${option.size}px Anton`;
        }
        context.fillStyle = option.color;

        context.textBaseline = 'top';
        context.letterSpacing = '0px';
        context.fillText(option.text, option.left + 6, option.top + 10);

        if (option.shadow) {
          context.shadowColor = option.shadowColor;
          context.shadowBlur = 3;
          context.strokeStyle = option.shadowColor;
          context.lineWidth = 2;

          context.strokeText(option.text, option.left + 6, option.top + 10);
        }
      });
    };
  }

  useEffect(() => {
    loadScreen();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imagem, options]);

  function handleOption(index, option) {
    const opts = options;
    opts[index] = option;
    setOptions([...opts]);
  }

  return (
    <Container>
      <input
        type="file"
        onChange={e => {
          onChange(e.target.files);
        }}
      />
      <MemeContainer ref={memeRef}>
        <canvas ref={canvas} width="500" />

        {options.map((option, index) => (
          <Draggable
            key={String(index)}
            option={option}
            onChange={values => handleOption(index, values)}
          />
        ))}
      </MemeContainer>

      <button type="button" onClick={handleDownload}>
        Download MEME
      </button>
    </Container>
  );
}

Meme.propTypes = {
  options: PropTypes.array.isRequired,
  setOptions: PropTypes.func.isRequired,
};
