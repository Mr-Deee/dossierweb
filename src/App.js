import logo from "./logo.svg";
import React, { useEffect } from "react";
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
  return (
    <div>
      <HomePage />

      <ContinuousPage />
    </div>
  );
}

export default App;
