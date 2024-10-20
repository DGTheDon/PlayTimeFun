import React from 'react';

const ProductGrid: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-bold mb-8 text-center">Shop by Category</h3>
        <div className="flex justify-center mb-8">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {['All', 'New', 'Bestsellers', 'Games', 'Plush Toys', 'Educational'].map((category) => (
              <button key={category} className="px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-100">
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={`https://via.placeholder.com/300x300?text=Toy ${item}`}
                alt={`Toy ${item}`}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h4 className="font-semibold mb-2">Toy Name</h4>
                <div className="flex justify-between items-center">
                  <span className="text-red-600 font-bold">$29.95</span>
                  <span className="text-gray-500 line-through">$39.95</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;