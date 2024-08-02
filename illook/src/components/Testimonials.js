import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const TestimonialsSection = styled.section`
  padding: 2rem;
  text-align: center;
  background-color: #fff;
  background-image: url("https://img.freepik.com/free-photo/brown-wall-with-light-brown-background_1340-42821.jpg?uid=R157125373&ga=GA1.1.1469837747.1722106097&semt=ais_hybrid");
  background-size: cover;
  background-position: center;
`;

const TestimonialsContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const TestimonialItem = styled.div`
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const testimonialsVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, staggerChildren: 0.2 } },
};

const WhatsappButton = styled.a`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #25d366;
  color: white;
  border-radius: 50%;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s;

  &:hover {
    background-color: #1ebe5b;
  }
`;

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const initialTestimonials = [
      {
        text: "“Enga veetukku glass interior decoration seyyavum, inga order panninom. Velai romba naladhu, price reasonable-a irundhuchu.”",
        author: "Raja , komorapalayam",
      },
      {
        text: "“Glass partition setup panna best quality materials um technology um use pannanga. Naan kandippa recommend panren.”",
        author: "prakash , erode",
      },
      {
        text: "“Enga office-kku unique-aana glass designs kuduthadukku thanks. Romba pramaadham-a iruku.”",
        author: "Nesha Patel , erode",
      },
      {
        text: "“Clean-aana glass wall systems setup pannadhukku thanks. Enga bathroom look elevate aagiduchu.”",
        author: "Arjun, salem",
      },
      {
        text: "“Enga shop-kku glass storefronts inga panninom. Service um quality um top-notch-a irundhudhu.”",
        author: "Priya , thiruchengode ",
      },
      // Add more testimonials as needed
    ];

    // Shuffle testimonials
    const shuffledTestimonials = initialTestimonials.sort(
      () => 0.5 - Math.random()
    );
    setTestimonials(shuffledTestimonials);
  }, []);

  return (
    <TestimonialsSection>
      <h2>What Our Clients Say</h2>
      <TestimonialsContent
        initial="hidden"
        animate="visible"
        variants={testimonialsVariants}
      >
        {testimonials.slice(0, 3).map((testimonial, index) => (
          <TestimonialItem key={index}>
            <p>{testimonial.text}</p>
            <p>- {testimonial.author}</p>
          </TestimonialItem>
        ))}
      </TestimonialsContent>
      <WhatsappButton
        href="https://wa.me/7708943187"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={24} />
      </WhatsappButton>
    </TestimonialsSection>
  );
};

export default Testimonials;
