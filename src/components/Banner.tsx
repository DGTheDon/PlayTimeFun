import React from 'react';

const Banner: React.FC = () => {
  return (
    <section className="bg-[#FFF1F1] py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Play Time Fun XXX</h2>
          <p className="text-xl mb-8">
            At Play Time Fun XXX, we understand you. Whether you want to feel playful,
            adventurous, or relaxed, we have the right toys for your mood. From
            exciting games to cozy plush toys, we've got it all in sizes for everyone.
          </p>
          <p className="mb-8">
            Designed with an inclusive fit for every body, Play Time Fun XXX
            makes it easy to find styles that make you feel amazing. No matter
            your preferences, this is where you'll find pieces that truly fit you.
          </p>
          <button className="bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;