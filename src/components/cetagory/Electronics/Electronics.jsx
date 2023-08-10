/* eslint-disable max-len */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import img1 from '../../../assets/images/Electronics/image1.png';
import img2 from '../../../assets/images/Electronics/image2.png';
import img3 from '../../../assets/images/Electronics/image3.png';
import ArrowDown from '../../../assets/images/Icons/Arrow - Down 2.svg';
import SingleElectronicsItem from './SingleElectronicsItem';

const electronicsList = [
  {
    img: img1,
    title: 'img1',
    id: 1,
  },
  {
    img: img2,
    title: '',
    id: 2,
  },
  {
    img: img3,
    title: 'img3',
    id: 3,
  },

]

function Electronics() {
  return (
    <div className="container sectionBreakpoint">

      <div className="d-flex flex-row justify-content-between align-items-center" style={{ borderBottom: '1px solid #ededed', marginBottom: '40px' }}>

        <div className="cardContainerLeftText" style={{ borderBottom: '3px solid #008ecc' }}>
          Top
          {' '}
          <span style={{ color: '#008ECC' }}>Electronics Brands</span>
          <br />
        </div>

        <a className="cardContainerRightButton">
          View All
          {' '}
          <img src={ArrowDown} height="18" width="18" style={{ marginLeft: '6px' }} />
        </a>
      </div>

      <div className="row row-cols-1 row-cols-md-2   row-cols-xl-3 justify-content-center   g-2">
        {
          electronicsList && electronicsList.map((electronicsItem) => <SingleElectronicsItem SingleSmartPhoneCard key={electronicsItem.id} electronicsItem={electronicsItem} />)
        }
      </div>

    </div>
  );
}

export default Electronics;
