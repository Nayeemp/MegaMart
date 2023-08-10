/* eslint-disable max-len */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import ArrowDown from '../../../assets/images/Icons/Arrow - Down 2.svg';
import SingleSmartPhoneCard from './SingleSmartPhoneCard';
import './SmartPhones.css';

import img1 from '../../../assets/images/Products/SmartPhones/image1.png';
import img2 from '../../../assets/images/Products/SmartPhones/image2.png';
import img3 from '../../../assets/images/Products/SmartPhones/image3.png';
import img4 from '../../../assets/images/Products/SmartPhones/image4.png';
import img5 from '../../../assets/images/Products/SmartPhones/image5.png';

const smartPhoneList = [
  {
    title: 'Galaxy S22 Ultra',
    img: img1,
    price: 14999,
    offerPrice: 10499,
    discount: '56%',
  },
  {
    title: 'Galaxy S22 Ultra',
    img: img2,
    price: 14999,
    offerPrice: 10499,
    discount: '56%',
  },
  {
    title: 'Galaxy S22 Ultra',
    img: img3,
    price: 14999,
    offerPrice: 10499,
    discount: '56%',
  },
  {
    title: 'Galaxy S22 Ultra',
    img: img4,
    price: 14999,
    offerPrice: 10499,
    discount: '56%',
  },
  {
    title: 'Galaxy S22 Ultra',
    img: img5,
    price: 14999,
    offerPrice: 10499,
    discount: '56%',
  },
]
function SmartPhones() {
  return (
    <div className="container sectionBreakpoint">

      <div className="d-flex flex-row justify-content-between align-items-center" style={{ borderBottom: '1px solid #ededed', marginBottom: '40px' }}>

        <div className="cardContainerLeftText" style={{ borderBottom: '3px solid #008ecc' }}>
          Grab the best deal on
          {' '}
          <span style={{ color: '#008ECC' }}>Smartphones</span>
          {' '}
          <br />
        </div>

        <a className="cardContainerRightButton">
          View All
          {' '}
          <img src={ArrowDown} height="18" width="18" style={{ marginLeft: '6px' }} />
        </a>
      </div>

      <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3   row-cols-lg-4 row-cols-xl-5  justify-content-center    g-3">
        {
        smartPhoneList && smartPhoneList.map((smartPhone) => <SingleSmartPhoneCard key={smartPhone.id} smartPhone={smartPhone} />)
      }
      </div>

    </div>
  );
}

export default SmartPhones;
