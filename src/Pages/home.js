import React, { useState, useEffect } from 'react';
import './pages.css';
import image1 from '../assets/images/n1.png';
import image2 from '../assets/images/n1.png';
const HomePage = () => {


  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of image sources
  const images = [
    image1,
    image2,
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
    <div className="inner-container-left">
      <p>DEETS</p>
      </div>
   
      <div className="row-container">
      <p>Vehicles</p>

      <p>|</p>
      <p>Assets</p>
      
      <p>|</p>
      <p>Investements</p>
       
      </div>
       
       </div>
  </div>
  
  );
}

export default HomePage;