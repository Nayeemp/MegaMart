/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable max-len */
import React from 'react';
import './Cetagories.css';

import Cosmetics from '../../../../assets/images/Cetagories/Cosmetics.png';
import Electronics from '../../../../assets/images/Cetagories/Electronics.png';
import Furniture from '../../../../assets/images/Cetagories/Furniture.png';
import mobile from '../../../../assets/images/Cetagories/mobile.png';

import Decor from '../../../../assets/images/Cetagories/Decor.png';
import Watches from '../../../../assets/images/Cetagories/Watches.png';

import ArrowDown from '../../../../assets/images/Icons/Arrow - Down 2.svg';
import CetagoriesItem from './CetagoriesItem';

const cetagoriesList = [
  {
    img: mobile,
    title: 'Mobile',
    id: 1,
  },
  {
    img: Cosmetics,
    title: 'Cosmetics',
    id: 2,
  },
  {
    img: Electronics,
    title: 'Electronics',
    id: 3,

  },
  {
    img: Furniture,
    title: 'Furniture',
    id: 4,

  },
  {
    img: Watches,
    title: 'Watches',
    id: 5,

  },
  {
    img: Decor,
    title: 'Decor',
    id: 6,

  },

]

function Cetagories() {
  return (
    <div className="container sectionBreakpoint">

      <div className="d-flex flex-row justify-content-between align-items-center" style={{ borderBottom: '1px solid #ededed', marginBottom: '40px' }}>

        <div className="cardContainerLeftText" style={{ borderBottom: '3px solid #008ecc' }}>
          Shop From
          {' '}
          <span style={{ color: '#008ECC' }}>Top Categories</span>
          {' '}
          <br />
        </div>

        <a className="cardContainerRightButton">
          View All
          {' '}
          <img src={ArrowDown} height="18" width="18" style={{ marginLeft: '6px' }} />
        </a>
      </div>

      <div className="row row-cols-2 row-cols-md-3   row-cols-lg-6 justify-content-center  g-2">
        {
        cetagoriesList.map((singleCetagoriesItem) => <CetagoriesItem singleCetagoriesItem={singleCetagoriesItem} key={singleCetagoriesItem.id} />)
      }
      </div>

    </div>
  );
}

export default Cetagories;
