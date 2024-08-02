import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const BlogSection = styled.section`
  padding: 4rem;
  text-align: center;
`;

const BlogContent = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const BlogItem = styled(motion.div)`
  width: 300px;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const BlogImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 5px 5px 0 0;
`;

const blogVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const loadingVariants = {
  animate: {
    scale: [1, 1.2, 1],
    opacity: [1, 0.8, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Blog = () => {
  // Placeholder for loading state
  const isLoading = false;

  const blogPosts = [
    {
      title: "Stylish Home Interiors",
      summary:
        "Explore the latest trends in home interior designs and decor to make your space cozy and modern.",
      imageUrl:
        "https://img.freepik.com/free-photo/house-interior-background-zoom-calls_23-2149684471.jpg?uid=R157125373&ga=GA1.1.1469837747.1722106097&semt=ais_hybrid",
    },
    {
      title: "Modern Balcony Designs",
      summary:
        "Check out these modern balcony designs with glass railings for a chic and stylish outdoor space.",
      imageUrl:
        "https://img.freepik.com/free-photo/balcony-with-glass-railings_1203-2079.jpg?uid=R157125373&ga=GA1.1.1469837747.1722106097&semt=ais_hybrid",
    },
    {
      title: "Elegant Living Room Ideas",
      summary:
        "Discover elegant living room ideas to elevate your home's ambiance with a touch of sophistication.",
      imageUrl:
        "https://img.freepik.com/free-photo/empty-door-living-room-interior-background_1339-4844.jpg?uid=R157125373&ga=GA1.1.1469837747.1722106097&semt=ais_hybrid",
    },
    {
      title: "Urban Skyline Views",
      summary:
        "Experience breathtaking urban skyline views and the best places to catch these amazing sights.",
      imageUrl:
        "https://img.freepik.com/free-photo/urban-scene-skyline-morning-view-metropolis-concept_53876-23186.jpg?uid=R157125373&ga=GA1.1.1469837747.1722106097&semt=ais_hybrid",
    },
    {
      title: "Luxurious Dining Settings",
      summary:
        "Get inspired by luxurious dining settings that add a touch of elegance to your special occasions.",
      imageUrl:
        "https://img.freepik.com/free-photo/black-wedding-background-restaurant-tableware_1203-3980.jpg?uid=R157125373&ga=GA1.1.1469837747.1722106097&semt=ais_hybrid",
    },
    {
      title: "Modern Bathroom Designs",
      summary:
        "Explore modern bathroom designs featuring contemporary fixtures and sleek aesthetics.",
      imageUrl:
        "https://img.freepik.com/free-photo/3d-rendering-modern-wood-stone-white-bathroom_105762-2127.jpg?uid=R157125373&ga=GA1.1.1469837747.1722106097&semt=ais_hybrid",
    },
  ];

  return (
    <BlogSection>
      <h2>Blog</h2>
      {isLoading ? (
        <motion.div variants={loadingVariants} animate="animate">
          Loading...
        </motion.div>
      ) : (
        <BlogContent initial="hidden" animate="visible" variants={blogVariants}>
          {blogPosts.map((post, index) => (
            <BlogItem key={index} variants={itemVariants}>
              <BlogImage src={post.imageUrl} alt={post.title} />
              <h3>{post.title}</h3>
              <p>{post.summary}</p>
            </BlogItem>
          ))}
        </BlogContent>
      )}
    </BlogSection>
  );
};

export default Blog;
