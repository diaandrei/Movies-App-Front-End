import React, { useState } from "react";
import { CircularProgress } from "@mui/material";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export const ReactCarousel = ({ data, isLoading }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const temp = [...data];
  const getRequiredData = () => {
    const filteredData = temp.filter((item, index) => index !== currentIndex);
    return filteredData;
  };

  return (
    <div className="flex flex-col lg:flex-row w-full my-7 rounded-lg  gap-5">
      {isLoading ? (
        <div className="h-[700px] flex w-full justify-center items-center">
          <CircularProgress size={40} thickness={6} sx={{ color: "white" }} />
        </div>
      ) : data?.length > 0 ? (
        <>
          <div className="lg:w-4/5 relative -z-0 ">
            <Carousel
              infiniteLoop
              showArrows={true}
              autoPlay
              showStatus={false}
              showThumbs={false}
              onChange={(e) => {
                setCurrentIndex(e);
              }}
            >
              {data?.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col  justify-between  rounded-lg shadow-md"
                >
                  <div className="relative group overflow-hidden  lg:h-[700px] h-[300px] rounded-lg">
                    <img
                      src={item?.poster}
                      alt={item?.title}
                      className="w-full h-full object-fill transform transition-transform rounded-t-md group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-filter backdrop-blur-none group-hover:backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all">
                      <div className="text-center text-white">
                        <p className="text-lg font-bold">{item.title}</p>
                        <p className="text-sm">Director: {item.released}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
          <div className="lg:w-1/5 ml-4 ">
            <span className="font-bold text-lg text-gold-500">Up Next</span>
            <div className="bg-[#1f1f1f] overflow-y-scroll lg:h-[36rem] mt-2 p-2 rounded-md">
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
                      <div className=" flex items-center justify-center cursor-pointer mb-5">
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
                      </div>
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
