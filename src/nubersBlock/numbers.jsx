import React from 'react';

import './numbers.css'

const Numbers = ({pickValue, disabled}) => {

  const symbols = [

    {'symbol': '7'},
    {'symbol': '8'},
    {'symbol': '9'},
    {'symbol': '4'},
    {'symbol': '5'},
    {'symbol': '6'},
    {'symbol': '1'},
    {'symbol': '2'},
    {'symbol': '3'},
    {'symbol': '0'},
    {'symbol': '.'},
    {'symbol': 'C'},
  ]
  return (
    <div className="numbers">
      <div className="numbers__body">
        {
          symbols.map((item, idx) => {
            return (
              <button className='number' key={idx} onClick={() => pickValue(item.symbol)} disabled={disabled}>{item.symbol}</button>
            )
          })
        }
      </div>
    </div>
  );
};

export default Numbers;