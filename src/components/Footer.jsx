import React from 'react'
import logo from "../assets/logo-bg-rmvd.png";

const Footer = () => {
  return (
    <div className="container mx-auto my-auto">
      <footer className="row row-cols-1 row-cols-sm-2 fon row-cols-md-5 mb- border-top">
        <div className="col mb-3">
          <img className="ml-20 mt-10 h-20 w-25" src={logo} alt="Logo" />
          <p className="text-body-secondary text-xl"> <i className='font-signature font-bold'> Copyright © 2023 Royal Z Inc. </i> </p>
          <p className='text-body-secondary font-medium ml-12'> All rights reserved </p>
        </div>

        <div className="col mb-3 mt-3">

        </div>

        <div className="col mb-3 mt-3">
          <h5 className='font-bold'> Products </h5>
          <ul className="nav flex-column mt-2">
            <li className="nav-item mb-2 fon"><a href="https://farhan-sadid-zihan.web.app/" className="nav-link p-0 text-body-secondary"> Industries </a></li>
            <li className="nav-item mb-2 fon"><a href="https://farhan-sadid-zihan.web.app/" className="nav-link p-0 text-body-secondary"> Artificial Intelligence </a></li>
            <li className="nav-item mb-2 fon"><a href="https://farhan-sadid-zihan.web.app/" className="nav-link p-0 text-body-secondary"> Blockchain </a></li>
            <li className="nav-item mb-2 fon"><a href="https://farhan-sadid-zihan.web.app/" className="nav-link p-0 text-body-secondary"> Data & Analytics </a></li>
            <li className="nav-item mb-2 fon"><a href="https://farhan-sadid-zihan.web.app/" className="nav-link p-0 text-body-secondary"> Cloud Computing </a></li>
          </ul>
        </div>

        <div className="col mb-3 mt-3">
          <h5 className='font-bold'> Solutions </h5>
          <ul className="nav flex-column mt-2">
            <li className="nav-item mb-2 fon"><a href="https://farhan-sadid-zihan.web.app/" className="nav-link p-0 text-body-secondary">IT Infrastructure</a></li>
            <li className="nav-item mb-2 fon"><a href="https://farhan-sadid-zihan.web.app/" className="nav-link p-0 text-body-secondary"> Supply Chain </a></li>
            <li className="nav-item mb-2 fon"><a href="https://farhan-sadid-zihan.web.app/" className="nav-link p-0 text-body-secondary"> Finance </a></li>
            <li className="nav-item mb-2 fon"><a href="https://farhan-sadid-zihan.web.app/" className="nav-link p-0 text-body-secondary"> Hybrid Cloud</a></li>
            <li className="nav-item mb-2 fon"><a href="https://farhan-sadid-zihan.web.app/" className="nav-link p-0 text-body-secondary"> Research </a></li>
          </ul>
        </div>

        <div className="col mb-3 mt-3">
          <h5 className='font-bold'> About Royal Z </h5>
          <ul className="nav flex-column mt-2">
            <li className="nav-item mb-2 fon"><a href="https://farhan-sadid-zihan.web.app/" className="nav-link p-0 text-body-secondary"> Annual Report </a></li>
            <li className="nav-item mb-2 fon"><a href="https://farhan-sadid-zihan.web.app/" className="nav-link p-0 text-body-secondary"> Career Opportunities </a></li>
            <li className="nav-item mb-2 fon"><a href="https://farhan-sadid-zihan.web.app/" className="nav-link p-0 text-body-secondary"> Investors </a></li>
            <li className="nav-item mb-2 fon"><a href="https://farhan-sadid-zihan.web.app/" className="nav-link p-0 text-body-secondary"> Security, Privacy & Trust </a></li>
            <li className="nav-item mb-2 fon"><a href="https://farhan-sadid-zihan.web.app/" className="nav-link p-0 text-body-secondary"> About Royal Z</a></li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default Footer
