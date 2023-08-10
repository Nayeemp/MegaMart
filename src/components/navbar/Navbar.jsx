/* eslint-disable max-len */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Navbar.css';

import cart from '../../assets/images/Icons/Navbar/Buy.svg';
import logo from '../../assets/images/Icons/Navbar/MegaMart.svg';
import search from '../../assets/images/Icons/Navbar/Search.svg';
import list from '../../assets/images/Icons/Navbar/list.svg';
import threeDot from '../../assets/images/Icons/Navbar/threeDot.svg';
import user from '../../assets/images/Icons/Navbar/user.svg';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white" style={{ marginTop: '21px', marginBottom: '21px ', overflowX: 'hidden' }}>
      <div className="container">

        <div>
          <img src={threeDot} alt="Logo" style={{ width: '48px', height: '48px', marginRight: '16px' }} />
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Logo" width="138" height="28" />
          </a>
        </div>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav align-items-lg-center  mt-2 mt-lg-0 ms-auto mb-2 mb-lg-0 leftNavText">
            <li className="nav-item">
              <div className="d-flex " style={{ marginRight: '30px' }}>

                <form className="searchbar">
                  <span className="searchbarIcon">
                    <img src={search} alt="searchLogo" width="18" height="18" />
                  </span>

                  <span className="listIcon">
                    <img src={list} alt="listLogo" width="18" height="18" />
                  </span>

                  <input className="form-control me-2 searchInput" type="search" placeholder="Search essentials, groceries and more..." aria-label="Search" />
                </form>

              </div>
            </li>

          </ul>

          <ul className="navbar-nav align-items-lg-center mb-2 mb-lg-0 leftNavText">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <img src={user} alt="Logo" width="24" height="24" style={{ marginRight: '6px' }} />
                Sign Up/ Sign In
              </a>
            </li>

            <div className="d-none d-lg-flex" style={{ height: '24px', paddingLeft: '20px', paddingRight: '20px' }}>
              <div className="vr" />
            </div>

            <li className="nav-item">
              <a className="nav-link" href="#">
                <img src={cart} alt="Logo" width="24" height="24" style={{ marginRight: '6px' }} />
                Cart
              </a>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
