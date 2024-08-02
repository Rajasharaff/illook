import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PortfolioSection = styled.section`
  padding: 4rem;
  text-align: center;
  background-color: #f9f9f9;
`;

const PortfolioContent = styled(motion.div)`
  margin: 0 auto;
  max-width: 1200px;
`;

const PortfolioItem = styled(motion.div)`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  margin: 0 10px;
  &:hover img {
    transform: scale(1.1);
  }
  &:hover div {
    opacity: 1;
  }
`;

const PortfolioImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  transition: transform 0.3s ease;
  border-radius: 10px;
`;

const PortfolioOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  opacity: 0;
  transition: opacity 0.3s ease;
  padding: 1rem;
  text-align: center;
  border-radius: 10px;
`;

const PortfolioText = styled.div`
  margin: 1rem 0;
`;

const portfolioVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, staggerChildren: 0.2 } },
};

const serviceItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Portfolio = () => {
  const imageUrl =
    "https://img.freepik.com/free-photo/ai-generated-modern-styled-entryway_23-2150692301.jpg?t=st=1722165678~exp=1722169278~hmac=c920d70cccdcb0bc1687f33b23904b4eddd4836479c1a82b4c691e3aa7a012dd&w=1380";

  const portfolioItems = [
    {
      id: 1,
      title: "Project 1",
      description: "Beautiful glass partitions for a modern office space.",
      imageUrl,
    },
    {
      id: 2,
      title: "Project 2",
      description: "Elegant glass windows providing excellent natural light.",
      imageUrl,
    },
    {
      id: 3,
      title: "Project 3",
      description: "Stunning glass facades for a contemporary building.",
      imageUrl,
    },
    {
      id: 4,
      title: "Project 4",
      description: "Sophisticated glass interiors for a luxury hotel.",
      imageUrl,
    },
    {
      id: 5,
      title: "Project 5",
      description: "Innovative glass designs for an art gallery.",
      imageUrl,
    },
    {
      id: 6,
      title: "Project 6",
      description: "Functional glass features for a modern home.",
      imageUrl,
    },
  ];

  return (
    <PortfolioSection>
      <h2>Our Portfolio</h2>
      <PortfolioContent
        initial="hidden"
        animate="visible"
        variants={portfolioVariants}
      >
        <Slider {...settings}>
          {portfolioItems.map((item) => (
            <Link
              to={`/portfolio/${item.id}`}
              key={item.id}
              style={{ textDecoration: "none" }}
            >
              <PortfolioItem variants={serviceItemVariants}>
                <PortfolioImage src={item.imageUrl} alt={item.title} />
                <PortfolioOverlay>
                  <h3>{item.title}</h3>
                  <PortfolioText>{item.description}</PortfolioText>
                </PortfolioOverlay>
              </PortfolioItem>
            </Link>
          ))}
        </Slider>
      </PortfolioContent>
    </PortfolioSection>
  );
};

export default Portfolio;
