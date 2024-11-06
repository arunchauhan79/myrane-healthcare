import React from 'react';

const Vision: React.FC = () => {
  return (
    <section id="vision" className="px-[16rem] py-10 bg-white">
      <div className="flex flex-col gap-36 lg:flex-row items-center">
        <div className="lg:ml-6">
          <h2 className="text-3xl mb-4"> Our Vision</h2>
          <p className="text-lg text-gray-700">To be recognized as an integrated healthcare provider with global footprints. To achieve this through a relentless pursuit of excellence in every facet of our business.
          </p>
        </div>
        <img src="./assets/images/Vision.jpg" alt="About Us" className="w-24 lg:w-[30%] h-auto mb-6 lg:mb-0 rounded-lg" />
      </div>
    </section>
  );
};

export default Vision;
