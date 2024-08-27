import React from 'react';
import img from '../assets/img.png';

const Header = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <img src={img} className="w-full h-full object-cover" alt="Header" />
    </div>
  );
}

export default Header;
