import React from 'react';
import singleton from '../SigletonCounter';
import logger from '../SingletonLogger';

export default function BlueButton() {
  return (
    <button
      id='blue'
      onClick={() => {
        // singleton.decrement();
        // console.log(singleton.getCount());

        console.log(logger.getCount());
        logger.log('This is BlueButton');
        console.log(logger.getCount());
      }}
    >
      BlueButton
    </button>
  );
}
