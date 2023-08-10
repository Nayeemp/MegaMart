/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Footer.css';

import Call from '../../assets/images/Footer/Call.svg';
import MegaMart from '../../assets/images/Footer/MegaMart.png';
import whatsApp from '../../assets/images/Footer/ant-design_whats-app-outlined.svg';
import appleStore from '../../assets/images/Footer/appleStore.png';
import playstore from '../../assets/images/Footer/playstore.png';

function Footer() {
  return (
    <div className="footer sectionBreakpoint" style={{ backgroundColor: '#008ECC' }}>
      <div className="container" style={{ paddingTop: '80px' }}>
        <div className="row row-cols-1  row-cols-lg-2 row-cols-xl-3 gx-2 gy-5 justify-content-center">
          <div className="col  d-flex flex-column align-items-start align-items-lg-center align-items-xl-start">

            <div>
              <div style={{ height: '44px' }}>
                <img src={MegaMart} className="img-fluid" style={{ width: 'auto', height: '100%', display: 'block' }} />
              </div>
              <h3 className="contactUs">Contact Us</h3>

              <div className="d-flex justify-content-start" style={{ marginTop: '20px' }}>
                <img src={Call} width="24px" height="24px" />
                <div className="d-flex">
                  <ul className="socialMediaUl">
                    <li>Whats App</li>
                    <li>+1 202-918-2132</li>
                  </ul>
                </div>
              </div>

              <div className="d-flex" style={{ marginTop: '20px' }}>
                <img src={whatsApp} width="24px" height="24px" />
                <div className="d-flex">
                  <ul className="socialMediaUl">
                    <li>Call Us</li>
                    <li>+1 202-918-2132</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>

          <div className="col d-flex flex-column align-items-start align-items-lg-center   align-items-xl-start">
            <div className="d-flex">

              <h3 className="footerHeader">Most Popular Categories</h3>
            </div>

            <ul className="footerUl2">
              <li>Staples</li>
              <li>Beverages </li>
              <li>Personal Care </li>
              <li>Home Care </li>
              <li>Baby Care </li>
              <li>Vegetables & Fruits </li>
              <li>Snacks & Foods </li>
              <li>Dairy & Bakery</li>
            </ul>
          </div>

          <div className="col d-flex flex-column align-items-start align-items-lg-center   align-items-xl-start">
            <div className="d-flex">

              <h3 className="footerHeader">Customer Services</h3>
            </div>

            <ul className="footerUl2">
              <li>Staples</li>

              <li>About Us </li>
              <li>Terms & Conditions </li>
              <li>FAQ </li>
              <li>Privacy Policy </li>
              <li>E-waste Policy </li>
              <li>Cancellation & Return Policy</li>

            </ul>
          </div>

        </div>

        <div>
          <h3 className="contactUs">Download App</h3>
          <div className="d-flex justify-content-start" style={{ marginTop: '20px' }}>

            <div style={{ height: '55px', marginRight: '20px' }}>
              <img src={appleStore} width="167px" height="55px" className="img-fluid" />
            </div>

            <div style={{ height: '55px' }}>
              <img src={playstore} width="191px" height="56px" className="img-fluid" />

            </div>

          </div>

        </div>

        <div className="copyright">
          © 2022 All rights reserved. Reliance Retail Ltd.
        </div>

      </div>

    </div>
  );
}

export default Footer;
