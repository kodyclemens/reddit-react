import React from 'react';
import Loader from 'react-loader-spinner'

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export const LoadingSpinner = () => {
  return(
    <Loader
      type="Bars"
      color={getRandomColor()} 
      height={75} 
      width={75} 
    />
  );
};
