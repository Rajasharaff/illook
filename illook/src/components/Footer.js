import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  padding: 1rem;
  text-align: center;
  background-color: #333;
  color: #fff;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 ilook Interiors & Exteriors. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
