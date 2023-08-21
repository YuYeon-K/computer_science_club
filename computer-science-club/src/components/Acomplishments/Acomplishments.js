import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 25, text: 'Members'},
  { number: 35, text: 'Hours of Lesson', },
  { number: 7, text: 'Instagram Followers', },
];

const Acomplishments = () => (
  <Section id = "achievements">
    <SectionDivider divider/>
    <SectionTitle>Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;