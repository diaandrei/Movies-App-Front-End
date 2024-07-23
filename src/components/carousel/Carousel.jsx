import React, { useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const ReactCarousel = () => {
  const [currentItem, setCurrentItem] = useState(0);
  const dummy = [
    {
      id: 0,
      img: "https://media.istockphoto.com/id/1799053923/photo/happy-black-family-laughing-while-watching-funny-movie-at-the-cinema.jpg?s=2048x2048&w=is&k=20&c=DFfL52ZNWyE5Nm42wjYfbCHYy44-tG0vkxDEG3lQ90Q=",
      title: "Movie Title 1",
      description: "Description for movie 1",
    },
    {
      id: 1,
      img: "https://media.istockphoto.com/id/1714834062/photo/family-watching-a-movie-at-home-movie-night.jpg?s=2048x2048&w=is&k=20&c=jzgzeN6i0e0rBq9nBp2gIZiGg81cncIFW2R6E68dhIM=",
      title: "Movie Title 2",
      description: "Description for movie 2",
    },
    {
      id: 2,
      img: "https://media.istockphoto.com/id/1488301035/photo/buying-movie-tickets.jpg?s=2048x2048&w=is&k=20&c=hO_ekk9dYRlQp_W3y7EYp0nzVe4Mfr8yBs5SwxpQY6A=",
      title: "Movie Title 3",
      description: "Description for movie 3",
    },
    {
      id: 3,
      img: "https://media.istockphoto.com/id/1720337102/photo/cheerful-family-watching-a-funny-movie-in-theatre.jpg?s=2048x2048&w=is&k=20&c=fBNuVVflhtjjzOk2mUXYDUKO6BcPNyUI78qJxCKnea4=",
      title: "Movie Title 4",
      description: "Description for movie 4",
    },
    {
      id: 5,
      img: "https://cdn.pixabay.com/photo/2016/04/14/07/50/film-1328405_640.jpg",
    },

    {
      id: 6,
      img: "https://cdn.pixabay.com/photo/2024/04/08/16/54/ai-generated-8683952_640.jpg",
    },
    {
      id: 7,
      img: "https://cdn.pixabay.com/photo/2023/11/08/15/54/ai-generated-8375142_640.jpg",
    },
    {
      id: 8,
      img: "https://cdn.pixabay.com/photo/2018/02/12/13/38/art-3148348_640.jpg",
    },
  ];

  const moveCurrentItemToEnd = () => {
    const updatedDummy = [...dummy];

    const currentIndex = updatedDummy.findIndex(
      (item) => item.id === currentItem
    );

    if (currentIndex !== -1 && currentIndex !== updatedDummy.length - 1) {
      const [removedItem] = updatedDummy.splice(currentIndex, 1);

      updatedDummy.push(removedItem);
    }
    return updatedDummy;
  };

  return (
    <div className="flex flex-col lg:flex-row w-full gap-5">
      <div className="lg:w-4/5 relative -z-0">
        <Carousel
          ssr={true}
          additionalTransfrom={0}
          arrows
          autoPlay={true}
          autoPlaySpeed={3000}
          centerMode={false}
          className="py-7"
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
              breakpoint: { max: 3000, min: 1024 },
              items: 1,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
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
          {dummy?.map((item, index) => (
            <Link to={`/movie/${item.id}`} key={index} className="block">
            <div
              key={index}
              className="flex flex-col mr-3 justify-between bg-cardBg-400 rounded-lg shadow-md"
            >
              <div className="relative group overflow-hidden cursor-pointer">
                <img
                  src={item?.img}
                  alt="Movie"
                  className="w-full object-fill transform transition-transform rounded-t-md group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-filter backdrop-blur-none group-hover:backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all">
                  <div className="text-center text-white">
                    <p className="text-lg font-bold">{item.title}</p>
                    <p className="text-sm">Director: {item.director}</p>
                  </div>
                </div>
              </div>
              </div>
              </Link>
          ))}
        </Carousel>
      </div>
      <div className="lg:w-1/5 ml-4 ">
        <span className="font-bold text-lg text-gold-500">Up Next</span>
        <div className="bg-[#1f1f1f] overflow-y-scroll lg:h-[36rem] mt-2 p-2 rounded-md">
          {dummy.map((item) => {
            return (
              <div className=" flex items-center justify-center cursor-pointer mb-5">
                <div className="w-1/2 h-32">
                  <img
                    className="h-full w-full object-cover rounded-md"
                    src={item?.img}
                  />
                </div>
                <div className="text-white w-3/4 ml-2">
                  <h2 className="text-base font-bold">{item.title}</h2>
                  <p className="mt-1 text-sm">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};