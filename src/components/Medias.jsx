import React from "react";
import { FaYoutube, FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

const SocialLinks = () => {
  const links = [
    {
        id: 1,
        child: (
        <>
            YouTube <FaYoutube size={30} />
        </>
        ),
        href: "https://www.youtube.com/@farhansadidzihan",
        style: "rounded-tr-md",
        download: false,
    },
    {
      id: 2,
      child: (
        <>
          Instagram <FaInstagram size={30} />
        </>
      ),
      href: "https://www.instagram.com/farhansadidzihan/",
    },
    {
      id: 3,
      child: (
        <>
          Twitter <FaTwitter size={30} />
        </>
      ),
      href: "https://twitter.com/farhanszihan",
    },
    {
      id: 4,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/farhansadidzihan/",
    },
    {
      id: 5,
      child: (
        <>
          Facebook <FaFacebook size={30} />
        </>
      ),
      href: "https://facebook.com/farhanszihan",
      style: "rounded-br-md",
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[32%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;