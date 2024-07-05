import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <h4>Trade-in-fair</h4>
      <h2>Super value deals</h2>
      <h1>On all Products</h1>
      <p>Save more with coupons and up to 70% off!</p>
      <button className="bg-blue-500 text-white px-4 py-2 mt-4">Shop Now</button>
    </section>
  );
};

export default Hero;
