import React from 'react';

const Feature = () => {
  const features = [
    { src: "https://i.postimg.cc/PrN2Y6Cv/f1.png", text: "Free Shipping" },
    { src: "https://i.postimg.cc/qvycxW4q/f2.png", text: "Online Order" },
    { src: "https://i.postimg.cc/1Rdphyz4/f3.png", text: "Save Money" },
    { src: "https://i.postimg.cc/GpYc2JFZ/f4.png", text: "Promotions" },
    { src: "https://i.postimg.cc/4yFCwmv6/f5.png", text: "Happy Sell" },
    { src: "https://i.postimg.cc/gJN1knTC/f6.png", text: "24/7 Support" },
  ];

  return (
    <section id="feature" className="section-p1 flex justify-around items-center flex-wrap">
      {features.map((feature, index) => (
        <div key={index} className="fe-box flex flex-col items-center m-4">
          <img src={feature.src} alt={feature.text} className="mb-2" />
          <h6>{feature.text}</h6>
        </div>
      ))}
    </section>
  );
};

export default Feature;
