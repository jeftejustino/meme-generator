import React, { useState } from 'react';

import { Container, Section, Title } from './styles';

import Meme from '~/components/Meme';
import CustomText from '~/components/CustomText';

export default function Dashboard() {
  const [customText, setCustomText] = useState([]);

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
