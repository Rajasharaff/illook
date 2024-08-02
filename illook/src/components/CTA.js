import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const CTASection = styled.section`
  padding: 2rem;
  text-align: center;
  background-color: #333;
  color: #fff;
`;

const CTAContent = styled(motion.div)`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CTAButton = styled(motion.button)`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: #333;
  background-color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ddd;
  }
`;

const ctaVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const CTA = () => {
  return (
    <CTASection>
      <CTAContent initial="hidden" animate="visible" variants={ctaVariants}>
        <h2>Ready to Transform Your Space?</h2>
        <p>
          Contact us today to get started with our bespoke glass solutions. Our
          team of experts is here to help you create a stunning and functional
          environment.
        </p>
        <CTAButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          Get a Quote
        </CTAButton>
      </CTAContent>
    </CTASection>
  );
};

export default CTA;
