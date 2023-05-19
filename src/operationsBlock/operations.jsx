import React, {useEffect, useState} from 'react';

import './operation.css'

const Operations = ({pickValue, disabled}) => {

  return (
    <div className="operations">
      <div className="operations__body">
        <button className="operation" onClick={() => pickValue('/')} disabled={disabled}>/</button>
        <button className="operation" onClick={() => pickValue('*')} disabled={disabled}>*</button>
        <button className="operation" onClick={() => pickValue('-')} disabled={disabled}>-</button>
        <button className="operation" onClick={() => pickValue('+')} disabled={disabled}>+</button>
      </div>
    </div>
  );
};

export default Operations;