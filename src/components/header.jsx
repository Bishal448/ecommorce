import React from 'react';

const Header = () => {
  return (
    <header className="fixed w-full flex justify-between items-center px-8 py-5 bg-gray-100 shadow-md z-50">
      <div id="bar" className="cursor-pointer">☰</div>
      <nav id="navbar" className="flex items-center justify-center gap-4">
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-gray-900 font-semibold">Home</a>
          </li>
          <li>
            <a href="#" className="text-gray-900 font-semibold">Shop</a>
          </li>
          <li>
            <a href="#" className="text-gray-900 font-semibold">Blog</a>
          </li>
          <li>
            <a href="#" className="text-gray-900 font-semibold">About</a>
          </li>
          <li>
            <a href="#" className="text-gray-900 font-semibold">Contact</a>
          </li>
        </ul>
      </nav>
      <div id="close" className="hidden cursor-pointer">×</div>
    </header>
  );
};

export default Header;
