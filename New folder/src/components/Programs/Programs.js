import React from 'react';
import { DiJavascript, DiPython, DiHtml53DEffects } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './ProgramsStyles';

const Technologies = () =>  (
  <Section id="program">
    <SectionDivider divider />
    <SectionTitle>Program</SectionTitle>
    <SectionText>
    This year, our focus will be directed towards mastering these programming languages:
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiPython size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Python</ListTitle>
          <ListParagraph>
            Earn a  <br />
            Certificate
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiHtml53DEffects size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>HTML/CSS</ListTitle>
          <ListParagraph>
            Build your own <br />
            Website
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiJavascript size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Javascript</ListTitle>
          <ListParagraph>
            Add complex <br />
            functions
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;