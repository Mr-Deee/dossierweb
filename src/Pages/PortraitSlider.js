import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './pages.css';

const PortraitSlider = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 5, // Show 5 slides at a time
    slidesToScroll: 1,
    arrows: true, // Show navigation arrows
    swipeToSlide: true, // Allow swiping to slide
    variableWidth: true // Allow variable width for slides
  };

  return (
    <div className="portrait-slider">
    <Slider {...settings}>
      <div className="card" onClick={togglePopup}>
        <img src="image1.jpg" alt="Card 1" />
        <div className="card-content">
          <h3>Card 1</h3>
          <p>Description for Card 1</p>
        </div>
        {showPopup && (
          <div className="popup">
            <p>This is the popup content.</p>
            <button className="close-button" onClick={togglePopup}>Close</button>
          </div>
        )}
      </div>
      <div className="card" onClick={togglePopup}>
        <img src="image2.jpg" alt="Card 2" />
        <div className="card-content">
          <h3>Card 2</h3>
          <p>Description for Card 2</p>
        </div>
        {showPopup && (
          <div className="popup">
            <p>This is the popup content.</p>
            <button className="close-button" onClick={togglePopup}>Close</button>
          </div>
        )}
      </div>
      {/* Repeat for remaining cards */}
    </Slider>
  </div>
);
};

export default PortraitSlider;
