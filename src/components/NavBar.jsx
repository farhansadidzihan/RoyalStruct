import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import logo from "../assets/logo-bg-rmvd.png";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  const links = [
    {
      id: 1,
      link: "Products",
    },
    {
      id: 2,
      link: "Solutions",
    },
    {
      id: 3,
      link: "Consulting",
    },
    {
      id: 4,
      link: "Support",
    },
    {
      id: 5,
      link: "About Us",
    },
  ];

  const handleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
  };

  const handleSignupModal = () => {
    setShowSignupModal(!showSignupModal);
  };

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      <div className="flex items-center">
        <img className="mr-2 h-20 w-23" src={logo} alt="Logo" />
        <h1 className="text-5xl font-signature cursor-pointer"> FSZ & Co </h1>
      </div>

      <ul className="hidden md:flex items-center">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:text-white hover:underline"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}

      <div className="flex items-center">
        <form className="d-flex" role="search">
          <input
            className="form-control me-2 bg-dark text-white"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success text-white" type="submit">
            Search
          </button>
        </form>
        <div className="mx-2">
          <button className="btn btn-primary" onClick={handleLoginModal}>
            Login
          </button>
          <button className="btn btn-info" onClick={handleSignupModal}>
            SignUp
          </button>
        </div>
      </div>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="modal" id="loginModal" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Login</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={handleLoginModal}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <h1> Login </h1>
                <form>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  onClick={handleLoginModal}
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Signup Modal */}
      {showSignupModal && (
        <div className="modal" id="signupModal" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Sign Up</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={handleSignupModal}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <h1> SignUP</h1>
                <form>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  onClick={handleSignupModal}
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
