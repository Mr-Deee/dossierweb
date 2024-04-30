import React, { useState, useEffect } from 'react';
import './pages.css';

const HomePage = () => {


  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of image sources
  const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg'
  ];

  // Function to change the image index
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    // Cleanup function to clear interval
    return () => clearInterval(intervalId);
  }, []); // Run effect only once on component mount

  return (
    <div className="container-wrapper">
    <div className="container container-left">
      <h1 className="title">Dossier</h1>
      <p>Welcome to Dossier, your personal digital asset hub.</p>
      

    </div>
    <div className="container container-right">
    <div className="image-slider" style={{ transform: `translateX(${-currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + 1}`} className="slider-image" />
        ))}
        </div>
      
       </div>
  </div>
  
  );
}

export default HomePage;