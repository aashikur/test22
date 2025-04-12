import React from 'react';

const Banner = () => {
  const scrollToAuctions = () => {
    const section = document.getElementById('active-auctions');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-[500px] lg:min-h-[600px] flex flex-col justify-center w-11/12 lg:w-4/5 mx-auto">
      <div className="py-35 lg:py-50">
        <div className="max-w-[750px] space-y-4">
          <h1 className="block bg-clip-text text-transparent font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center md:text-left pb-4 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
            Bid on Unique Items from Around the World
          </h1>
          <p className="text-white/90 sm:text-xl sm:leading-relaxed text-center md:text-left">
            Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions
          </p>
          <div className="flex justify-center md:justify-start">
            <button
              className="mt-5 w-50 h-12 cursor-pointer rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
              onClick={scrollToAuctions}
            >
              Explore Auctions <span className="animate-bounce">🚀</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;