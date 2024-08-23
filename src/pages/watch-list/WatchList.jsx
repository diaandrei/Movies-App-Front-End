import React, { useEffect, useState } from "react";
import {
  useDeleteApiMoviesDeleteMovieWatchListMutation,
  useLazyGetApiMoviesAllMovieWatchListQuery,
  useLazyGetApiMoviesMeQuery,
} from "../../redux/slice/movies.ts";
import { GenericModal } from "../../components/modal/GenericModal";
import { WatchListItem } from "../../components/watchlist-item/WatchlistItem";
import { CircularProgress } from "@mui/material";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setWatchlistActiveTab } from "../../redux/slice/watchlistSlice.js";

const WatchList = () => {
  const dispatch = useDispatch();
  const watchlistActiveTab = useSelector(
    (state) => state?.watchlistReducer?.watchlistActiveTab
  );

  const [modalOpen, setModalOpen] = useState(false);
  const [modalDetail, setModalDetail] = useState({
    modalType: "",
    modalMessage: "",
  });
  const [movieId, setMovieId] = useState(null);
  const [leftSearchQuery, setLeftSearchQuery] = useState("");
  const [rightSearchQuery, setRightSearchQuery] = useState("");

  const handleLeftSearchChange = (e) => {
    setLeftSearchQuery(e.target.value);
  };

  const handleRightSearchChange = (e) => {
    setRightSearchQuery(e.target.value);
  };

  const handleLeftClear = () => {
    setLeftSearchQuery("");
  };

  const handleRightClear = () => {
    setRightSearchQuery("");
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

  const [watchListApi] = useLazyGetApiMoviesAllMovieWatchListQuery();
  const [ratedMoviesApi] = useLazyGetApiMoviesMeQuery();
  const [deleteWatchListMovieApi, { isLoading: confirmBtnLoader }] =
    useDeleteApiMoviesDeleteMovieWatchListMutation();

  const [watchListContent, setWatchListContent] = useState([]);
  const [ratedContent, setRatedContent] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchAllMovies();
  }, []);

  const fetchAllMovies = async () => {
    try {
      setIsLoading(true);

      const watchlistResponse = await watchListApi();
      const {
        data: {
          success: watchlistSuccess,
          content: { items: watchlistItems },
        },
      } = watchlistResponse;

      if (watchlistResponse && watchlistSuccess) {
        const unwatchedMovies = watchlistItems.filter(
          (movie) => movie.movieRatings.length === 0
        );
        setWatchListContent(unwatchedMovies || []);
      }

      const ratedResponse = await ratedMoviesApi();
      const {
        data: { success: ratedSuccess, content: ratedItems },
      } = ratedResponse;

      if (ratedResponse && ratedSuccess) {
        const moviesWithRatings = ratedItems.map((item) => ({
          ...item.movie,
          rating: item.rating,
        }));
        setRatedContent(moviesWithRatings);
      }

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast.error(error?.message);
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
    fetchAllMovies();
  };

  const filteredLeftItems = watchListContent.filter((movie) =>
    movie.title.toLowerCase().includes(leftSearchQuery.toLowerCase())
  );

  const filteredRightItems = ratedContent.filter((movie) =>
    movie.title.toLowerCase().includes(rightSearchQuery.toLowerCase())
  );

  return (
    <div className="bg-white">
      <div className="bg-[#1f1f1f] h-48">
        <div className="max-w-7xl mx-auto flex items-center h-full">
          <div className="lg:ml-0 ml-5">
            <span className="text-white text-2xl font-bold">
              Your WatchList
            </span>
            <p className="text-[#BCBCBC] mt-3 text-sm font-semibold">
              {
                "Keep track of what to watch next and revisit your rated titles."
              }
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        {isLoading ? (
          <div className="mt-24 flex items-center justify-center">
            <CircularProgress size={30} thickness={5} sx={{ color: "black" }} />
          </div>
        ) : (
          <WatchListItem
            searchQuery={
              watchlistActiveTab === 1 ? leftSearchQuery : rightSearchQuery
            }
            handleSearchChange={
              watchlistActiveTab === 1
                ? handleLeftSearchChange
                : handleRightSearchChange
            }
            leftItem={filteredLeftItems}
            rightItem={filteredRightItems}
            activeTab={watchlistActiveTab}
            leftTitle={"Watchlist"}
            rightTitle={"Your Rated Titles"}
            onClear={
              watchlistActiveTab === 1 ? handleLeftClear : handleRightClear
            }
            openModal={openModal}
            onLeftPress={() => {
              dispatch(setWatchlistActiveTab(1));
              setRightSearchQuery("");
            }}
            onRightPress={() => {
              dispatch(setWatchlistActiveTab(2));
              setLeftSearchQuery("");
            }}
          />
        )}
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

export default WatchList;
