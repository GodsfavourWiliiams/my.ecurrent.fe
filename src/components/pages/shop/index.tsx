import React from 'react';
import { TestimonialCarousel } from '../home/testimonials';
import ViewProduct from './view-product';

const ShopPage = () => {
  return (
    <div className="space-y-10">
      <ViewProduct />
      <div>
        <hr className="app-container" />
        <TestimonialCarousel />
      </div>
    </div>
  );
};

export default ShopPage;
