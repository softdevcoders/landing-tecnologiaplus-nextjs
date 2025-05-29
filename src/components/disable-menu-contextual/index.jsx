'use client';

import { useEffect } from "react";

const DisableRightClickOnImages = () => {
  const disableRightClickOnImage = (e) => {
    e.preventDefault(); 
  };

  useEffect(() => {
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      img.addEventListener('contextmenu', disableRightClickOnImage);
    });

    return () => {
      const images = document.querySelectorAll('img');
      images.forEach((img) => {
        img.removeEventListener('contextmenu', disableRightClickOnImage);
      });
    };
  }, []); 

  return null;
};

export default DisableRightClickOnImages;
