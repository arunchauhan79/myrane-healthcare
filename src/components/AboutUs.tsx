import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="px-[16rem] py-10 bg-white">
      <div className="flex flex-col gap-36 lg:flex-row items-center">
        <img src="./assets/images/aboutUs.jpg" alt="About Us" className="w-24 lg:w-[30%] h-auto mb-6 lg:mb-0 rounded-lg" />
        <div className="lg:ml-6">
          <h2 className="text-3xl mb-4">About Our Company</h2>
          <p className="text-lg text-gray-700"><span className='text-[#397FBE] text-xl'>Myrane</span> is a leading, vertically integrated pharmaceutical formulation development, manufacturing, and marketing company. Every Myrane product and service is a testament to its uncompromising quality standards. Myrane believes in empowering people. Therefore, to fulfil its corporate vision, Myrane aims to acquire and retain the best talent across the industry to fully leverage the diversity of respective markets Myrane operates in.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
