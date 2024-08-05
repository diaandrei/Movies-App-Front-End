import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { RatingModal } from "../rating-modal/RatingModal.jsx";
import StarIcon from "@mui/icons-material/Star";
import { RegisterModal } from "../register-modal/RegisterModal.jsx";
import { useLazyGetApiMoviesAddMovieWatchListQuery } from "../../redux/slice/movies.ts";
import { getToken } from "../../utils/LocalStorage.js";
import { toast } from "react-toastify";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

export const CarouselCard = ({
  title,
  data,
  autoPlaySpeed,
  isLoading,
  onWatchListPress,
}) => {
  const [btnLoader, setBtnLoader] = useState(null);
  const [modalIsOpen, setIsModalOpen] = useState(false);
  const [addMoviesToWatchListApi] = useLazyGetApiMoviesAddMovieWatchListQuery();

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  const isLoggedIn = getToken() !== "";

  const addToWatchlistHandler = async (id) => {
    if (isLoggedIn) {
      setBtnLoader(id);
      let response = await addMoviesToWatchListApi({ movieId: id });
      const {
        data: { success, title },
      } = response;
      if (response && success) {
        toast.success(title);
        onWatchListPress();
      } else {
        toast.error(title);
      }
      setBtnLoader(null);
    } else {
      openModal();
    }
  };

  return isLoading ? (
    <div className="h-72 flex w-full justify-center items-center">
      <CircularProgress size={40} thickness={6} sx={{ color: "white" }} />
    </div>
  ) : (
    <>
      <div className="group overflow-hidden max-w-sm flex items-center rounded-l-sm border-gold-500 px-2  border-l-4  cursor-pointer  ">
        <span className="text-white md:text-2xl text-lg font-bold">
          {title}
        </span>
        <div className="group-hover:text-gold-500  group-hover:scale-125 transform transition-transform  text-white ml-1">
          <MdOutlineArrowForwardIos size={20} />
        </div>
      </div>
      {data?.length > 0 ? (
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
          {data?.map((item, index) => {
            const trimTitle =
              item?.title?.length > 20
                ? item?.title?.substring(0, 20) + "..."
                : item?.title;

            return (
              <div className="flex flex-col   mx-3 justify-between pb-4 bg-cardBg-400  rounded-lg shadow-md">
                <Link
                  to={`/movie/${item?.id}`}
                  className="relative group overflow-hidden cursor-pointer"
                >
                  <img
                    src={item?.poster}
                    alt={item?.title}
                    className="w-full  object-fill h-72 transform transition-transform rounded-t-md group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-filter backdrop-blur-none group-hover:backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all">
                    <div className="text-center text-white">
                      <p className="text-lg font-bold">
                        {item?.title || "N/A"}
                      </p>
                      <p className="text-sm">{item?.released}</p>
                    </div>
                  </div>
                </Link>
                <div className="text-start px-1">
                  <h3 className="text-base text-white mt-1">{trimTitle}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex text-yellow-400 items-center text-sm">
                      <strong className=" text-white">Overall Rating: </strong>
                      <StarIcon style={{ opacity: 1 }} fontSize="inherit" />
                      <p className="text-white">{item?.userRating || 0}</p>
                    </div>
                    <div>
                      <RatingModal
                        movieRating={item?.movieRatings}
                        movieName={item?.title}
                        movieId={item?.id}
                        isLoggedIn={isLoggedIn}
                        openModal={openModal}
                      />
                    </div>
                  </div>
                </div>
                <div className="px-3 w-full mt-3 ">
                  <button
                    disabled={btnLoader == item?.id || item?.isMovieWatchlist}
                    onClick={() => {
                      addToWatchlistHandler(item?.id);
                    }}
                    className=" disabled:bg-gray-900 w-full flex items-center justify-center gap-2 hover:bg-darkBlue-800 bg-[#2C2C2C] text-white font-bold py-2 px-4 rounded-lg "
                  >
                    {btnLoader == item?.id ? (
                      <CircularProgress
                        size={20}
                        thickness={6}
                        sx={{ color: "white" }}
                      />
                    ) : item?.isMovieWatchlist ? (
                      <IoCheckmarkDoneCircleSharp size={20} />
                    ) : (
                      <FiPlus size={20} className="" />
                    )}

                    <div>{"Watchlist"}</div>
                  </button>
                </div>
              </div>
            );
          })}
        </Carousel>
      ) : (
        <div className="h-72 text-white font-semibold text-lg flex items-center justify-center">
          List is Empty
        </div>
      )}
      <RegisterModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </>
  );
};
