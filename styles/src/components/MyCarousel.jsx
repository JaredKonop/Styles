import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/MyCarousel.css"; // Your custom CSS for styling

import donut from "../assets/donut.jpg";

const MyCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide) => (currentSlide + 1) % 3);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <Carousel
        selectedItem={currentSlide}
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        transitionTime={1000} // Adjust the transition time (in milliseconds)
        interval={4000} // Auto-play interval (in milliseconds)
        onChange={(index) => setCurrentSlide(index)}
      >
        <div>
          <img src={donut} alt="Donut" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="image2.jpg" alt="Image 2" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="image3.jpg" alt="Image 3" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
};

export default MyCarousel;
