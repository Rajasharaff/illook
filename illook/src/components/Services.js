import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ServicesSection = styled.section`
  padding: 4rem;
  text-align: center;
  background-image: url("https://img.freepik.com/free-photo/beautiful-dreamy-aesthetic-landscape_23-2151445734.jpg?t=st=1722337626~exp=1722341226~hmac=bf966324b81cf1676d20e80934a6ec90a7b880fb062120e25672487dbd374f1d&w=1060");
  background-size: cover;
  background-position: center;
`;

const ServicesContent = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const ServiceItem = styled(motion.div)`
  width: 300px;
  padding: 1rem;
  border: 2px solid #ddd;
  border-radius: 6px;
  background-image: url("");
  background-size: cover;
  background-position: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const servicesVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, staggerChildren: 0.2 } },
};

const serviceItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Services = () => {
  const servicesList = [
    {
      title: "Aluminium Scrap",
      description:
        "High-quality aluminium scrap available for recycling and industrial use.",
    },
    {
      title: "Banks Interior Decorators",
      description:
        "Expert interior decoration services tailored specifically for banking environments.",
    },
    {
      title: "Beauty Parlours Interior Decorators",
      description:
        "Stylish and functional interior decoration for beauty parlours to enhance customer experience.",
    },
    {
      title: "Cinema Hall Interior Decorators",
      description:
        "Innovative interior solutions for cinema halls, ensuring comfort and a superior viewing experience.",
    },
    {
      title: "Corporate Interior Decorators",
      description:
        "Professional interior decoration services for corporate offices, designed to boost productivity and aesthetics.",
    },
    {
      title: "Discotheques Interior Decorators",
      description:
        "Creative and vibrant interior decoration for discotheques, offering an exceptional nightlife experience.",
    },
    {
      title: "Exhibition Interior Decorators",
      description:
        "Specialized interior decoration for exhibitions, creating impactful and engaging displays.",
    },
    {
      title: "Hospital Interior Decorators",
      description:
        "Functional and patient-friendly interior decoration solutions for hospitals and healthcare facilities.",
    },
    {
      title: "Hotel Interior Decorators",
      description:
        "Luxurious and welcoming interior decoration for hotels, enhancing guest satisfaction and comfort.",
    },
    {
      title: "Interior Decorator Apartment",
      description:
        "Customized interior decoration services for apartments, optimizing space and style.",
    },
    {
      title: "Interior Decorator False Ceiling",
      description:
        "Expert installation and design of false ceilings, adding elegance and functionality to any space.",
    },
  ];

  return (
    <ServicesSection>
      <h2>Our Services</h2>
      <ServicesContent
        initial="hidden"
        animate="visible"
        variants={servicesVariants}
      >
        {servicesList.map((service, index) => (
          <ServiceItem key={index} variants={serviceItemVariants}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </ServiceItem>
        ))}
      </ServicesContent>
    </ServicesSection>
  );
};

export default Services;
