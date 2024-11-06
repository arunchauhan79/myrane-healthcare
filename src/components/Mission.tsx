import React from 'react';

const Mission: React.FC = () => {
  return (
    <section id="mission" className="px-[16rem] py-10 bg-white">
      <div className="flex flex-col gap-36 lg:flex-row items-center">
        <img src="./assets/images/Mission.jpg" alt="About Us" className="w-24 lg:w-[30%] h-auto mb-6 lg:mb-0 rounded-lg" />
        <div className="lg:ml-6">
          <h2 className="text-3xl mb-4"> Our Mission</h2>
          <p className="text-lg text-gray-700"> To create innovative world class pharmaceutical products and solutions for both chronic and acute conditions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
