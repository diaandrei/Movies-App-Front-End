import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useDeleteApiMoviesDeleteMovieMutation,
  useLazyGetApiMoviesGetByIdQuery,
  useLazyGetApiMoviesAddMovieWatchListQuery,
} from "../../redux/slice/movies.ts";
import { GoDotFill } from "react-icons/go";
import { CircularProgress } from "@mui/material";
import {
  GenericModal,
  GenericUpdateModal,
  RatingModal,
  RegisterModal,
} from "../../components/index.js";
import { getIsAdmin, getToken } from "../../utils/LocalStorage.js";
import { useDispatch, useSelector } from "react-redux";
import { setIsRated } from "../../redux/slice/ratingSlice.js";
import { MdModeEdit, MdDeleteOutline } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { FaTrophy, FaStar } from "react-icons/fa";
import { toast } from "react-toastify";
import { path } from "../../common/routesNames.js";

const MovieDetail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const checkRating = useSelector((state) => state.ratingReducer.isRated);
  const [getMovieDetailApi, { isLoading }] = useLazyGetApiMoviesGetByIdQuery();
  const [deleteMovieByIdApi, { isLoading: confirmBtnLoader }] =
    useDeleteApiMoviesDeleteMovieMutation();
  const [movieDetailContent, setMovieDetailContent] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const [modalDetail, setModalDetail] = useState({
    modalType: "",
    modalMessage: "",
  });
  const [movieId, setMovieId] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetchMovieDetail(id);
    }
  }, [id, checkRating]);

  const fetchMovieDetail = async (id) => {
    try {
      let response = await getMovieDetailApi({ id });
      const {
        data: { success, content },
      } = response;
      if (response && success) {
        setMovieDetailContent(content || null);
        dispatch(setIsRated(false));
      } else {
        navigate(path.home, { replace: true });
      }
    } catch (error) {
      navigate(path.home, { replace: true });
    }
  };

  const performDeleteAction = async (id) => {
    try {
      let response = await deleteMovieByIdApi({
        id,
      });

      const {
        data: { success, title },
      } = response;
      setModalOpen(false);
      if (response && success) {
        toast.success(title);
        setTimeout(() => {
          navigate(-1);
        }, 1000);
      } else {
        toast.error(title);
      }
    } catch (error) {
      setModalOpen(false);
    }
  };

  const handleDelete = (id) => {
    openModal(
      "confirmation",
      "Are you sure you want to delete this title?",
      id
    );
  };

  const openModal = (type, message, id) => {
    setMovieId(id);
    setModalDetail({
      modalType: type,
      modalMessage: message,
    });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="bg-black px-4 py-8 h-screen">
      {isLoading ? (
        <div className="h-[100vh] flex w-full justify-center items-center">
          <CircularProgress size={40} thickness={6} sx={{ color: "white" }} />
        </div>
      ) : (
        movieDetailContent && (
          <MovieDetailCard
            movie={movieDetailContent}
            onDeletePress={handleDelete}
            uponSuccesPress={() => {
              fetchMovieDetail(id);
            }}
          />
        )
      )}
      <GenericModal
        open={modalOpen}
        onClose={closeModal}
        message={modalDetail?.modalMessage}
        type={modalDetail?.modalType}
        isLoading={confirmBtnLoader}
        onConfirm={() => {
          performDeleteAction(movieId);
        }}
      />
    </div>
  );
};

