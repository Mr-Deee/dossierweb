import React, { useState, useEffect } from "react";
import Image from "next/image";
import image1 from "../assets/images/asset21.jpg";
import image2 from "../assets/images/asset2.jpg";
import image3 from "../assets/images/asste4.jpg";

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [image1, image2, image3];
  const totalSlides = slides.length;

  // Function to change to the next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Main Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left (Text) */}
        <div className="md:w-1/2">
          <h1 className="text-5xl font-bold mb-6">Dossier</h1>
          <p className="text-lg leading-relaxed mb-6">
            Welcome to Dossier, a platform designed to help you ensure that your
            legacy is preserved and your loved ones are informed about your
            assets and wishes in the event of your passing.
          </p>
        </div>

        {/* Right (Image Slider) */}
        <div className="md:w-1/2">
          <div className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg">
            {slides.map((slide, index) => (
              <Image
                key={index}
                src={slide}
                alt={`Slide ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
                  currentSlide === index ? "opacity-100" : "opacity-0"
                }`}
                priority
              />
            ))}
            {/* Prev & Next buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            >
              &#8249;
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            >
              &#8250;
            </button>
          </div>
          {/* Dots for slide navigation */}
          <div className="flex justify-center mt-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 w-2 mx-1 rounded-full ${
                  currentSlide === index ? "bg-blue-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1 */}
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-3">Automatic Notifications</h3>
          <p className="text-md mb-4">
            Ensure your loved ones are informed about your assets and wishes promptly after your passing. Our automated notification system sends alerts to designated next of kin.
          </p>
          {/* Icon placeholder */}
          <div className="mb-4">
            <span className="inline-block bg-blue-500 text-white p-2 rounded-full">
              {/* Insert icon */}
            </span>
          </div>
          <a href="#" className="text-blue-500 underline">
            Learn More
          </a>
        </div>

        {/* Card 2 */}
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-3">Secure Data Storage</h3>
          <p className="text-md mb-4">
            Rest assured that your sensitive information is stored securely with our state-of-the-art encryption technology. Your data remains private and accessible only to authorized individuals.
          </p>
          {/* Icon placeholder */}
          <div className="mb-4">
            <span className="inline-block bg-green-500 text-white p-2 rounded-full">
              {/* Insert icon */}
            </span>
          </div>
          <a href="#" className="text-blue-500 underline">
            Explore Security Measures
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
