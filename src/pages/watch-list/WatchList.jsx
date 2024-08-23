import React, { useEffect, useState } from "react";
import {
  useDeleteApiMoviesDeleteMovieWatchListMutation,
  useLazyGetApiMoviesAllMovieWatchListQuery,
} from "../../redux/slice/movies.ts";
import { GenericModal } from "../../components/modal/GenericModal";
import { WatchListItem } from "../../components/watchlist-item/WatchlistItem";
import { CircularProgress } from "@mui/material";
import { toast } from "react-toastify";
import { getUserName } from "../../utils/LocalStorage.js";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setWatchlistActiveTab } from "../../redux/slice/watchlistSlice.js";

const WatchList = () => {
  const dispatch = useDispatch();
  const watchlistActiveTab = useSelector(
    (state) => state?.watchlistReducer?.watchlistActiveTab
  );

  const [activeTab, setActiveTab] = useState(1);
  const getName = getUserName();
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
  const [deleteWatchListMovieApi, { isLoading: confirmBtnLoader }] =
    useDeleteApiMoviesDeleteMovieWatchListMutation();

  const [watchListContent, setWatchListContent] = useState([]);
  const [ratedContent, setRatedContent] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchAllWatchList();
  }, []);

  const fetchAllWatchList = async () => {
    try {
      setIsLoading(true);
      let response = await watchListApi();
      const {
        data: {
          success,
          content: { items },
        },
      } = response;
      if (response && success) {
        const filterNonRatedMovies = items?.filter(
          (item) => item?.movieRatings?.length == 0
        );
        setWatchListContent(filterNonRatedMovies || []);
      }
      const filterRatedMovies = items?.filter(
        (item) => item?.movieRatings?.length > 0
      );

      setRatedContent(filterRatedMovies || []);
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
    fetchAllWatchList();
  };

  const filteredLeftItems = watchListContent.filter((movie) =>
    movie.title.toLowerCase().includes(leftSearchQuery.toLowerCase())
  );

  const filteredRightItems = ratedContent.filter((movie) =>
    movie.title.toLowerCase().includes(rightSearchQuery.toLowerCase())
  );

  return (
    <div className="bg-white   ">
      <div className="bg-[#1f1f1f] h-48  ">
        <div className="max-w-7xl mx-auto flex items-center h-full  ">
          <div className=" lg:ml-0  ml-5">
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
      <div className="max-w-7xl mx-auto   ">
        {isLoading ? (
          <div className=" mt-24 flex items-center justify-center  ">
            <CircularProgress size={30} thickness={5} sx={{ color: "black" }} />
          </div>
        ) : (
          <WatchListItem
            searchQuery={
              watchlistActiveTab == 1 ? leftSearchQuery : rightSearchQuery
            }
            handleSearchChange={
              watchlistActiveTab == 1
                ? handleLeftSearchChange
                : handleRightSearchChange
            }
            leftItem={filteredLeftItems}
            rightItem={filteredRightItems}
            activeTab={watchlistActiveTab}
            leftTitle={"Watchlist"}
            rightTitle={"Your Rated Titles"}
            onClear={
              watchlistActiveTab == 1 ? handleLeftClear : handleRightClear
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
