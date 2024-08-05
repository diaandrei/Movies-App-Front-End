import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLazyGetApiMoviesGetByIdQuery } from "../../redux/slice/movies.ts";
import { GoDotFill } from "react-icons/go";
import { CircularProgress } from "@mui/material";
import { RatingModal } from "../../components/rating-modal/RatingModal";
import { RegisterModal } from "../../components/register-modal/RegisterModal";
import { getToken } from "../../utils/LocalStorage.js";
import { useDispatch, useSelector } from "react-redux";
import { setIsRated } from "../../redux/slice/ratingSlice.js";

const MovieDetail = () => {
  const dispatch = useDispatch();
  const checkRating = useSelector((state) => state.ratingReducer.isRated);

  const [getMovieDetailApi, { isLoading }] = useLazyGetApiMoviesGetByIdQuery();
  const [movieDetailContent, setMovieDetailContent] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetchMovieDetail(id);
    }
  }, [id, checkRating]);

  const fetchMovieDetail = async (id) => {
    let response = await getMovieDetailApi({ id: id });
    const {
      data: { success, content },
    } = response;
    if (response && success) {
      setMovieDetailContent(content || null);
      dispatch(setIsRated(false));
    }
  };

  return (
    <div className="bg-black px-4 py-8 h-screen">
      {isLoading ? (
        <div className="h-[100vh] flex w-full justify-center items-center">
          <CircularProgress size={40} thickness={6} sx={{ color: "white" }} />
        </div>
      ) : (
        movieDetailContent && <DetailCard movie={movieDetailContent} />
      )}
    </div>
  );
};

const DetailCard = ({ movie }) => {
  function convertMinutesStringToHours(minutesString) {
    const minutes = parseInt(minutesString.match(/\d+/)[0], 10);
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
  }
  const [modalIsOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }
  const isLoggedIn = getToken();

  return (
    <div className="max-w-7xl mx-auto rounded-lg  shadow-lg overflow-hidden">
      <>
        <div className="  flex items-center justify-between">
          <div className=" ">
            <h1 className="text-3xl font-bold mb-2 text-white">
              {movie.title}
            </h1>
            <div className="flex items-center justify-center gap-3">
              <span className=" text-sm text-white">
                {movie.rated || "TV-MA"}
              </span>
              <span className=" flex items-center text-sm text-white">
                <GoDotFill color="" />
                {movie.yearOfRelease}
              </span>
              <span className="text-sm text-white">
                {movie?.runtime == "N/A"
                  ? movie?.runtime
                  : convertMinutesStringToHours(movie.runtime) || "N/A"}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 text-white">
            <div>
              <strong>IMDb RATING</strong>
              <p className="text-center">{movie.omdbRatings[0]?.value || 0}</p>
            </div>
            <div>
              <strong>YOUR RATING</strong>
              <p className="flex items-center justify-center">
                <RatingModal
                  movieRating={movie?.movieRatings}
                  movieName={movie?.title}
                  movieId={movie?.id}
                  isLoggedIn={isLoggedIn}
                  openModal={openModal}
                />
              </p>
            </div>
            <div>
              <strong>Total Rating</strong>
              <p className="text-center">{movie?.userRating || 0}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className=" h-[50%]">
            <div className="flex justify-center items-center my-2 rounded ">
              <img
                src={movie.poster}
                alt={movie.title}
                className="  object-fill  "
              />
            </div>
          </div>

          <div className=" flex items-center justify-between w-full  ">
            <div className="flex items-center">
              {movie?.genres?.map((item) => (
                <div className="  px-4 py-1  border-white mr-2 rounded-full border text-white text-sm  ">
                  {item?.name || "N/A"}
                </div>
              ))}
            </div>
          </div>
          <div className=" text-white">
            <strong>{movie.plot}</strong>
          </div>
          <div>
            <ul className="list-none gap-2 list-inside text-base text-white flex">
              <strong> Actors: </strong>
              {movie?.cast?.map((actor, index) => (
                <li className=" text-white  " key={index}>
                  {actor?.name || "N/A"}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center text-white">
            <strong>Released: </strong>
            <p className=" ml-2"> {movie.released}</p>
          </div>
        </div>
      </>
      <RegisterModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </div>
  );
};

export default MovieDetail;
