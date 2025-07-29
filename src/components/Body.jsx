import React from 'react';
import videoSrc from "../assets/bg-vdo.mp4";

const Header = () => {
  return (
    <div className="relative w-full flex flex-col items-center justify-center py-16 px-4">

      {/* Video Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <video
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          // className="w-full h-full object-cover"
        />
      </div>

      {/* Hero Section */}
      <div className="h-screen flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4 drop-shadow-lg">
          Strength You Can Feel, Design You Can Trust
        </h1>

        <p className="text-lg md:text-xl max-w-xl mb-8 drop-shadow-md">
          We help Structural Engineers to finish their Structural Design Project through Structural Analysis 
        </p>

        <a
          href="https://wa.me/8801741574708"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 text-xl font-medium text-white bg-gray-500 rounded hover:bg-gray-400 transition"
        >
          Contact Us
        </a>
      </div>

      {/* Why Choose Us Section */}
      <div id="services" className="w-full max-w-6xl mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10 text-black">
          Why Choose Us?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-3">
              Want a Trusted Engineering Partner?
            </h3>
            <p className="text-gray-700">
              We aim to build long-term relationships, not just finish projects. We treat every client’s goal like our own.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-3">
              Make 1.5X of your income (if you are a structural engineer)
            </h3>
            <p className="text-gray-700">
              You can hand over your project — we’ll do the building analysis in ETABS. Then you finish your structural design easily (BNBC 2020 compliant).
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Header;