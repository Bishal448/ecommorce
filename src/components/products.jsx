// src/components/Products.js
import React from 'react';

const Products = () => {
  return (
    <section id="product1" className="py-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-green-700">New Arrivals</h1>
        <p className="text-lg text-gray-600">All the latest picked from designer of our store</p>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Product items go here */}
        <div className="text-center">
          <img src="https://i.postimg.cc/d1LXBwTs/n1.jpg" alt="product" className="mx-auto mb-4"/>
          <h4 className="font-semibold text-lg">Product Name</h4>
          <p className="text-gray-600">$30</p>
        </div>
        {/* Add more product items as needed */}
      </div>
    </section>
  );
};

export default Products;
