import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import ProductGrid from './components/ProductGrid';
import AppPromotion from './components/AppPromotion';
import CustomToy from './components/CustomToy';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow">
        <Banner />
        <ProductGrid />
        <AppPromotion />
        <CustomToy />
      </main>
      <Footer />
    </div>
  );
}

export default App;