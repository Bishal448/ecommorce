import React, { useState } from 'react';

const Script = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <header className="flex justify-between items-center p-4 bg-white shadow-md">
        <a href="#">
          <img src="https://i.postimg.cc/x8ncvFjr/logo.png" alt="Logo" className="h-10" />
        </a>
        <nav className={`fixed inset-0 bg-white flex flex-col items-center justify-center transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:relative md:flex-row md:transform-none md:space-x-6 md:bg-transparent md:inset-auto`}>
          <a href="index.html" className="text-gray-700 hover:text-gray-900 md:py-0 py-4">Home</a>
          <a href="shop.html" className="text-gray-700 hover:text-gray-900 md:py-0 py-4">Shop</a>
          <a href="blog.html" className="text-gray-700 hover:text-gray-900 md:py-0 py-4">Blog</a>
          <a href="about.html" className="text-gray-700 hover:text-gray-900 md:py-0 py-4">About</a>
          <a href="contact.html" className="text-gray-700 hover:text-gray-900 md:py-0 py-4">Contact</a>
          <a href="cart.html" className="text-gray-700 hover:text-gray-900 relative md:py-0 py-4">
            <i className="fal fa-shopping-bag"></i>
            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs px-1">0</span>
          </a>
        </nav>
        <div className="flex md:hidden space-x-4">
          <a href="cart.html" className="relative">
            <i className="fal fa-shopping-bag"></i>
            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs px-1">0</span>
          </a>
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700">
            <i className="fas fa-outdent"></i>
          </button>
        </div>
      </header>

      {/* The rest of the sections remain the same */}

      {/* ... */}
    </div>
  );
};

export default Script;
