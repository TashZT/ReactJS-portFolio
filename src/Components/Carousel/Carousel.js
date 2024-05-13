// src/Carousel.js
import React, { useState, useEffect } from 'react';
import './Carousel.css';


const CarouselIndicators = ({ images, activeIndex, onClick }) => {
    // return (
    //   <div className="carousel__indicators">
    //     {images.map((_, index) => (
    //       <span
    //         key={index}
    //         className={`carousel__indicator ${
    //           index === activeIndex ? 'active' : ''
    //         }`}
    //         onClick={() => onClick(index)}
    //       />
    //     ))}
    //   </div>
    // );
    // <ol class="carousel-indicators">
    //   <li data-target="#myCarousel" data-slide-to="0" class=""></li>
    //   <li data-target="#myCarousel" data-slide-to="1" class="active"></li>
    //   <li data-target="#myCarousel" data-slide-to="2" class=""></li>
    // </ol>
 return (
      <ol className="carousel__indicators">
        {images.map((_, index) => (
          <li
            key={index}
            data-slide-to={index}
            className={`${
              index === activeIndex ? 'active' : ''
            }`}
            onClick={() => onClick(index)}
          />
        ))}
      </ol>
    );

  };

const Carousel = ({ images, interval = 3000 }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

 
  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const goToSlide = (index) => {
    setActiveIndex(index);
  };
  useEffect(() => {
    const autoPlayInterval = setInterval(nextSlide, interval);
    return () => {
      clearInterval(autoPlayInterval);
    };
  }, [interval]);
  
  return (
    <div className="carousel">
      <button onClick={prevSlide} className="carousel__btn carousel__btn--prev">
        &lt;
      </button>
      <img
        src={images[activeIndex]}
        alt={`Slide ${activeIndex}`}
        className="carousel__img"
      />
      <button onClick={nextSlide} className="carousel__btn carousel__btn--next">
        &gt;
      </button>
      <CarouselIndicators
        images={images}
        activeIndex={activeIndex}
        onClick={goToSlide}
      />
    </div>
  );
};
export default Carousel;
