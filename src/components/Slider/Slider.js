import React, { useEffect, useState } from "react";
import { useRef } from "react";
import "../../CSS/Slider.css";
import BtnSlider from "./BtnSlider";
import dataSlider from "./dataSlider";

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);
  const [paused, setPaused] = useState(false);

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

   useEffect(() => {
    const interval = setInterval(() => {

      if(!paused){
        if(slideIndex !==  dataSlider.length){
          setSlideIndex(slideIndex + 1);
        } else if(slideIndex === dataSlider.length){
          setSlideIndex(1);
        }
      }   
    }, 2500)

    return () => {
      if(interval) {
        clearInterval(interval);
      }
    }
   })

   
  return (
    <div 
    className="container-slider"
    onMouseEnter={() => setPaused(true)}
    onMouseLeave={ () => setPaused(false)}
    >
      {dataSlider.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
          >
            <img src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`} />
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />

      <div className="container-dots">
        {Array.from({ length: 5 }).map((item, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  );
}
