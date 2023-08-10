import React from 'react';

function SingleElectronicsItem({ electronicsItem }) {
  const {
    title, img,
  } = electronicsItem;

  return (
    <div className="col">
      <div className="mx-auto mb-2 m-lg-1">
        <img src={img} alt={title} className="img-fluid" />
      </div>
    </div>

  );
}

export default SingleElectronicsItem;
