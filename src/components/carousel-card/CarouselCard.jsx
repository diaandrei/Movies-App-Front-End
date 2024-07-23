import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { FiPlus } from "react-icons/fi";

export const CarouselCard = ({ title, data, autoPlaySpeed }) => {
  return (
    <>
      <div className="group overflow-hidden max-w-xl flex items-center rounded-l-sm border-gold-500 px-2  border-l-4  cursor-pointer  ">
        <span className="text-white text-2xl font-bold">{title}</span>
        <div className="group-hover:text-gold-500  group-hover:scale-125 transform transition-transform  text-white ml-1">
          <MdOutlineArrowForwardIos size={20} />
        </div>
      </div>
      <Carousel
        ssr={true}
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={autoPlaySpeed || 2000}
        centerMode={false}
        className="  py-7 "
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 5,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={true}
        rtl={false}
        shouldResetAutoplay
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {data?.map((item, index) => (
          <div className="flex flex-col   mx-3 justify-between pb-4 bg-cardBg-400  rounded-lg shadow-md">
            <div class="relative group overflow-hidden cursor-pointer">
              <img
                src={item?.cover}
                alt="Image"
                class="w-full  object-fill h-72 transform transition-transform rounded-t-md group-hover:scale-110"
              />
              <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-filter backdrop-blur-none group-hover:backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all">
                <div class="text-center text-white">
                  <p class="text-lg font-bold">Movie Title</p>
                  <p class="text-sm">Director: John Doe</p>
                </div>
              </div>
            </div>
            <div className="text-start px-1">
              <h3 className="text-lg text-white mt-1">{item?.title}</h3>
              <div className="flex items-center justify-between">
                <div className="flex">
                  <span className="text-yellow-400 mx-2">★</span>
                  <p className="text-white">8.4</p>
                </div>
                <div>
                  <span className="text-white mx-2">★</span>
                </div>
              </div>
            </div>
            <div className="px-3 w-full mt-3 ">
              <button className=" w-full flex items-center justify-center gap-2 hover:bg-darkBlue-800 bg-[#2C2C2C] text-white font-bold py-2 px-4 rounded-lg ">
                <FiPlus size={20} className="" />
                <div>Watchlist</div>
              </button>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
};
