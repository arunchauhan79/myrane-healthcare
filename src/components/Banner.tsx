import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Banner: React.FC = () => {
  return (
    <section className='shadow-xl' id="home">
    <Carousel showThumbs={false} infiniteLoop autoPlay>
      <div className="relative" style={{ backgroundImage: 'url(./assets/banner/1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' }}>
        {/* Overlay for opacity */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Text content */}
        <div className="relative h-full flex items-center justify-center text-center">
          <span className="w-[50%] ml-[40%] mt-[20%] text-gray-300 text-6xl font-bold py-14 bg-black bg-opacity-20 rounded-xl">
           <span className=''>
            Myrane is a leading, vertically integrated pharmaceutical formulation development, manufacturing, and marketing company

           </span>
          </span>
        </div>
      </div>
  
      <div className="relative" style={{ backgroundImage: 'url(./assets/banner/2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative h-full flex items-center justify-center text-center">
        <span className="w-[50%] mr-[40%] mt-[20%] text-gray-300 text-6xl font-bold py-14 bg-black bg-opacity-20 rounded-xl">
           <span className=''>
           Every Myrane product and service is a testament to its uncompromising quality standards

           </span>
          </span>
        </div>
      </div>
      <div className="relative" style={{ backgroundImage: 'url(./assets/banner/3.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative h-full flex items-center justify-center text-center">
        <span className="w-[50%] mr-[40%] mt-[20%] text-gray-300 text-6xl font-bold py-14 bg-black bg-opacity-20 rounded-xl">
           <span className=''>
           Myrane believes in empowering people. Therefore, to fulfil its corporate vision

           </span>
          </span>
        </div>
      </div>
      {/* <div className="relative" style={{ backgroundImage: 'url(./assets/banner/4.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative h-full flex items-center justify-center text-center">
        <span className="w-[60%]  text-gray-300 text-6xl font-bold py-14 bg-black bg-opacity-20 rounded-xl">
           <span className=''>
           Myrane aims to acquire and retain the best talent across the industry to fully leverage the diversity of respective markets Myrane operates in

           </span>
          </span>
        </div>
      </div> */}
      <div className="relative" style={{ backgroundImage: 'url(./assets/banner/5.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative h-full flex items-center justify-center text-center">
        <span className="w-[60%]  text-gray-300 text-6xl font-bold py-14 bg-black bg-opacity-20 rounded-xl">
           <span className=''>
           Myrane aims to acquire and retain the best talent across the industry to fully leverage the diversity of respective markets Myrane operates in

           </span>
          </span>
        </div>
      </div>
    </Carousel>
  </section>
  
  );
};

export default Banner;

{/* <div style={{ backgroundImage: 'url(./assets/banner/3.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' }}>
</div>
<div style={{ backgroundImage: 'url(./assets/banner/4.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' }}>
</div>
<div style={{ backgroundImage: 'url(./assets/banner/5.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' }}>
</div>
<div style={{ backgroundImage: 'url(./assets/banner/6.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' }}>
</div> */}