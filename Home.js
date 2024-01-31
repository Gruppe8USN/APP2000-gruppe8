import React from "react";
import { useNavigate } from "react-router-dom";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "../Components/Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/login');
  };

  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            For En Lettere Hverdag På Gården
          </h1>
          <p className="primary-text">
            Benytt moderne teknologiske verktøy for å sjekke forholdene på jordbruket ditt 
          </p>
          <button className="secondary-button" onClick={handleButtonClick}>
            Prøv nå <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
