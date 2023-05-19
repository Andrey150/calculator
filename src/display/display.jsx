import React, {useEffect, useState} from "react";

import './display.css'

const Display = ({value}) => {

  const [ showValue, setShowValue ] = useState('');

  const decide = () => {
    setShowValue(eval(showValue))
  }

  useEffect(() => {
    if (value === 'C') {
      setShowValue('');
    } else if (value === '=') {
      decide()
    } else {
      setShowValue(prevValue => prevValue + value);
    }

  }, [value]);

  return (
    <div className='display'>
      <div className="display-body">
        {showValue}
      </div>
    </div>
  );
};

export default Display;