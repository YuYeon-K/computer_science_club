import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome to<br />
          WCSS Computer Science Club!
        </SectionTitle>
        <SectionText>
        Empowering Innovation of High School Students
        </SectionText>
        <Button onClick={() => window.open('https://centennial.dsbn.org/', '_blank')}>Welland Centennial</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;