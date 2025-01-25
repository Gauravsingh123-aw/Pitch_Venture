import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Testimonials(props) {
  const testimonials = props.props; // Pass testimonials via props
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.update(); // Recalculate Swiper layout on mount
    }
  }, []);

  return (
    <div  className="pt-4 mx-auto w-full flex flex-col justify-start items-start">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Attach ref
        modules={[Navigation, Pagination]}
        slidesPerView={3} // Show 3 slides
        centeredSlides={true} // Center the active slide
        spaceBetween={60} // Add space between slides
        loop={true} // Enable infinite scrolling
        navigation // Show navigation arrows
        pagination={{ clickable: true }} // Enable pagination dots
        watchSlidesProgress={true} // Observe slide progress
        observer={true} // Watch for changes in DOM
        observeParents={true} // Watch parent size changes
        className="w-11/12"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} >
            <div
              className={`flex flex-col items-start bg-white p-6 rounded-lg shadow-lg transition-opacity duration-300 ease-in-out ${
                // Apply opacity based on Swiper's active class
                "swiper-slide-active" ? "opacity-100" : "opacity-40"
              }`}
            >
              <BiSolidQuoteAltLeft  />
              <p className="text-gray-700 text-sm text-center mb-4">"{testimonial.review}"</p>
              <div className="flex flex-row items-center">
                  <img className="w-10" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIEd2zxEc_4IQ1jHyniHLECu15zRjkHTBJzA&s"/>
                  <h3 className="text-xl font-bold ml-5">{testimonial.name}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Testimonials;
