/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Discount from '../../assets/images/Icons/TopNav/Discount.svg';
import Location from '../../assets/images/Icons/TopNav/Location.svg';
import truck from '../../assets/images/Icons/TopNav/iconoir_delivery-truck.svg';
import './TopNav.css';

function TopNav() {
  return (

    <nav className="navbar navbar-expand-lg top-nav" style={{ backgroundColor: '#F5F5F5' }}>
      <div className="container">
        <div className="d-flex justify-content-center align-items-center welcomeMessage">Welcome to worldwide Megamart!</div>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" style={{ height: '30px' }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent1">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center topNavUL">

            <li className="nav-item">
              <a className="nav-link" href="#">
                <img src={Location} alt="Logo" width="18" height="18" style={{ marginRight: '6px' }} />
                Deliver to
                {' '}
                <span className="fw-bold">423651</span>
              </a>
            </li>

            <div className="d-none d-lg-flex" style={{ height: '18px', paddingLeft: '16px', paddingRight: '16px' }}>
              <div className="vr" />
            </div>

            <li className="nav-item">
              <a className="nav-link" href="#">
                <img className="me-2" src={truck} alt="Logo" width="18" height="18" style={{ marginRight: '6px' }} />
                Track your order
              </a>
            </li>

            <div className="d-none d-lg-flex" style={{ height: '18px', paddingLeft: '16px', paddingRight: '16px' }}>
              <div className="vr" />
            </div>

            <li className="nav-item">
              <a className="nav-link" href="#">
                <img src={Discount} alt="Logo" width="18" height="18" style={{ marginRight: '6px' }} />
                All Offers
              </a>
            </li>

          </ul>
        </div>

      </div>
    </nav>

  );
}

export default TopNav;
