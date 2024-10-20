import React from 'react';

const AppPromotion: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-3xl font-bold mb-4">Get the FREE Play Time Fun XXX app</h3>
            <p className="mb-6">Your personalized and convenient shopping experience, one tap away!</p>
            <div className="flex space-x-4 mb-6">
              <img src="https://via.placeholder.com/150x50?text=App+Store" alt="App Store" className="h-12" />
              <img src="https://via.placeholder.com/150x50?text=Google+Play" alt="Google Play" className="h-12" />
            </div>
            <div className="flex items-center">
              <img src="https://via.placeholder.com/100x100?text=QR" alt="QR Code" className="w-24 h-24 mr-4" />
              <p>Scan with your device to download on iOS or Android</p>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://via.placeholder.com/300x500?text=App+Preview"
              alt="App Preview"
              className="w-full max-w-sm mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPromotion;