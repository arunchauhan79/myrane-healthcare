import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="p-8 bg-gray-800 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl mb-4">Contact Us</h3>
          <form className="space-y-4">
            <input type="text" className="w-full p-2 rounded" placeholder="Your Name" />
            <input type="email" className="w-full p-2 rounded" placeholder="Your Email" />
            <textarea className="w-full p-2 rounded" placeholder="Your Message" rows={4} />
            <button type="submit" className="bg-blue-500 px-4 py-2 rounded text-white">Send</button>
          </form>
        </div>
        <div>
          <h3 className="text-xl mb-4">Our Address</h3>
          <p>1234 Medicine Street</p>
          <p>Healthcare City, PharmaLand</p>
          <p>Email: contact@medicinecompany.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
