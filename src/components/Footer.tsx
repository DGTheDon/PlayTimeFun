import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h5 className="font-semibold mb-4">Customer Service</h5>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">FAQs</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Shipping</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Returns</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-4">About Us</h5>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Our Story</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Press</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Connect With Us</h5>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Facebook</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Instagram</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Twitter</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Newsletter</h5>
            <p className="mb-4">Stay updated with our latest offers and products.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 rounded-l-full border border-gray-300"
              />
              <button className="bg-black text-white px-4 py-2 rounded-r-full">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p>&copy; 2023 Play Time Fun XXX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;