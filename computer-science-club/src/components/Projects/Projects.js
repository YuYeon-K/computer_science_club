import React from 'react';
import { BlogCard, CardInfo, ExternalLinks, GridContainer, Hr, TitleContent, UtilityList, Tag, TagList } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle, h4, p } from '../../styles/GlobalComponents';
import { upcomingEvents } from '../../constants/constants'; // Assuming you have an array of upcoming events in constants

const UpcomingEvents = () => (
  <Section id="upcoming-events">
    <SectionDivider divider/>
    <SectionTitle>Upcoming Events</SectionTitle>
    <GridContainer>
      {upcomingEvents.map((event, index) => (
        <BlogCard key={index}>
          <TitleContent>
            <h4 title>{event.name}</h4>
            <Hr />
          </TitleContent>
          <CardInfo>{event.description}</CardInfo>
          <div>
            <TitleContent>Date</TitleContent>
            <p>{event.date}</p>
          </div>
          <UtilityList>
            <ExternalLinks href={event.link}>More Info</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default UpcomingEvents;
