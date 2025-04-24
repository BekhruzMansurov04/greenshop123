import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Dashboard = () => {
  const slides = [
    {
      title: "LET'S MAKE A BETTER",
      green: "PLANET",
      desc:
        "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an urban jungle! Order your favorite Plants",
      image: "/twoPlant.png", 
    },
   {
      title: "LET'S LIVE IN A BETTER",
      green: "PLANET",
      desc: 
      "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an Urban Jungle! Order your favourite plants!",
      image:"/Plant2.png",

   }, 
   {
    title: "LET'S OBSERVE A BETTER",
    green: "PLANET",
    desc: 
    "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an Urban Jungle! Order your Favorite Plants!",
    image:"/Plant3.png",

   }, 
  ];

  return (
    <div className="w-full bg-white py-6">
      <Swiper
        modules={[Autoplay, Pagination]}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="max-w-7xl mx-auto flex flex-col bg-gray-100 md:flex-row items-center justify-between gap-6 px-4 py-10">
              <div className="max-w-xl">
                <p className="text-sm text-gray-500 mb-2 uppercase">Welcome to Greenshop</p>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  {slide.title} <span className="text-green-600">{slide.green}</span>
                </h1>
                <p className="text-gray-600 mt-4 text-sm md:text-base">{slide.desc}</p>
                <button className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md text-sm font-semibold">
                  SHOP NOW
                </button>
              </div>
              <div className="flex-shrink-0">
                <img src={slide.image} alt="plant" className="w-72 md:w-96 mix-blend-multiply" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Dashboard;
