import React from 'react';
import { FaLinkedin, FaWhatsapp, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white py-6 border-t">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4">
        <p className="text-sm text-gray-600">© 2025 RoyalStruct Pvt Ltd.</p>

        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/company/royalstruct"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="https://github.com/farhansadidzihan/royalstruct"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black transition-colors"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://wa.me/8801741574708"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-green-500 transition-colors"
          >
            <FaWhatsapp size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
