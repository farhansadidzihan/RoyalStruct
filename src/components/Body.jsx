import React from 'react';

const Header = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-black">

      <h1 className="text-3xl md:text-4xl font-semibold text-white mb-4">
        Making The World A Better Place To Live
      </h1>

      <p className="text-lg md:text-xl text-white text-center max-w-xl mb-8">
        Y Combinator has invested in over 5,000 startups, $600B Combined Valuation. We're here to help your company succeed.
      </p>

      <a
        href="#apply"
        className="px-6 py-3 text-xl font-medium text-white bg-orange-500 rounded hover:bg-orange-400 transition"
      >
        Apply Now
      </a>
    </div>
  );
};

export default Header;
