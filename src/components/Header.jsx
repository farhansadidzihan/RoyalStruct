import React, { useState, useEffect } from 'react';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';
import img6 from '../assets/img6.png';
import img7 from '../assets/img7.png';
import img8 from '../assets/img8.png';
import img9 from '../assets/img9.png';
import img10 from '../assets/img10.png';
import img11 from '../assets/img11.png';
import img12 from '../assets/img12.png';

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? 11 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === 11 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextClick();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  const photos = [
    { id: 1, image: img1, title: 'Metaverse', description: 'Royal Z will change the world with metaverse' },
    { id: 2, image: img2, title: 'Artificial Intelligence', description: 'Z AI will change global people\'s behaviour' },
    { id: 3, image: img3, title: 'Blockchain', description: 'Control your finance precisely with Blockchain' },
    { id: 4, image: img4, title: 'Laptop', description: 'Our Vision is to take the world into next level' },
    { id: 5, image: img5, title: 'Car', description: 'To change the global transport system' },
    { id: 6, image: img6, title: 'Tech', description: 'Break the level of Technology' },
    { id: 7, image: img7, title: 'Photo 7', description: 'Description for Photo 7' },
    { id: 8, image: img8, title: 'Photo 8', description: 'Description for Photo 8' },
    { id: 9, image: img9, title: 'Photo 9', description: 'Description for Photo 9' },
    { id: 10, image: img10, title: 'Photo 10', description: 'Description for Photo 10' },
    { id: 11, image: img11, title: 'Photo 11', description: 'Description for Photo 11' },
    { id: 12, image: img12, title: 'Photo 12', description: 'Description for Photo 12' },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center h-screen">
      <div className="carousel-inner">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className={`carousel-item ${
              photo.id === activeIndex + 1 ? 'active' : ''
            }`}
          >
            <img src={photo.image} className="w-full h-auto" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="font-bold">{photo.title}</h5>
              <p>{photo.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full opacity-50 hover:opacity-100"
        type="button"
        onClick={handlePrevClick}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </button>

      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full opacity-50 hover:opacity-100"
        type="button"
        onClick={handleNextClick}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </button>

      <div className="flex justify-center mt-4">
        {photos.map((photo) => (
          <button
            key={photo.id}
            className={`mx-2 w-4 h-4 rounded-full ${
              photo.id === activeIndex + 1 ? 'bg-gray-800' : 'bg-gray-400'
            }`}
            onClick={() => handleDotClick(photo.id - 1)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Header;
