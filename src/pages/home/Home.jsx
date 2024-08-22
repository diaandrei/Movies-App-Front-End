import React, { useEffect, useState } from "react";
import { CarouselCard, ReactCarousel } from "../../components";
import {
  useLazyGetApiMoviesFavoriteMoviesListQuery,
  useLazyGetApiMoviesMostRecentMoviesListQuery,
  useLazyGetApiMoviesMoviesListQuery,
  useLazyGetApiMoviesTopMoviesListQuery,
} from "../../redux/slice/movies.ts";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setIsRated } from "../../redux/slice/ratingSlice.js";
import { setSelectedMovies } from "../../redux/slice/topTenMoviesSlice.js";

const Home = ({ isLoggedIn }) => {
  const dispatch = useDispatch();
  const checkRating = useSelector((state) => state.ratingReducer.isRated);
  const [getMovieListApi] = useLazyGetApiMoviesMoviesListQuery();
  const [getFansFavouriteApi] = useLazyGetApiMoviesFavoriteMoviesListQuery();
  const [getTopMoviesList] = useLazyGetApiMoviesTopMoviesListQuery();
  const [getMostRecentMovies] = useLazyGetApiMoviesMostRecentMoviesListQuery();
  const [moviesList, setMoviesList] = useState([]);
  const [topMoviesList, setTopMoviesList] = useState([]);
  const [mostRecentMoviesList, setMostRecentMoviesList] = useState([]);
  const [fansFavoriteMovieList, setFansFavoriteMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fansFavoriteLoader, setFansFavoriteLoader] = useState(true);
  const [topMoviesLoader, setTopMoviesLoader] = useState(true);
  const [recentMoviesLoader, setRecentMoviesLoader] = useState(true);

  useEffect(() => {
    if (checkRating) {
      fetchMoviesList();
      fetchTopMoviesList();
      fetchMostRecentMoviesList();
      fetchFansFavoriteList();
    }
  }, [checkRating]);

  useEffect(() => {
    fetchMoviesList();
    fetchTopMoviesList();
    fetchMostRecentMoviesList();
    fetchFansFavoriteList();
  }, []);

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
        dispatch(setIsRated(false));
      }
      setFansFavoriteLoader(false);
    } catch (error) {
      setFansFavoriteLoader(false);
      toast.error(error?.message);
    }
  };

  const fetchMoviesList = async () => {
    try {
      let result = await getMovieListApi({
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
          setMoviesList(items || []);
        }
        dispatch(setIsRated(false));
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);

      toast.error(error?.message);
    }
  };

  const fetchTopMoviesList = async () => {
    try {
      let result = await getTopMoviesList();
      const {
        data: {
          success,
          content: { items },
        },
      } = result;
      if (result && success) {
        if (items?.length > 0) {
          setTopMoviesList(items || []);
          dispatch(setSelectedMovies(extractIds(items)));
        }
        dispatch(setIsRated(false));
      }
      setTopMoviesLoader(false);
    } catch (error) {
      setTopMoviesLoader(false);
      toast.error(error?.message);
    }
  };

  const fetchMostRecentMoviesList = async () => {
    try {
      let result = await getMostRecentMovies();
      const {
        data: {
          success,
          content: { items },
        },
      } = result;
      if (result && success) {
        if (items?.length > 0) {
          setMostRecentMoviesList(items || []);
        }
        dispatch(setIsRated(false));
      }
      setRecentMoviesLoader(false);
    } catch (error) {
      setRecentMoviesLoader(false);
      toast.error(error?.message);
    }
  };

  function extractIds(movies) {
    const ids = [];

    movies.forEach((movie) => {
      ids.push(movie.id);
    });

    return ids;
  }
  return (
    <div className="bg-black min-h-screen w-full ">
      <div className="max-w-7xl mx-auto p-5">
        <ReactCarousel data={moviesList} isLoading={isLoading} />
        <CarouselCard
          title={"Featured Today"}
          data={mostRecentMoviesList}
          isLoading={recentMoviesLoader}
          onWatchListPress={fetchMostRecentMoviesList}
        />
        <CarouselCard
          title={"Top 10 on Movies this week"}
          autoPlaySpeed={3000}
          data={topMoviesList}
          isLoading={topMoviesLoader}
          onWatchListPress={fetchTopMoviesList}
        />
        <CarouselCard
          data={fansFavoriteMovieList}
          isLoading={fansFavoriteLoader}
          title={"Fan Favourites"}
          onWatchListPress={fetchFansFavoriteList}
        />
      </div>
    </div>
  );
};

export default Home;
