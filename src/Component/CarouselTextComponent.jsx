// import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const CarouselTextComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default: 3 slides on large screens
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Medium screens
        settings: {
          slidesToShow: 2, // 2 slides on medium screens
        },
      },
      {
        breakpoint: 640, // Small screens
        settings: {
          slidesToShow: 1, // 1 slide at a time on small screens
        },
      },
    ],
  };

  return (
    <>
     <div className="text-white  font-bold text-2xl text-center mt-4">
        Valuable{" "}
        <span className="bg-gradient-to-r from-[#FF0276] to-[#7209B7] bg-clip-text text-transparent">
          Reviews.
        </span>{" "}
     
      </div>
   
    <div className="container   mx-auto p-6">
      <Slider {...settings}>
        {/* Render 6 text cards */}
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="p-4 ">
            {/* Card Section */}
            <div className="  bg-gradient-to-b from-[#1E1E2A] to-[#121223] p-4 rounded-2xl  flex flex-col">
              
              {/* Text Section */}
              <div className="flex-1 text-left">
                <p className="text-white text-sm">
                  Absolutely blown away by the capabilities of this company's Web3 gaming SDK! Integrating it into my project was seamless, and the innovative tools provided took my game to the next level. The support team was incredibly responsive and helpful throughout the process. Highly recommended!
                </p>
              </div>

              {/* Profile Section */}
              <div className="flex items-center mt-4">
                {/* White Circle */}
                <div className="w-10 h-10 bg-white rounded-full flex justify-center items-center mr-4">
                  <p className="text-black font-bold text-xs">A</p>
                </div>
                {/* Name and Position */}
                <div>
                  <p className="text-white font-bold text-sm">Alex George</p>
                  <p className="text-[#A3A3B3] text-xs">CEO, Polygon</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </>
  );
};

export default CarouselTextComponent;
