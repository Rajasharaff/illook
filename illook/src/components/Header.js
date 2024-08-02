import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: rgba(51, 51, 51, 0.9);
  color: #fff;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Nav = styled.nav`
  @media (max-width: 768px) {
    position: absolute;
    top: 60px; /* Adjust according to the header height */
    left: 0;
    width: 100%;
    background-color: rgba(51, 51, 51, 0.9);
    z-index: 999;
    transition: max-height 0.3s ease-out;
    overflow: hidden;
    max-height: ${(props) =>
      props.open ? "300px" : "0"}; /* Adjust max height based on content */
  }
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 1rem 0;
    gap: 0.5rem;
  }
`;

const NavItem = styled.li`
  a {
    color: #fff;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #ddd;
    }
  }
`;

const SearchBar = styled.input`
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  margin-right: 1rem;
  outline: none;

  @media (max-width: 768px) {
    display: none;
  }
`;

const CallToAction = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: #ff6f61;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff4a3a;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderContainer>
      <Logo>ilook Interiors & Exteriors</Logo>
      <MobileIcon onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </MobileIcon>
      <Nav open={isOpen}>
        <NavList>
          <NavItem>
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/about" onClick={toggleMenu}>
              About Us
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/services" onClick={toggleMenu}>
              Services
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/portfolio" onClick={toggleMenu}>
              Portfolio
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/blog" onClick={toggleMenu}>
              Blog
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/contact" onClick={toggleMenu}>
              Contact
            </Link>
          </NavItem>
        </NavList>
      </Nav>
      <SearchBar type="text" placeholder="Search..." />
      <CallToAction>Get a Quote</CallToAction>
    </HeaderContainer>
  );
};

export default Header;
