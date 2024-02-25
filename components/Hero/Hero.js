import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Patrick B Devaney <br />
      
      </SectionTitle>
      <SectionText>
        I am a Full-Stack Typescript developer with experience in Web3 and an interest in machine learning.   <br /> <br /> 
      
      </SectionText>
      <Button onClick={() => window.location = 'https://github.com/patrickbdevaney'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;