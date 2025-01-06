// import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import CarouselImage from "../assets/carousel.png"; // Replace this with the path to your images

const CarouselComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default: 3 images on large screens
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Medium screens
        settings: {
          slidesToShow: 2, // 2 images on medium screens
        },
      },
      {
        breakpoint: 640, // Small screens
        settings: {
          slidesToShow: 1, // 1 image at a time on small screens
        },
      },
    ],
  };

  return (
    <>
    <div className="text-white shadow-both-3xl font-bold text-3xl mt-4 text-center">
        From Our{" "}
        <span className="bg-gradient-to-r from-[#FF0276] to-[#7209B7] bg-clip-text text-transparent">
          Blog
        </span>{" "}
      
      </div>
      <div className="text-center mt-10 text-gray-100 text-2xl">
      Level Up Your Web3 Gaming Experience: Explore Our  Blog for Insights, Tips, and Innovations in Gaming SDKs
      </div>
      
    <div className="container mx-auto p-6 ">
      <Slider {...settings}>
        {/* Render 6 cards */}
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="p-4 ">
            {/* Card Section */}
            <div className="bg-gradient-to-b from-[#1E1E2A] to-[#121223] p-4 rounded-2xl shadow-lg h-96 flex flex-col">
              {/* Image Section */}
              <div className="flex-[2] overflow-hidden">
                <img
                  src={CarouselImage}
                  alt={`Carousel ${index}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Text Section */}
              <div className="flex-[3] text-left mt-4">
                <h2 className="text-white font-bold text-xl">
                  LYNC teamed up with Astar Network to effortlessly bring the next billion gamers into Web3 🎮
                </h2>
                <p className="text-[#A3A3B3] text-sm mt-2">
                  LYNC joins forces with Astar Network to allow game developers and studios to launch games in just a few minutes using LYNC’s SDK and infrastructure.
                </p>
              </div>

              {/* Button Section */}
              <div className="text-left mt-2">
                <button className="px-4 py-2 bg-white text-black font-bold rounded-full">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </>
  );
};

export default CarouselComponent;
