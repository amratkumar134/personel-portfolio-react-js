import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Music from "../../src/img/music.JPG";
import Drawing from "../../src/img/drawing.JPG";
import Quiz from "../../src/img/quiz.JPG";
import Calcu from "../../src/img/calcu.JPG";
const Portfolio = () => {
 
  return (
    <div className="portfolio" id="Portfolio">
      {/* heading */}
      <span >Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <span>music player</span>
          <img src={Music} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <span>Drawing app</span>
          <img src={Drawing} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <span>Quiz App</span>
          <img src={Quiz} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <span>Calculator</span>
          <img src={Calcu} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;