import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ContactSection = styled.section`
  padding: 4rem;
  text-align: center;
  background-color: #f9f9f9;
`;

const ContactContent = styled(motion.div)`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const contactVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const Contact = () => {
  return (
    <ContactSection>
      <ContactContent
        initial="hidden"
        animate="visible"
        variants={contactVariants}
      >
        <h2>Contact Us</h2>
        <ContactForm>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
          <button type="submit">Submit</button>
        </ContactForm>
      </ContactContent>
    </ContactSection>
  );
};

export default Contact;
