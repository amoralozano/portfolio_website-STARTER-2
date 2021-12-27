import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { number: 1, text: "Graduated High School in 2020" },
  { number: 2, text: "Got Into Kenzie Academy " },
  { number: 3, text: "became Certified Front-End developer" },
  { number: 4, text: "became Certified Full-Stack developer" },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal accomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>#{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
