import React from 'react';
import logo from '../assets/images/logo.jpeg';

export const Logo = () => {
  return (
    <div>
      <img src={logo} alt='app logo' className='object-cover h-10 w-10' />
    </div>
  );
};
