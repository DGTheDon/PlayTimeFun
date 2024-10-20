import React from 'react';
import { Search, ShoppingBag, User, Heart } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <>
      <header className="bg-[#FFF1F1] text-black py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div>Free U.S. Shipping & Exchanges</div>
          <div className="flex items-center space-x-4">
            <a href="#" className="flex items-center">
              <Search className="w-4 h-4 mr-1" />
              Let us know how we're doing
            </a>
            <a href="#" className="flex items-center">
              <User className="w-4 h-4 mr-1" />
              Find a store
            </a>
          </div>
        </div>
      </header>
      <nav className="bg-white border-b border-gray-200 py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Play Time Fun XXX</h1>
            <div className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-gray-900">Shop</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Personalize Your Set</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Sustainability</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">About Us</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">The Elite Box</a>
            </div>
            <div className="flex items-center space-x-4">
              <Search className="text-gray-600 w-6 h-6" />
              <User className="text-gray-600 w-6 h-6" />
              <Heart className="text-gray-600 w-6 h-6" />
              <ShoppingBag className="text-gray-600 w-6 h-6" />
            </div>
          </div>
        </div>
      </nav>
      <div className="bg-[#FFF1F1] py-2 text-center text-sm">
        <span className="font-semibold">Today's Offer:</span> 1 set 40% OFF | 2 sets 45% OFF | 3 sets 50% OFF When you join the VIP membership
      </div>
    </>
  );
};

export default Header;