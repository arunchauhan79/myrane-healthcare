import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="p-8  text-white bg-cover bg-no-repeat"
      style={{ backgroundImage: 'url(assets/images/bg-contactus.jpg)', backgroundColor: 'black' }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className='bg-black rounded-lg opacity-55'>

          <form className="space-y-4 p-12">
            <input type="text" className="w-full p-2 rounded bg-transparent border" placeholder="Your Name" />
            <input type="email" className="w-full p-2 rounded  bg-transparent  border" placeholder="Your Email" />
            <textarea className="w-full p-2 rounded  bg-transparent  border" placeholder="Your Message" rows={4} />
            <button type="button" className="bg-[#ED7207] px-4 py-2 rounded text-white">Send</button>
          </form>
        </div>
        <div>
          <h3 className="text-xl mb-4">Contact details</h3>
          {/* <p>Email: contact@medicinecompany.com</p> */}
          <p>Phone: +91- 9650812224</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
