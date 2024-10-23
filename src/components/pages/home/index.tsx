import React from 'react';
import StoryAndTestimonial from './story-testimonies';
import { TestimonialCarousel } from './testimonials';
import Product from './product-section';

const Home = () => {
  return (
    <div>
      <StoryAndTestimonial />
      <TestimonialCarousel />
      <Product />
    </div>
  );
};

export default Home;
