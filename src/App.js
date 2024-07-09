import logo from "./logo.svg";
import React, { useEffect, useState} from "react";
import "./App.css";
import HomePage from "../src/Pages/home";
import ContinuousPage from "../src/Pages/continuouspage";
import Footer from "./Pages/footer"; // Importing Footer component

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".section");
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;

        // Check if the section is partially visible
        if (sectionTop < window.innerHeight && sectionBottom >= 0) {
          section.classList.add("visible");
        } else {
          section.classList.remove("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [drawerOpen, setDrawerOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState('Home');

  const handleNavigation = (page) => {
    setCurrentPage(page);
    scrollToSection(page.toLowerCase());
    setDrawerOpen(false);
  };
  return (
    <div>
      
      <nav className="navbar">

      <div className="menu-icon" onClick={() => setDrawerOpen(!drawerOpen)}>
        &#9776;
      </div>
        <div className="nav-logo">Dossier</div>
        <ul className="nav-links  ${drawerOpen ? 'open' : ''}">
          <li className={currentPage === 'Home' ? 'active' : ''} onClick={() => handleNavigation('Home')}>Home</li>
          <li className={currentPage === 'About' ? 'active' : ''} onClick={() => handleNavigation('About')}>About</li>
          <li className={currentPage === 'Contact' ? 'active' : ''} onClick={() => handleNavigation('Contact')}>Contact Us</li>
        </ul>
      </nav>

     

      <HomePage />

      <ContinuousPage />
    </div>
  );
}

export default App;
