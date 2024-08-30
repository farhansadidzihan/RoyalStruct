import React from 'react';
import logo from "../assets/logo.png";
import { FaYoutube, FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaPinterest, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black text-white py-8">
      <div className="container mx-auto flex flex-wrap items-start justify-between gap-10">
        {/* Logo */}
        <div className="flex flex-col items-center md:items-start flex-shrink-0">
          <img className="h-20 ml-10 w-20 mb-2" src={logo} alt="Logo" />
          <p className="text-lg font-bold">
            © 2024 FSZ & Co
          </p>
        </div>

        {/* Our Companies */}
        <div className="flex flex-col flex-grow ml-12">
          <h5 className="font-bold text-xl mb-4">Our Companies</h5>
          <ul className="space-y-2">
            <li>
              <a href="https://perplexity.ai" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                Perplexity AI
              </a>
            </li>
            <li>
              <a href="httpss://notion.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                Notion
              </a>
            </li>
            <li>
              <a href="https://replit.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                Replit
              </a>
            </li>
          </ul>
        </div>

        {/* About */}
        <div className="flex flex-col flex-grow">
          <h5 className="font-bold text-xl mb-4">About</h5>
          <ul className="space-y-2">
            <li>
              <a href="https://fszandco.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                Company
              </a>
            </li>
            <li>
              <a href="https://annualreports.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                Annual Report
              </a>
            </li>
          </ul>
        </div>

        {/* Connect with Us */}
        <div className="flex flex-col items-center md:items-start flex-shrink-0">
          <h5 className="font-bold text-xl mb-4">Connect with Us</h5>
          <ul className="flex space-x-4">
            <li>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <FaYoutube size={27} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <FaInstagram size={27} />
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <FaTwitter size={27} />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/fszandco" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <FaLinkedin size={27} />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/profile.php?id=61564680801765" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <FaFacebook size={27} />
              </a>
            </li>
            <li>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <FaPinterest size={27} />
              </a>
            </li>
            <li>
              <a href="https://github.com/farhansadidzihan/fszandco" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <FaGithub size={27} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
