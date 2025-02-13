import React from 'react';

const Career: React.FC = () => {
    return (
        <section id="vision" className="px-[16rem] py-10 bg-white">
            <div className="flex flex-col gap-36 lg:flex-row items-center">
                <div className="lg:ml-6">
                    <h2 className="text-3xl mb-4"> Career with Us</h2>
                    <p className="text-lg text-gray-700">Our people matter to us the most. Hence we make every effort to create a conducive environment, for everyone to thrive and contribute towards the growth of the company. We consistently invest in our people and empower them to deliver to their fullest potential, with integrity, loyalty and commitment; values that we cherish!.
                    </p>
                </div>
                <img src="./assets/images/Career.jpg" alt="About Us" className="w-24 lg:w-[30%] h-auto mb-6 lg:mb-0 rounded-lg" />
            </div>
        </section>
    );
};

export default Career;
