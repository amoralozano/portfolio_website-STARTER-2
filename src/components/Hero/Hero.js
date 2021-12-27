import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio!
      </SectionTitle>
      <SectionText>
        From typing my first line of code to coding for the future. My name is
        Abdael Mora and I'm a Full-Stack developer.
      </SectionText>
      <Button onClick={() => (window.location = "#about")}>
        Tell Me More!
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
