import Link from 'next/link';
import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color: 'white', height: '100%' }}>
          <img
            src="/images/header.png"
            alt="Computer Science Club Logo"
            style={{ width: '3rem', marginRight: '1rem' }}
          />
          <span>Computer Science Club</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <Link href="#about">
        <NavLink>About</NavLink>
      </Link>
      <Link href="#team">
        <NavLink>Team</NavLink>
      </Link>
      <Link href="#program">
        <NavLink>Program</NavLink>
      </Link>
      <Link href="#upcoming-events">
        <NavLink>Events</NavLink>
      </Link>
      <Link href="#achievements">
        <NavLink>Achievements</NavLink>
      </Link>
    </Div2>
    <Div3>
      <SocialIcons href="https://www.instagram.com/wcssspc2023/" target="_blank" rel="noopener noreferrer">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
