import React, { useEffect, useState } from "react";
import {
  useDeleteApiMoviesDeleteMovieWatchListMutation,
  useLazyGetApiMoviesAllMovieWatchListQuery,
  useLazyGetApiMoviesFavoriteMoviesListQuery,
} from "../../redux/slice/movies.ts";
import { GenericModal } from "../../components/modal/GenericModal";
import DeleteIcon from "@mui/icons-material/Delete";
import { CircularProgress } from "@mui/material";
import { toast } from "react-toastify";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { getUserName } from "../../utils/LocalStorage.js";

const WatchList = () => {
  const getName = getUserName();

  const [searchQuery, setSearchQuery] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalDetail, setModalDetail] = useState({
    modalType: "",
    modalMessage: "",
  });
  const [movieId, setMovieId] = useState(null);
  const [getFansFavouriteApi] = useLazyGetApiMoviesFavoriteMoviesListQuery();
  const [fansFavoriteMovieList, setFansFavoriteMovieList] = useState([]);

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

  const [watchListApi, { isLoading }] =
    useLazyGetApiMoviesAllMovieWatchListQuery();
  const [deleteWatchListMovieApi, { isLoading: confirmBtnLoader }] =
    useDeleteApiMoviesDeleteMovieWatchListMutation();

  const [watchListContent, setWatchListContent] = useState([]);
  console.log("watchListContent", watchListContent);
  useEffect(() => {
    fetchAllWatchList();
    fetchFansFavoriteList();
  }, []);

  const fetchAllWatchList = async () => {
    let response = await watchListApi();
    const {
      data: {
        success,
        content: { items },
      },
    } = response;
    if (response && success) {
      setWatchListContent(items || []);
    }
  };

  const deleteMovieFromWatchList = async () => {
    let response = await deleteWatchListMovieApi({ userWatchlistId: movieId });
    const {
      data: { success, title },
    } = response;
    if (response && success) {
      toast.success(title);
    } else {
      toast.error(title);
    }
    setModalOpen(false);
    window.location.reload();
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredWatchList = watchListContent?.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const onClear = () => {
    setSearchQuery("");
  };

  const fetchFansFavoriteList = async () => {
    try {
      let result = await getFansFavouriteApi({
        title: "",
      });
      const {
        data: {
          success,
          content: { items },
        },
      } = result;
      if (result && success) {
        if (items?.length > 0) {
          setFansFavoriteMovieList(items || []);
        }
      }
    } catch (error) {
      toast.error(error?.message);
    }
  };

  function getUniqueMovies(array1, array2) {
    return array2.filter(
      (movie2) => !array1.some((movie1) => movie1.id === movie2.id)
    );
  }

  return (
    <div className="bg-white min-h-screen overflow-y-scroll">
      <div className="bg-[#1f1f1f] h-48">
        <div className="max-w-7xl mx-auto h-full ">
          <div className="flex items-center h-full">
            <div className=" lg:ml-0  ml-5">
              <span className="text-white text-2xl font-bold">
                Your Watchlist
              </span>
              <p className="text-[#BCBCBC] mt-3 text-sm font-semibold">
                {
                  "Track the titles you want to watch in your Watchlist."
                }
              </p>
            </div>
          </div>
          {isLoading ? (
            <div className=" mt-24 flex items-center justify-center  ">
              <CircularProgress
                size={30}
                thickness={5}
                sx={{ color: "black" }}
              />
            </div>
          ) : (
            <div className="flex flex-col md:flex-row bg-white">
              <div className="w-full md:w-3/4 p-4 overflow-y-auto">
                <div className="mb-4 flex border px-2 py-1 rounded-full border-gray-700 items-center">
                  <input
                    type="text"
                    placeholder="Search Watchlist"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="p-2 w-full border-none focus:outline-none rounded-full"
                  />
                  {searchQuery?.length > 0 && (
                    <button
                      onClick={onClear}
                      type="submit"
                      className="bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white h-7 w-7 flex items-center justify-center rounded-full"
                    >
                      <IoClose size={14} />
                    </button>
                  )}
                </div>
                {filteredWatchList?.length > 0 ? (
                  <div className="rounded-md mb-4 border">
                    {filteredWatchList?.map((movie, index) => (
                      <MovieCard
                        key={movie.id}
                        movie={movie}
                        index={index}
                        openModal={openModal}
                        totalLength={filteredWatchList?.length}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-black flex items-center w-full font-semibold justify-center h-[50vh]">
                    The list is empty
                  </div>
                )}
              </div>
              <div className="w-full md:w-1/4 p-4">
                <div className="rounded-l-sm border-gold-500 border-l-4">
                  <span className="text-black text-2xl font-bold pl-2">
                    More to explore
                  </span>
                </div>
                <div className="h-[50vh] my-3 overflow-y-auto">
                  {getUniqueMovies(
                    watchListContent,
                    fansFavoriteMovieList
                  )?.map((item) => (
                    <Link
                      to={`/movie/${item?.id}`}
                      className="flex items-center justify-center cursor-pointer mb-5"
                    >
                      <div className="w-1/2 h-32">
                        <img
                          className="h-full w-full object-cover rounded-md"
                          src={item?.poster}
                          alt="Something went wrong"
                        />
                      </div>
                      <div className="text-black w-3/4 ml-2">
                        <h2 className="text-base font-bold">{item.title}</h2>
                        <p className="mt-1 text-black text-sm">
                          {item.released}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {modalOpen && (
        <GenericModal
          open={modalOpen}
          onClose={closeModal}
          message={modalDetail?.modalMessage}
          type={modalDetail?.modalType}
          onConfirm={deleteMovieFromWatchList}
          isLoading={confirmBtnLoader}
        />
      )}
    </div>
  );
};

const MovieCard = ({ movie, index, onDelete, openModal, totalLength }) => {
  return (
    <div className="relative p-4 rounded-md bg-white shadow-lg">
      <div
        className="absolute top-2 right-2 cursor-pointer"
        onClick={() =>
          openModal(
            "confirmation",
            "Are you sure you want to remove this title from the Watchlist?",
            movie?.userWatchlistId
          )
        }
      >
        <DeleteIcon style={{ color: "red" }} />
      </div>
      <Link to={`/movie/${movie?.id}`} className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <img
            src={movie.poster || "https://via.placeholder.com/150"}
            alt={movie.title}
            className="w-32 h-32 rounded-md object-cover"
          />
        </div>
        <div>
          <h2 className="text-xl font-bold">{movie.title}</h2>
          <p className="text-gray-400 text-sm font-semibold">
            {movie.yearOfRelease}
          </p>
          {movie.totalSeasons && (
            <p className="text-gray-400 text-sm font-semibold">
              {movie.totalSeasons}
            </p>
          )}
          {movie.ratings && (
            <p className="text-yellow-500 text-sm ">{`⭐ ${
              movie.rating || 0
            }`}</p>
          )}
          <p className="mt-2 text-sm font-semibold">{movie.plot}</p>
          <div className="mt-2 flex items-center text-sm ">
            <h3 className="font-bold text-black ">Stars:</h3>
            <ul className=" ml-2 list-none gap-2 list-inside text-sm text-black flex">
              {movie.genres.map((star) => (
                <li key={star.id}>
                  <a
                    className="  text-black  "
                  >
                    {star.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Link>
      {totalLength - 1 !== index && <div className="border-b px-4 mt-4" />}
    </div>
  );
};

export default WatchList;
