import React from 'react';
import {
  CarouselButton,
  CarouselButtonDot,
  CarouselButtons,
  CarouselContainer,
  CarouselItemImg,
  CarouselMobileScrollNode
} from './TeamStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { TeamData } from '../../constants/constants';
import styled from 'styled-components';

const TeamMember = ({ member, activeMember, handleClick }) => (
  <CarouselMobileScrollNode>
    <TeamMemberContainer>
      <TeamMemberImage src={member.imageSrc} alt={member.name} />
      <TeamMemberDetails>
        <h2>{member.name}</h2>
        <p>{member.role}</p>
        <p>{member.bio}</p>
      </TeamMemberDetails>
    </TeamMemberContainer>
  </CarouselMobileScrollNode>
);

const TeamMemberContainer = styled.div`
  display: flex;
  flex-direction: column; /* Stack items vertically */
  align-items: center; /* Center align horizontally */
  text-align: center; /* Center align text */
`;

const TeamMemberImage = styled.img`
  width: 110px;
  height: 110px;
  margin-bottom: 10px; /* Adjust as needed */
`;

const TeamMemberDetails = styled.div``; /* You might not need additional styling here */

const MeetTheTeam = () => {
  const [activeMember, setActiveMember] = React.useState(0);

  const handleClick = (e, index) => {
    e.preventDefault();
    setActiveMember(index);
  };

  return (
    <Section id="team">
    <SectionDivider divider/>

      <SectionTitle>Meet the Team</SectionTitle>
      <CarouselContainer>
        {TeamData.map((member, index) => (
          <TeamMember
            key={index}
            member={member}
            activeMember={activeMember}
            handleClick={handleClick}
          />
        ))}
      </CarouselContainer>
      <CarouselButtons>
        {TeamData.map((member, index) => (
          <CarouselButton
            key={index}
            index={index}
            active={activeMember}
            onClick={(e) => handleClick(e, index)}
            type="button"
          >
            <CarouselButtonDot active={activeMember} />
          </CarouselButton>
        ))}
      </CarouselButtons>
    </Section>
  );
};

export default MeetTheTeam;
