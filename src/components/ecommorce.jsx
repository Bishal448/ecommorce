import React, {useState} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faStar, faShoppingBag, faOutdent } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter, faYoutube, faPinterest } from '@fortawesome/free-brands-svg-icons';
import Script from './script';

const Ecommorce = () => {
  const [open, Setopen] = useState(false);
    function menu(){
        Setopen(!open);
    }
  
  return (
    <div>
      <header className="flex justify-between items-center p-4 bg-white shadow-md">
        <a href="#">
          <img src="https://i.postimg.cc/x8ncvFjr/logo.png" alt="Logo" className="h-10" />
        </a>
        <nav className="hidden md:flex space-x-6">
          <a href="index.html" className="text-gray-700 hover:text-gray-900">Home</a>
          <a href="shop.html" className="text-gray-700 hover:text-gray-900">Shop</a>
          <a href="blog.html" className="text-gray-700 hover:text-gray-900">Blog</a>
          <a href="about.html" className="text-gray-700 hover:text-gray-900">About</a>
          <a href="contact.html" className="text-gray-700 hover:text-gray-900">Contact</a>
          <a href="cart.html" className="text-gray-700 hover:text-gray-900 relative">
            <FontAwesomeIcon icon={faCartShopping} />
            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs px-1">0</span>
          </a>
        </nav>
        <div className="flex md:hidden space-x-4">
          <a href="cart.html" className="relative">
            <FontAwesomeIcon icon={faShoppingBag} />
            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs px-1">0</span>
          </a>
          <div className="md:hidden"><button id="bar" className="hover:text-black hover:text-2xl text-xl" onClick={menu}>
        <FontAwesomeIcon icon={faOutdent} />
      </button></div>
      {
            open && (
                <ul className="md:hidden flex flex-col gap-2 text-xl text-center">
                <li className="hover:text-black hover:text-2xl">Home</li>
                <li className="hover:text-black hover:text-2xl">Shop</li>
                <li className="hover:text-black hover:text-2xl">Blog</li>
                <li className="hover:text-black hover:text-2xl">About</li>
                <li className="hover:text-black hover:text-2xl">Contact</li>
            </ul>
            )
        }
        </div>
      </header>

      <section className="flex items-center justify-between py-16 bg-gray-100" style={{ backgroundImage: 'url(https://i.postimg.cc/cCwBHzDV/hero4.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
  <div className="w-full md:w-1/2 text-left px-8">
    <h4 className="text-lg">Trade-in-fair</h4>
    <h2 className="text-3xl font-bold">Super value deals</h2>
    <h1 className="text-5xl font-bold text-teal-600">On all Products</h1>
    <p className="text-gray-700 mt-4">Save more with coupons and up to 70% off!</p>
    <button className="mt-6 px-6 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-500 transition" style={{backgroundImage: 'url(https://i.postimg.cc/528H2mmS/button.png)',}}>Shop Now</button>
  </div>
  
</section>


      <section className="flex flex-wrap justify-center py-16 bg-white">
        <div className="text-center mx-4">
          <img src="https://i.postimg.cc/PrN2Y6Cv/f1.png" alt="" className="mx-auto mb-4" />
          <h6 className="text-gray-700">Free Shipping</h6>
        </div>
        <div className="text-center mx-4">
          <img src="https://i.postimg.cc/qvycxW4q/f2.png" alt="" className="mx-auto mb-4" />
          <h6 className="text-gray-700">Online Order</h6>
        </div>
        <div className="text-center mx-4">
          <img src="https://i.postimg.cc/1Rdphyz4/f3.png" alt="" className="mx-auto mb-4" />
          <h6 className="text-gray-700">Save Money</h6>
        </div>
        <div className="text-center mx-4">
          <img src="https://i.postimg.cc/GpYc2JFZ/f4.png" alt="" className="mx-auto mb-4" />
          <h6 className="text-gray-700">Promotions</h6>
        </div>
        <div className="text-center mx-4">
          <img src="https://i.postimg.cc/4yFCwmv6/f5.png" alt="" className="mx-auto mb-4" />
          <h6 className="text-gray-700">Happy Sell</h6>
        </div>
        <div className="text-center mx-4">
          <img src="https://i.postimg.cc/gJN1knTC/f6.png" alt="" className="mx-auto mb-4" />
          <h6 className="text-gray-700">24/7 Support</h6>
        </div>
      </section>

      <section className="text-center py-16 bg-gray-100">
  <h2 className="text-3xl font-bold">Featured Products</h2>
  <p className="text-gray-700 mt-2">Summer Collection New Modern Design</p>
  <div className="flex flex-wrap justify-center mt-8">
    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-4 mb-6 flex-shrink-0" style={{ flexBasis: "calc(25% - 2rem)" }}>
      <img src="https://i.postimg.cc/kg9YYbTn/f1.jpg" alt="Cartoon Astronaut T-Shirts" className="w-full" />
      <div className="p-4">
        <span className="flex text-gray-700">Adidas</span>
        <h5 className="flex mt-2 text-gray-900">Cartoon Astronaut T-Shirts</h5>
        <div className="flex items-center mt-2">
          <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
          <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
          <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
          <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
          <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
        </div>
        <div className='flex justify-between'>
          <h4 className="mt-2 text-gray-900">$78</h4>
          <div className="mt-4">
            <a href="#" className="text-gray-900">
              <FontAwesomeIcon icon={faCartShopping} />
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-4 mb-6 flex-shrink-0" style={{ flexBasis: "calc(25% - 2rem)" }}>
      <img src="https://i.postimg.cc/2yhT2kvb/f2.jpg" alt="Carton Leave Tshirts" className="w-full" />
      <div className="p-4">
        <span className="flex text-gray-700">Adidas</span>
        <h5 className="flex mt-2 text-gray-900">Rose Multicolor Tshirts</h5>
        <div className="flex items-center mt-2">
          <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
          <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
          <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
          <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
          <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
        </div>
        <div className='flex justify-between'>
          <h4 className="mt-2 text-gray-900">$78</h4>
          <div className="mt-4">
            <a href="#" className="text-gray-900">
              <FontAwesomeIcon icon={faCartShopping} />
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-4 mb-6 flex-shrink-0" style={{ flexBasis: "calc(25% - 2rem)" }}>
      <img src="https://i.postimg.cc/VL9DtNm2/f3.jpg" alt="Carton Leave Tshirts" className="w-full" />
      <div className="p-4">
        <span className="flex text-gray-700">Adidas</span>
        <h5 className="flex mt-2 text-gray-900">Carton Leave Tshirts</h5>
        <div className="flex items-center mt-2">
          <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
          <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
          <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
          <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
          <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
        </div>
        <div className='flex justify-between'>
          <h4 className="mt-2 text-gray-900">$78</h4>
          <div className="mt-4">
            <a href="#" className="text-gray-900">
              <FontAwesomeIcon icon={faCartShopping} />
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-4 mb-6 flex-shrink-0" style={{ flexBasis: "calc(25% - 2rem)" }}>
      <img src="https://i.postimg.cc/vZ3hPS1z/f4.jpg" alt="Carton Leave Tshirts" className="w-full" />
      <div className="p-4">
        <span className="flex text-gray-700">Adidas</span>
        <h5 className="flex mt-2 text-gray-900">Pink Flower Tshirts</h5>
        <div className="flex items-center mt-2">
          <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
          <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
          <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
          <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
          <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
        </div>
        <div className='flex justify-between'>
          <h4 className="mt-2 text-gray-900">$78</h4>
          <div className="mt-4">
            <a href="#" className="text-gray-900">
              <FontAwesomeIcon icon={faCartShopping} />
            </a>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>


      <section className="text-center py-16 bg-blue-600 text-white " style={{backgroundImage: 'url(https://i.postimg.cc/SsC7D5WD/b2.jpg)', backgroundSize:'cover', backgroundPosition:'center'}}>
        <h4>Repair Services</h4>
        <h2>Up to <span className="font-bold">70% Off</span> - All t-Shirts & Accessories</h2>
        <button className="mt-6 px-6 py-2 bg-white text-blue-600 rounded hover:bg-gray-200 transition">Explore More</button>
      </section>

      <section className="text-center py-16 bg-gray-100">
  <h2 className="text-3xl font-bold">New Arrivals</h2>
  <p className="text-gray-700 mt-2">Summer Collection New Modern Design</p>
  <div className="flex flex-wrap justify-center mt-12">
    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-4 mb-6 flex-shrink-0" style={{ flexBasis: "calc(25% - 2rem)" }}>
      <img src="https://i.postimg.cc/hG1hqqK6/n1.jpg" alt="Carton Astronaut Tshirts" className="w-full" />
      <div className="p-4">
        <span className="flex text-gray-700">Adidas</span>
        <h5 className="flex mt-2 text-gray-900">Carton Astronaut Tshirts</h5>
        <div className="flex items-center mt-2">
          <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
          <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
          <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
          <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
          <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
        </div>
        <div className="flex justify-between">
          <h4 className="mt-2 text-gray-900">$78</h4>
          <div className="mt-4">
            <a href="#" className="text-gray-900">
              <FontAwesomeIcon icon={faCartShopping} />
            </a>
          </div>
        </div>
      </div>
    </div>
    
    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-4 mb-6 flex-shrink-0" style={{ flexBasis: "calc(25% - 2rem)" }}>
      <img src="https://i.postimg.cc/BZkSkvxt/n2.jpg" alt="Carton Leave Tshirts" className="w-full" />
      <div className="p-4">
        <span className="flex text-gray-700">Adidas</span>
        <h5 className="flex mt-2 text-gray-900">Carton Leave Tshirts</h5>
        <div className="flex items-center mt-2">
          <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
          <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
          <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
          <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
          <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
        </div>
        <div className="flex justify-between">
          <h4 className="mt-2 text-gray-900">$78</h4>
          <div className="mt-4">
            <a href="#" className="text-gray-900">
              <FontAwesomeIcon icon={faCartShopping} />
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-4 mb-6 flex-shrink-0" style={{ flexBasis: "calc(25% - 2rem)" }}>
      <img src="https://i.postimg.cc/KYjcC3sk/n3.jpg" alt="Rose Multicolor Tshirts" className="w-full" />
      <div className="p-4">
        <span className="flextext-gray-700">Adidas</span>
        <h5 className="flexmt-2 text-gray-900">Rose Multicolor Tshirts</h5>
        <div className="flex items-center mt-2">
          <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
          <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
          <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
          <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
          <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
        </div>
        <div className="flex justify-between">
          <h4 className="mt-2 text-gray-900">$78</h4>
          <div className="mt-4">
            <a href="#" className="text-gray-900">
              <FontAwesomeIcon icon={faCartShopping} />
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-4 mb-6 flex-shrink-0" style={{ flexBasis: "calc(25% - 2rem)" }}>
      <img src="https://i.postimg.cc/BZkSkvxt/n2.jpg" alt="Carton Leave Tshirts" className="w-full" />
      <div className="p-4">
        <span className="flex text-gray-700">Adidas</span>
        <h5 className="flex mt-2 text-gray-900">Carton Leave Tshirts</h5>
        <div className="flex items-center mt-2">
          <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
          <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
          <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
          <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
          <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
        </div>
        <div className="flex justify-between">
          <h4 className="mt-2 text-gray-900">$78</h4>
          <div className="mt-4">
            <a href="#" className="text-gray-900">
              <FontAwesomeIcon icon={faCartShopping} />
            </a>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>



      
  <div className="w-full md:w-1/2 p-4">
    <div className="bg-cover bg-center bg-no-repeat h-64 text-white p-8 flex flex-col justify-center" style={{ backgroundImage: 'url(https://i.postimg.cc/vZ6YLxDG/b17.jpg)' }}>
      <h4 className="text-lg">crazy deals</h4>
      <h2 className="text-3xl font-bold mt-1 mb-2">buy 1 get 1 free</h2>
      <span className="mb-2">The best classic dress is on sales at cara</span>
      <button className="mt-2 px-4 py-2 bg-white text-black rounded hover:bg-gray-200 transition">Learn More</button>
    </div>
  </div>
  <div className="w-full md:w-1/2 p-4">
    <div className="bg-cover bg-center bg-no-repeat h-64 text-white p-8 flex flex-col justify-center" style={{ backgroundImage: 'url(https://i.postimg.cc/gJ7FHxHv/b10.jpg)' }}>
      <h4 className="text-lg">spring/summer</h4>
      <h2 className="text-3xl font-bold mt-1 mb-2">upcoming season</h2>
      <span className="mb-2">The best classic dress is on sales at cara</span>
      <button className="mt-2 px-4 py-2 bg-white text-black rounded hover:bg-gray-200 transition">Collection</button>
    </div>
  </div>



  <section className="flex flex-wrap justify-center py-16 bg-white">
  <div className="w-full md:w-1/3 p-4">
    <div className="bg-cover bg-center bg-no-repeat h-64 text-white p-8 flex flex-col justify-center items-center" style={{ backgroundImage: 'url(https://i.postimg.cc/BQQHKtwh/b7.jpg)' }}>
      <h2 className="text-2xl font-bold">SEASONAL SALES</h2>
      <h3 className="text-lg text-red-500">Winter Collection -50% OFF</h3>
    </div>
  </div>
  <div className="w-full md:w-1/3 p-4">
    <div className="bg-cover bg-center bg-no-repeat h-64 text-white p-8 flex flex-col justify-center items-center" style={{ backgroundImage: 'url(https://i.postimg.cc/SxP6qqdg/b4.jpg)' }}>
      <h2 className="text-2xl font-bold">SEASONAL SALES</h2>
      <h3 className="text-lg text-red-500">Winter Collection -50% OFF</h3>
    </div>
  </div>
  <div className="w-full md:w-1/3 p-4">
    <div className="bg-cover bg-center bg-no-repeat h-64 text-white p-8 flex flex-col justify-center items-center" style={{ backgroundImage: 'url(https://i.postimg.cc/m2th49nG/b18.jpg)' }}>
      <h2 className="text-2xl font-bold">SEASONAL SALES</h2>
      <h3 className="text-lg text-red-500">Winter Collection -50% OFF</h3>
    </div>
  </div>
</section>


  
      <section className="flex flex-wrap justify-between py-16" style={{ backgroundImage: "url('https://i.postimg.cc/R0Bs4qqt/b14.png')", backgroundColor:'#041e42' }}>
        <div className="w-full md:w-1/2">
          <h4 className="text-3xl font-bold text-white">Sign Up For Newsletters</h4>
          <p className="text-white mt-4">Get E-mail updates about our latest shop and <span className="text-yellow-300">special offers.</span></p>
        </div>
        <form className="w-full md:w-1/2 flex mt-6 md:mt-0">
          <input type="email" placeholder="Your email address" className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md" />
          <button className="px-6 py-2 bg-green-600 text-white rounded-r-md hover:bg-green-700 transition">Sign Up</button>
        </form>
      </section>

      <footer className="flex items-center justify-between flex-wrap justify-between py-16 bg-gray-100 text-black">
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <img src="https://i.postimg.cc/x8ncvFjr/logo.png" alt="Cara" className="mb-4" />
          <h4 className="text-lg font-bold">Contact</h4>
          <p className="mt-4">Address: Kathmandu, Nepal</p>
          <p className="mt-2">Phone: 9869066879</p>
          <p className="mt-2">Hours: 10:00 - 18:00, Mon - Sat</p>
          <div className="flex mt-4 space-x-2">
            <a href="#"><FontAwesomeIcon icon={faFacebookF} className="text-xl" /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} className="text-xl" /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} className="text-xl" /></a>
            <a href="#"><FontAwesomeIcon icon={faYoutube} className="text-xl" /></a>
            <a href="#"><FontAwesomeIcon icon={faPinterest} className="text-xl" /></a>
          </div>
        </div>
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <h4 className="text-lg font-bold">About</h4>
          <a href="#" className="block mt-4">About Us</a>
          <a href="#" className="block mt-2">Delivery Information</a>
          <a href="#" className="block mt-2">Privacy Policy</a>
          <a href="#" className="block mt-2">Terms & Conditions</a>
          <a href="#" className="block mt-2">Contact Us</a>
        </div>
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <h4 className="text-lg font-bold">My Account</h4>
          <a href="#" className="block mt-4">Sign In</a>
          <a href="#" className="block mt-2">View Cart</a>
          <a href="#" className="block mt-2">My Account</a>
          <a href="#" className="block mt-2">My Wishlist</a>
          <a href="#" className="block mt-2">Track My Order</a>
          <a href="#" className="block mt-2">Help</a>
        </div>
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <h4 className="text-lg font-bold">Install App</h4>
          <p className="mt-4">From App Store or Google Play</p>
          <div className="flex mt-4">
            <img src="https://i.postimg.cc/Y2s5mLdR/app.jpg" alt="App Store" className="w-20 h-10 mr-2" />
            <img src="https://i.postimg.cc/7YvyWTS6/play.jpg" alt="Google Play" className="w-20 h-10" />
          </div>
          <p className="mt-4">Secured Payment Gateways</p>
          <img src="https://i.postimg.cc/kgfzqVRW/pay.png" alt="Payment Gateways" className="mt-4" />
        </div>
        <div className="w-full text-center mt-6">
          <p>&copy; 2023 All rights reserved! made by Bishal</p>
        </div>
      </footer>
    </div>
  );
};

export default Ecommorce;
