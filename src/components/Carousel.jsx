import React, { useState } from "react";
import data from "./Data";
import "./css/carousel.css";
import forwardIcon from "../images/forward-arrow.svg";
import backIcon from "../images/back-arrow.svg";

function App() {
  const [currentIndex, setIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("");

  const { id, imgSrc, title, description } = data[currentIndex];

  const nextSlide = () => {
    setAnimationClass("slide-exit");
    setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % data.length);
      setAnimationClass("slide-enter");
    }, 500); 
  };

  const prevSlide = () => {
    setAnimationClass("slide-exit-right");
    setTimeout(() => {
      setIndex((prevIndex) =>
        prevIndex === 0 ? data.length - 1 : prevIndex - 1
      );
      setAnimationClass("slide-enter-left");
    }, 500); 
  };

  const checkClassName = () => {
    if (id === 1) return "first";
    if (id === 2) return "second";
    if (id === 3) return "third";
    if (id === 4) return "fourth";
  };

  return (
    <section className="carousel-wrapper">
      <header className="carousel-header">
        <span className="victor">
          Made With 💚 by <a href="https://github.com/VictorKevz" target="_blank"> Victor Kevz </a>
        </span>
        <h1 className="header-title">This is a carousel</h1>
        <p className="header-parag">
          I hope you like it!😬 Feel Free to change colors to your liking!👍🏽
        </p>
      </header>
      <div className="carousel-container">
        <div className={`item img ${animationClass}`}>
          <img
            src={imgSrc}
            alt={`Slide ${currentIndex} image`}
            className={`slide-img ${checkClassName()}`}
          />
        </div>
        <div className={`item text ${animationClass}`}>
          <h2 className={`title ${checkClassName()}`}>{title}</h2>
          <p className="description">{description}</p>
        </div>
      </div>
      <div className="buttons-container">
        <button className="btn-icon" onClick={prevSlide}>
          <img src={backIcon} alt="back arrow icon" />
        </button>
        <button className="btn-icon" onClick={nextSlide}>
          <img src={forwardIcon} alt="forward arrow icon" />
        </button>
      </div>
    </section>
  );
}

export default App;