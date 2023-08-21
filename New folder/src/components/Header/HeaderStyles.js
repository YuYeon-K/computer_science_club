import styled from 'styled-components';
import { IoIosArrowDropdown } from 'react-icons/io';

export const Container = styled.div`
  display: flex;
  align-items: center; /* Center items vertically */
  justify-content: space-between; /* Distribute items along the main axis */

  padding: 1rem;
  padding-top: 2rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    justify-content: space-around; /* Adjust for smaller screens */
    padding: 0.5rem;
  }
`;

export const Div1 = styled.div`
  display: flex;
  align-items: center; /* Center items vertically */
`;

export const Div2 = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center; /* Center items vertically */

  @media ${(props) => props.theme.breakpoints.sm} {
    display: none; /* Hide navigation links on small screens */
  }
`;

export const Div3 = styled.div`
  display: none; /* Hide social icons on small screens */

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    align-items: center; /* Center items vertically */
  }
`;

export const NavLink = styled.a`
  font-size: 2rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  margin: 0 1rem;
  text-decoration: none; /* Remove underline */
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
`;

export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: none; /* Hide the contact dropdown button on small screens */
  }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '.75')};
  transform: ${({ isOpen }) => (isOpen ? 'scaleY(-1)' : 'scaleY(1)')};

  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`;

export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  padding: 8px;
  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 0 0.5rem;
  }
`;
