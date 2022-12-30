import React from 'react';
import useDogImage from '../hooks/useDogImage';

export default function ImageList() {
  const dogs = useDogImage();

  return (
    <div>
      {dogs.map((dog, index) => (
        <img alt='dog image' src={dog} key={index} />
      ))}
    </div>
  );
}
