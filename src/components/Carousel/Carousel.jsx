/* eslint-disable max-len */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Carousel.css';

import NextIcon from '../../assets/images/Carousel/Next-Icon.svg';
import PreviousIcon from '../../assets/images/Carousel/Previous-Icon.svg';
import img1 from '../../assets/images/Carousel/Rectangle 5.png';

function Carousel() {
  return (
    <div className="container" style={{ marginTop: '20px' }}>

      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img1} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          {/* <span className="carousel-control-prev-icon" aria-hidden="true" /> */}
          <img src={PreviousIcon} aria-hidden="true" className="customPrevButton carouselCustomButton img-fluid" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          {/* <span className="carousel-control-next-icon" aria-hidden="true" /> */}
          <img src={NextIcon} aria-hidden="true" className="nextButton carouselCustomButton img-fluid" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

    </div>
  );
}

export default Carousel;
