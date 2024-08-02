import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const AboutSection = styled.section`
  padding: 4rem;
  text-align: center;
  background-color: #f9f9f9;
`;

const AboutContent = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
`;

const aboutVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const AboutUs = () => {
  return (
    <AboutSection>
      <AboutContent initial="hidden" animate="visible" variants={aboutVariants}>
        <h2>About Us</h2>
        <p>
          We are a leading company in glass interior and exterior solutions,
          providing top-notch services to transform your space into a modern,
          elegant, and functional environment. Our team of experts is dedicated
          to delivering customized solutions that meet your unique needs and
          preferences.
        </p>
        <p>
          With years of experience in the industry, we have built a reputation
          for excellence and innovation. We use only the highest quality
          materials and the latest technology to ensure that our projects not
          only meet but exceed your expectations.
        </p>
      </AboutContent>
    </AboutSection>
  );
};

export default AboutUs;
