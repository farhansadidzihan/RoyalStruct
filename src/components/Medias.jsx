import React from "react";
import { FaYoutube, FaTwitter, FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";
// import { HiOutlineMail } from "react-icons/hi";
// import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
        id: 1,
        child: (
        <>
            YouTube <FaYoutube size={30} />
        </>
        ),
        href: "https://www.youtube.com/channel/UCebaUnHBZbNmfgZdW3hkZfw",
        style: "rounded-tr-md",
        download: false,
    },
    {
      id: 2,
      child: (
        <>
          Twitter <FaTwitter size={30} />
        </>
      ),
      href: "https://twitter.com/farhan_zihan",
    },
    {
      id: 3,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/farhan-sadid-zihan-489b72259/",
    },
    {
      id: 4,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/FarhanZihan",
    },
    {
      id: 5,
      child: (
        <>
          Discord <FaDiscord size={30} />
        </>
      ),
      href: "https://discord.com/",
      style: "rounded-br-md",
    },
    // {
    //   id: 6,
    //   child: (
    //     <>
    //       Mail <HiOutlineMail size={30} />
    //     </>
    //   ),
    //   href: "mailto:farhansadidzihan@gmail.com",
    //   style: "rounded-br-md",
    // },
    // {
    //   id: 7,
    //   child: (
    //     <>
    //       Resume <BsFillPersonLinesFill size={30} />
    //     </>
    //   ),
    //   href: "/resume.pdf",
    //   style: "rounded-br-md",
    //   download: true,
    // }
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
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