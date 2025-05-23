import React, { useState } from "react";
import { CircularProgress } from "@mui/material";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import "./style.css";

export const ReactCarousel = ({ data, isLoading }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const temp = [...data];
  const getRequiredData = () => {
    const filteredData = temp.filter((item, index) => index !== currentIndex);
    return filteredData;
  };

  return (
    <div className="flex flex-col lg:flex-row w-full my-7 rounded-lg gap-5">
      {isLoading ? (
        <div className="h-[700px] flex w-full justify-center items-center">
          <CircularProgress size={40} thickness={6} sx={{ color: "white" }} />
        </div>
      ) : data?.length > 0 ? (
        <>
          <div className="lg:w-4/5 relative">
            <Carousel
              infiniteLoop
              showArrows={true}
              autoPlay
              interval={10000}
              showStatus={false}
              showThumbs={false}
              onChange={(e) => {
                setCurrentIndex(e);
              }}
            >
              {data?.map((item, index) => (
                <Link
                  to={`/movie/${item?.id}`}
                  key={index}
                  className="flex flex-col justify-between rounded-lg shadow-md cursor-pointer"
                >
                  <div className="relative group overflow-hidden lg:h-[700px] h-[300px] rounded-lg bg-black flex items-center justify-center">
                    <div
                      className="absolute inset-0 bg-cover bg-center blur-lg"
                      style={{
                        backgroundImage: `url(${item?.poster})`,
                      }}
                    ></div>
                    <div className="relative z-10 flex items-center justify-center">
                      <img
                        src={item?.poster}
                        alt={item?.title}
                        className="object-contain"
                        style={{
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-filter backdrop-blur-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                      <div className="text-center text-white p-2">
                        <p className="text-lg font-bold">{item.title}</p>
                        <p className="text-sm">Released: {item.released}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </Carousel>
          </div>
          <div className="lg:w-1/5 ml-4">
            <span className="font-bold text-lg text-gold-500">Up Next</span>
            <div className="bg-[#1f1f1f] overflow-y-scroll hide-scrollbar lg:h-[662px] mt-2 p-2 rounded-md">
              <TransitionGroup>
                {getRequiredData()?.map((item) => {
                  return (
                    <CSSTransition
                      key={item.id}
                      timeout={500}
                      classNames={{
                        enter: "animate-fadeIn",
                        enterActive: "",
                        exit: "animate-fadeOut",
                        exitActive: "",
                      }}
                    >
                      <Link
                        to={`/movie/${item?.id}`}
                        className="flex items-center justify-center cursor-pointer mb-5"
                      >
                        <div className="w-1/2 h-32">
                          <img
                            className="h-full w-full object-cover rounded-md"
                            src={item?.poster}
                          />
                        </div>
                        <div className="text-white w-3/4 ml-2">
                          <h2 className="text-base font-bold">{item.title}</h2>
                          <p className="mt-1 text-sm">{item.released}</p>
                        </div>
                      </Link>
                    </CSSTransition>
                  );
                })}
              </TransitionGroup>
            </div>
          </div>
        </>
      ) : (
        <div className="h-72 w-full text-white font-semibold text-lg flex items-center justify-center">
          List is Empty
        </div>
      )}
    </div>
  );
};
