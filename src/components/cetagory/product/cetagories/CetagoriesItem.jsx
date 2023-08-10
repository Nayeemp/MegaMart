import React from 'react';

function CetagoriesItem({ singleCetagoriesItem }) {
  const { img, title } = singleCetagoriesItem;
  return (
    <div className="col">
      <div className="d-flex flex-column align-items-center">
        <div
          className="p-3 rounded-circle d-flex justify-content-center align-items-center categoriesCardImgDiv"
        >
          <img
            src={img}
            alt={title}
            style={{ width: 'auto', height: '100%', display: ' block' }}
          />
        </div>
        <h2 className="categoriesCardTitle">{title}</h2>
      </div>
    </div>

  );
}

export default CetagoriesItem;
