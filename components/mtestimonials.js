import React, { useState } from "react";
import Testimonial1 from "../layouts/testimonials1";

const testimonialsData = [
  { name: "Hadi Khan", position: "CEO", testimony: "test" },
  { name: "Alex", position: "CEO", testimony: "test" },
  { name: "Jeff", position: "CEO", testimony: "test" },
  { name: "Ford", position: "CEO", testimony: "test" }
  
];

const MTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonialsData[currentIndex];

  return (
    <div className="absolute top-[2179px] left-[17px] w-[356px] h-[405px] text-left text-xs text-black font-quicksand">
      <b className="absolute top-[88px] left-[11px] text-17xl inline-block text-gray-200 w-72 h-[97px]">
        What My Clients Have to Say.
      </b>
      <img
        className="absolute h-[15.8%] w-[17.11%] top-[0.76%] right-[79.8%] bottom-[83.44%] left-[3.09%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/testimonial.png"
      />
      <div className="testimonial-container">
        <Testimonial1
          name={currentTestimonial.name}
          position={currentTestimonial.position}
          testimony={currentTestimonial.testimony}
        />
      </div>
      <div className="arrows">
        <button onClick={handlePrevious}
        style={{ fontSize: "24px", width: "40px", height: "40px" }}>
        &lt;
        </button>
        <button onClick={handleNext}
        style={{ fontSize: "24px", width: "40px", height: "40px" }}>
        &gt;</button>
      </div>
    </div>
  );
};

export default MTestimonials;
