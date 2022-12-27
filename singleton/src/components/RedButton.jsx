import React from 'react';
import singleton from '../SigletonCounter';
import logger from '../SingletonLogger';

export default function RedButton() {
  return (
    <button
      id='red'
      onClick={() => {
        // singleton.increment();
        // console.log(singleton.getCount());

        console.log(logger.getCount());
        logger.log('This is RedButton');
        console.log(logger.getCount());
      }}
    >
      RedButton
    </button>
  );
}
