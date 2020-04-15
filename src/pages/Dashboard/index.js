import React, { useState } from 'react';

import { Container, Section, Title } from './styles';

import Meme from '~/components/Meme';
import CustomText from '~/components/CustomText';

export default function Dashboard() {
  const [customText, setCustomText] = useState([
    {
      text: 'Teste Texto 1',
      size: 26,
      bold: true,
      color: '#ffffff',
      shadow: true,
      shadowColor: '#000000',
      left: 10,
      top: 10,
    },
    {
      text: 'Teste Texto 2',
      size: 26,
      bold: true,
      color: '#ffffff',
      shadow: true,
      shadowColor: '#000000',
      left: 20,
      top: 300,
    },
  ]);

  return (
    <Container>
      <Title>MEME GENERATOR</Title>
      <Section>
        <div>
          <Meme options={customText} setOptions={setCustomText} />
        </div>
        <div>
          <CustomText options={customText} setOptions={setCustomText} />
        </div>
      </Section>
    </Container>
  );
}
