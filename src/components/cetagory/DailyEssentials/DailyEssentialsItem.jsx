import React from 'react';

function DailyEssentialsItem({ singleDailyEssentialItem }) {
  const { img, title, discountUpTo } = singleDailyEssentialItem;
  return (

    <div className="col">
      <div className="p-3">
        <div className="dailyEssentialsItemImageDiv">
          <img
            src={img}
            className="img-fluid mx-auto"
            alt={title}
            style={{
              width: 'auto', height: '100%', display: 'block', objectFit: 'scale-down',
            }}
          />
        </div>
        <div style={{ marginTop: '20px' }}>
          <h5 className="dailyEssentialsItemTitle">{title}</h5>
          <h3 className="dailyEssentialsItemDiscount">
            UP to
            {' '}
            {discountUpTo}
            {' '}
            OFF
          </h3>
        </div>
      </div>
    </div>

  );
}

export default DailyEssentialsItem;
