import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Tech Experience</SectionTitle>
    <SectionText>
      Ive worked with a range of technologies! from back-end to front-end to
      putting them together and making some amazing and unique applications!
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="4rem" />
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <SectionDivider />
          <ListParagraph>
            Experience with
            <br />
            GIT
            <br />
            JavaScript
            <br />
            HTML5
            <br />
            CSS3
            <br />
            TailwindCSS
            <br />
            React.js
            <br />
            Next.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="4rem" />
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <SectionDivider />
          <ListParagraph>
            Experience with
            <br />
            Python
            <br />
            Django
            <br />
            SQL
            <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
