import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './pages.css';

const PortraitSlider = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);

  const togglePopup = (index) => {
    setShowPopup(!showPopup);
    setSelectedCardIndex(index);
  };

  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 5, // Show 5 slides at a time
    slidesToScroll: 1,
    arrows: true, // Show navigation arrows
    swipeToSlide: true, // Allow swiping to slide
    variableWidth: true, // Allow variable width for slides
  };

  return (
    <div className="portrait-slider">
      <Slider {...settings}>
        {[1, 2, 3, 4, 5].map((card, index) => (
          <div key={index} className="card" onClick={() => togglePopup(index)}>
            <img src={`image${index + 1}.jpg`} alt={`Card ${index + 1}`} />
            <div className="card-content">
              <h3>Card {index + 1}</h3>
              <p>Description for Card {index + 1}</p>
            </div>
            {showPopup && selectedCardIndex === index && (
              <div className="popup-overlay">
                <div className="popup">
                  <p>This is the popup {index + 1} content.</p>
                  <button className="close-button" onClick={() => togglePopup(index)}>Close</button>
                </div>
              </div>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PortraitSlider;