/* eslint-disable max-len */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './DropDownBar.css';

import DropDownButton from './DropDownButton';

const dropdownButtonArray = [
  {
    title: 'Groceries',
    status: 'active',
    lists: ['Action1', 'Action2', 'ACtion3'],
    id: 1,
  },
  {
    title: 'Premium Fruits',
    status: 'notActive',
    lists: ['Action1', 'Action2', 'ACtion3'],
    id: 2,
  },
  {
    title: 'Home & Kitchen',
    status: 'notActive',
    lists: ['Action1', 'Action2', 'ACtion3'],
    id: 3,
  },
  {
    title: 'Fashion',
    status: 'notActive',
    lists: ['Action1', 'Action2', 'ACtion3'],
    id: 4,
  },
  {
    title: 'Electronics',
    status: 'notActive',
    lists: ['Action1', 'Action2', 'ACtion3'],
    id: 5,
  },
  {
    title: 'Beauty',
    status: 'notActive',
    lists: ['Action1', 'Action2', 'ACtion3'],
    id: 6,
  },
  {
    title: 'Home Improvement',
    status: 'notActive',
    lists: ['Action1', 'Action2', 'ACtion3'],
    id: 7,
  },
  {
    title: 'Sports, Toys & Luggage',
    status: 'notActive',
    lists: ['Action1', 'Action2', 'ACtion3'],
    id: 8,
  },
]

function DropDownBar() {
  return (
    <div style={{ borderBottom: '1px solid  #EDEDED', borderTop: '1px solid  #EDEDED' }}>
      <div className="container" style={{ marginTop: '16px', marginBottom: '16px ' }}>
        {dropdownButtonArray.map((dropdownButtonArrayItem) => <DropDownButton key={dropdownButtonArrayItem.id} dropdownButtonArrayItem={dropdownButtonArrayItem} />)}
      </div>
    </div>

  );
}

export default DropDownBar;
