import React from 'react';
import './pages.css';
import  PortraitSlider from './PortraitSlider';

const HomePage = () => {
  return (
    <div className="container">
      <h1 className="title">Dossier</h1>
      <p>Welcome to Dossier, your personal information hub.</p>
      <PortraitSlider />
    </div>
  );
}

export default HomePage;