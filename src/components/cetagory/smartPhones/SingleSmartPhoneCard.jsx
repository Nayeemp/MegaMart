import React from 'react';

function SingleSmartPhoneCard({ smartPhone }) {
  const {
    title, img, price, offerPrice, discount,
  } = smartPhone;
  return (
    <div className="col">
      <div className="card hoverEfferct" style={{ borderRadius: '16px' }}>
        <div style={{ height: '174px', backgroundColor: '#F5F5F5', borderRadius: '16px 16px 0 0' }} className="position-relative">

          <div className="cardDiscount">
            {discount}
            <br />
            OFF
          </div>

          <img
            src={img}
            className="card-img-top img-fluid mx-auto"
            alt={title}
            style={{ width: 'auto', height: '100%', display: 'block' }}
          />
        </div>
        <div className="card-body text-start">
          <h5 className="card-title cardHeader">{title}</h5>
          <p className="card-text">
            <span className="cardBodyText1">
              ₹
              {offerPrice}
            </span>
            {' '}
            <span className="cardBodyText2">
              ₹
              {price}
            </span>
          </p>
        </div>
        <div className="card-footer text-start">
          <span className="cardBodyFooter text-start">
            Save - ₹
            {price - offerPrice}
          </span>
        </div>
      </div>
    </div>
  );
}

export default SingleSmartPhoneCard;
