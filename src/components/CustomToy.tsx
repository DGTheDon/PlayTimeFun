import React from 'react';

const CustomToy: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-bold mb-8 text-center">Introducing Play Time Fun XXX by You</h3>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="https://via.placeholder.com/400x400?text=Customizable+Toy"
              alt="Customizable Toy"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h4 className="text-xl font-semibold mb-4">Create your own custom toy with just a few words.</h4>
            <p className="mb-6">From your imagination to your doorstep. Create a fully personalized toy with just a few words.</p>
            <input
              type="text"
              placeholder="Describe your dream toy"
              className="w-full px-4 py-2 rounded-full border border-gray-300 mb-4"
            />
            <button className="w-full bg-black text-white py-2 rounded-full font-semibold hover:bg-gray-800">
              Start Creating
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomToy;