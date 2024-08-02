import React from "react";
import styled from "styled-components";

const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  background: url("https://img.freepik.com/free-photo/ai-generated-modern-styled-entryway_23-2150692317.jpg?t=st=1722170174~exp=1722173774~hmac=ad460d6b2700f24a71e5f6739398bd2bd413558ccda475b52a40f4fc9a8ca11f&w=1380")
    no-repeat center center/cover;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  overflow: hidden;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeroText = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: bold;
  line-height: 1.2;
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const HeroLink = styled.a`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: white;
  background-color: #ff6f61;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff4a3a;
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <Overlay />
      <Content>
        <HeroText>Transform Your Space with Elegance</HeroText>
        <HeroSubtitle>
          Experience the beauty of glass interiors and exteriors
        </HeroSubtitle>
        <HeroLink href="/contact">Get a Quote</HeroLink>
      </Content>
    </HeroSection>
  );
};

export default Hero;
