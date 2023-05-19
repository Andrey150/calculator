import React from 'react';

import './equal.css'

const Equal = ({pickValue, disabled}) => {
  return (
    <div className='equal'>
      <div className="equal__body" onClick={() => pickValue('=')} disabled={disabled}>
        =
      </div>
    </div>
  );
};

export default Equal;