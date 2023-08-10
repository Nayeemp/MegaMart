/* eslint-disable max-len */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import ArrowDown from '../../../assets/images/Icons/Arrow - Down 2.svg';
import './DailyEssentials.css';

import img1 from '../../../assets/images/DailyEssentials/image1.png';
import img2 from '../../../assets/images/DailyEssentials/image2.png';
import img3 from '../../../assets/images/DailyEssentials/image3.png';
import img4 from '../../../assets/images/DailyEssentials/image4.png';
import img5 from '../../../assets/images/DailyEssentials/image5.png';
import img6 from '../../../assets/images/DailyEssentials/image6.png';
import DailyEssentialsItem from './DailyEssentialsItem';

const dailyEssentialsList = [
  {
    img: img1,
    title: 'Daily Essentials',
    discountUpTo: 50,
    id: 1,
  },
  {
    img: img2,
    title: 'Vegitables',
    discountUpTo: 50,
    id: 2,
  },
  {
    img: img3,
    title: 'Fruits',
    discountUpTo: 50,
    id: 3,
  },
  {
    img: img4,
    title: 'Strowberry',
    discountUpTo: 50,
    id: 4,
  },
  {
    img: img5,
    title: 'Mango',
    discountUpTo: 50,
    id: 5,
  },
  {
    img: img6,
    title: 'Cherry',
    discountUpTo: 50,
    id: 6,
  },

]

function DailyEssentials() {
  return (
    <div className="container sectionBreakpoint">

      <div className="d-flex flex-row justify-content-between align-items-center" style={{ borderBottom: '1px solid #ededed', marginBottom: '40px' }}>

        <div className="cardContainerLeftText" style={{ borderBottom: '3px solid #008ecc' }}>
          Daily
          {' '}
          <span style={{ color: '#008ECC' }}>Essentials</span>
          {' '}
          <br />
        </div>

        <a className="cardContainerRightButton">
          View All
          {' '}
          <img src={ArrowDown} height="18" width="18" style={{ marginLeft: '6px' }} />
        </a>
      </div>

      <div className="row row-cols-2 row-cols-md-3   row-cols-lg-4 row-cols-xl-5  row-cols-xxl-6 g-4 ">
        {
        dailyEssentialsList && dailyEssentialsList.map((singleDailyEssentialItem) => <DailyEssentialsItem singleDailyEssentialItem={singleDailyEssentialItem} key={singleDailyEssentialItem.id} />)
      }
      </div>

    </div>
  );
}

export default DailyEssentials;
