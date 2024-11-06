import React from 'react';
import Banner from './components/Banner';
import ProductGallery from './components/ProductGallery';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Vision from './components/Vision';
import Mission from './components/Mission';



const App: React.FC = () => {
  return (
    <div className="">
      <header className="relative top-0 z-50 bg-black shadow">
        <div className="absolute hidden sm:flex items-center top-6 left-4">
          <a href="#home" className="">
            <img src={'/assets/myrane-logo.png'} alt="logo" className="h-12 w-full" />
          </a>
        </div>
        <div className="absolute top-0 left-0 right-0 z-10 flex justify-center p-4 ">
          <nav className="flex gap-14 text-lg font-semibold text-gray-500 bg-gray-50 px-14 py-4 rounded-2xl">
            <a href="#home" className="hover:text-gray-300">Home</a>
            <a href="#about" className="hover:text-gray-300">About</a>
            <a href="#products" className="hover:text-gray-300">Products</a>
            <a href="#contact" className="hover:text-gray-300">Contact</a>
          </nav>
        </div>
      </header>
      <Banner />
      <ProductGallery />
      <AboutUs />
      <Vision />
      <Mission />
      <Footer />
    </div>
  );
};

export default App;
