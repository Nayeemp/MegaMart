/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './DropDownBar.css';

import dropdownArrow2 from '../../assets/images/Icons/DropDownBar/Arrow - Down 2- inActive.png';
import dropdownArrow from '../../assets/images/Icons/DropDownBar/Arrow - Down 2.png';

function DropDownButton({ dropdownButtonArrayItem }) {
  const { title, status, lists } = dropdownButtonArrayItem;

  return (dropdownButtonArrayItem) ? (
    <div className="dropdown d-inline-flex justify-content-between p-2 ">
      <button className={`btn rounded-pill  DropDownButtonStyle ${(status === 'active') ? 'btn-primary' : 'UnactiveDropDownButtonProperties'} `} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style={{ height: '36px' }}>
        {title}

        {(status === 'active') ? <img src={dropdownArrow} alt="dropdownArrow" style={{ marginLeft: '6px' }} width="18" height="18" /> : <img src={dropdownArrow2} alt="dropdownArrow" style={{ marginLeft: '6px' }} width="18" height="18" />}

      </button>
      {lists && (
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          {lists.map((listItem) => <li><a className="dropdown-item" href="#">{listItem}</a></li>)}
        </ul>
      )}

    </div>
  ) : null;
}

export default DropDownButton;