const MovieDetailCard = ({ movie, onDeletePress, uponSuccesPress }) => {
  function convertMinutesStringToHours(minutesString) {
    const minutes = parseInt(minutesString.match(/\d+/)[0], 10);
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
  }

  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [modalIsOpen, setIsModalOpen] = useState(false);
  const [btnLoader, setBtnLoader] = useState(false);
  const [addMoviesToWatchListApi] = useLazyGetApiMoviesAddMovieWatchListQuery();

  const isLoggedIn = getToken();
  const checkIsAdmin = getIsAdmin();
  const isAdmin = checkIsAdmin ? JSON?.parse(getIsAdmin()) : false;

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  const addToWatchlistHandler = async () => {
    if (isLoggedIn) {
      setBtnLoader(true);
      let response = await addMoviesToWatchListApi({ movieId: movie.id });
      const {
        data: { success, title },
      } = response;
      if (response && success) {
        toast.success(title);
        uponSuccesPress();
      } else {
        toast.error(title);
      }
      setBtnLoader(false);
    } else {
      openModal();
    }
  };

  const handleOpen = () => setUpdateModalOpen(true);
  const handleClose = () => setUpdateModalOpen(false);

  const formattedTotalRating =
    movie?.userRating % 1 === 0
      ? movie?.userRating.toFixed(0)
      : movie?.userRating?.toFixed(1) || "0";

  const imdbRating = parseFloat(movie.omdbRatings[0]?.value || 0);

  return (
    <div className="max-w-7xl mx-auto rounded-lg shadow-lg overflow-hidden">
      <>
        {isAdmin && isLoggedIn && (
          <div className="flex items-center justify-end my-3">
            <button
              onClick={handleOpen}
              className="mt-4 md:mt-0 flex items-center justify-center bg-darkBlue-800 h-11 w-12 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 mr-2 hover:scale-110 transition-transform"
            >
              <MdModeEdit size={20} />
            </button>
            <button
              onClick={() => onDeletePress(movie.id)}
              className="mt-4 md:mt-0 flex items-center justify-center h-11 w-12 bg-red-700 shadow-md text-white rounded-md hover:scale-105 transition-transform overflow-visible"
            >
              <MdDeleteOutline size={20} />
            </button>
          </div>
        )}

        <div className="flex items-center justify-between">
          <div className="flex flex-col flex-1">
            <div className="flex items-center">
              <h1 className="text-3xl font-bold text-white">{movie.title}</h1>
              <button
                disabled={btnLoader || movie?.isMovieWatchlist}
                onClick={addToWatchlistHandler}
                className="ml-4 disabled:bg-gray-900 flex items-center justify-center gap-2 hover:bg-darkBlue-800 bg-[#2C2C2C] text-white font-bold py-2 px-4 rounded-lg"
              >
                {btnLoader ? (
                  <CircularProgress
                    size={20}
                    thickness={6}
                    sx={{ color: "white" }}
                  />
                ) : movie?.isMovieWatchlist ? (
                  <IoCheckmarkDoneCircleSharp size={20} />
                ) : (
                  <FiPlus size={20} />
                )}
              </button>
            </div>
            <div className="flex items-center gap-3 mt-2">
              <span className="text-sm text-white">
                {movie.rated || "TV-MA"}
              </span>
              <span className="flex items-center text-sm text-white">
                <GoDotFill />
                {movie.yearOfRelease}
              </span>
              <span className="text-sm text-white">
                {movie?.runtime === "N/A"
                  ? movie?.runtime
                  : convertMinutesStringToHours(movie.runtime) || "N/A"}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6 text-white">
            <div className="flex flex-col items-center">
              <strong>IMDB RATING</strong>
              <div className="flex items-center mt-2">
                <div className="relative w-6 h-6">
                  <FaTrophy size={24} className="text-gray-500" />
                  <div
                    className="absolute top-0 left-0 w-full overflow-hidden"
                    style={{
                      height: "100%",
                      clipPath: `inset(${100 - imdbRating}% 0 0 0)`,
                    }}
                  >
                    <FaTrophy size={24} className="text-yellow-500" />
                  </div>
                </div>
                <p className="text-center ml-2">{Math.round(imdbRating)}%</p>
              </div>
            </div>
            <div className="flex flex-col items-center mt-2">
              <strong>YOUR RATING</strong>
              <div className="flex items-center justify-center">
                <RatingModal
                  movieRating={movie?.movieRatings}
                  movieName={movie?.title}
                  movieId={movie?.id}
                  isLoggedIn={isLoggedIn}
                  openModal={openModal}
                />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <strong>TOTAL RATING</strong>
              <div className="flex items-center justify-center mt-2">
                <FaStar size={16} className="text-blue-500 mr-2" />
                <p className="">{formattedTotalRating}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <div className="h-[50%]">
            <div className="flex justify-center items-center my-2 rounded">
              <img
                src={movie.poster}
                alt={movie.title}
                className="object-fill"
              />
            </div>
          </div>
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center">
              {movie?.genres?.map((item, index) => (
                <div
                  key={item?.id || index}
                  className="px-4 py-1 border-white mr-2 rounded-full border text-white text-sm"
                >
                  {item?.name || "N/A"}
                </div>
              ))}
            </div>
          </div>
          <div className="text-white mt-4">
            <strong>{movie.plot}</strong>
          </div>
          <div>
            <ul className="list-none gap-2 list-inside text-base text-white flex">
              <strong> Actors: </strong>
              {movie?.cast?.map((actor, index) => (
                <li className="text-white" key={actor?.id || index}>
                  {`${actor?.name}${
                    index < movie?.cast?.length - 1 ? "," : ""
                  }` || "N/A"}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center text-white mt-4">
            <strong>Released: </strong>
            <p className="ml-2">{movie.released}</p>
          </div>
        </div>
      </>
      <GenericUpdateModal
        data={movie}
        open={updateModalOpen}
        onClose={handleClose}
        uponSucces={uponSuccesPress}
      />
      <RegisterModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </div>
  );
};

export default MovieDetail;
