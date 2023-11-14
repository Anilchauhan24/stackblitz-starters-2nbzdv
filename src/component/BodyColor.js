import React from 'react';
import Navbar from './Navbar.js';
function BodyColor() {
  const newColor = document.body;
  newColor.classList.toggle('black');

  return <Navbar onLoad={bodyColor} />;
}

export default BodyColor;
