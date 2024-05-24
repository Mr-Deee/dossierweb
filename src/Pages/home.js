import React, { useState, useEffect } from "react";
import "./pages.css";
import image1 from "../assets/images/asset21.jpg";
import image2 from "../assets/images/asset2.jpg";
import image3 from "../assets/images/asste4.jpg";
import ContinuousPage from "./continuouspage";
const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    image1,
    image2,
    image3,
    // Add more image paths here
  ];
  const totalSlides = slides.length;

  // Function to show the current slide
  const showSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  // Automatically advance slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="container-wrapper">
      <div className="container-row">
        <div className="container-left">
          <h1 className="title">Dossier</h1>
          <p>
            Welcome to Dossier,is a platform designed to help you ensure that
            your legacy is preserved and your loved ones are informed about your
            assets and wishes in the event of your passing.
          </p>
        </div>
        <div className="container-right">
          <div className="slideshow">
            {slides.map((slide, index) => (
              <img
                key={index}
                src={slide}
                alt={`Slide ${index + 1}`}
                style={{
                  display: currentSlide === index ? "block" : "none",
                                }}
              />
            ))}
          </div>
          <div className="inner-container-left">
            <p>Details</p>
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
      {/* Add three containers beneath container-right */}

      <div className="container-bottom">
        <div className="bottom-container">
          {" "}
          Declare Your Assets: Easily declare all your assets, including
          properties, investments, valuables, and sentimental items, with our
          user-friendly interface."
          <div>
            <img src="asset_icon.png" alt="Asset Icon" />
            <button>Start Declaring</button>
          </div>
        </div>
        <div className="bottom-container">
          Automatic Notifications: Description: "Ensure your loved ones are
          informed about your assets and wishes promptly after your passing. Our
          automated notification system sends alerts to designated next of kin."
          Icon: Icon representing notifications or alerts. CTA Button: "Learn
          More" linking to a detailed explanation of the notification process.
        </div>
        <div className="bottom-container">
          {" "}
          Secure Data Storage: Description: "Rest assured that your sensitive
          information is stored securely with our state-of-the-art encryption
          technology. Your data remains private and accessible only to
          authorized individuals." Icon: Icon representing data security or
          encryption. CTA Button: "Explore Security Measures" linking to
          detailed information about the platform's security features.
        </div>
      </div>
    </div>
  );
};

export default HomePage;
