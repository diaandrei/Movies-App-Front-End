import React, { useEffect, useState } from "react";
import {
  SearchBar,
  RegisterModal,
  MovieSelectionPopup,
} from "../../components";
import { images } from "../../common/images";
import {
  getIsAdmin,
  setIsAdmin,
  setToken,
  setUserName,
} from "../../utils/LocalStorage";
import { useNavigate, useLocation } from "react-router";
import { path } from "../../common/routesNames";
import { useLazyGetApiMoviesSearchMovieQuery } from "../../redux/slice/movies.ts";
import { CircularProgress } from "@mui/material";

const NavBar = ({ onSearch, isLoggedIn }) => {
  const location = useLocation();
  const { pathname } = location;

  const checkIsAdmin = getIsAdmin();
  const isAdmin = checkIsAdmin ? JSON?.parse(getIsAdmin()) : false;
  const [searchMovieApi, { isLoading }] = useLazyGetApiMoviesSearchMovieQuery();
  const navigate = useNavigate();
  const { movieLogo } = images;
  const [query, setQuery] = useState(null);
  const [modalIsOpen, setIsModalOpen] = React.useState(false);
  const [serachedContent, setSearchedContent] = useState([]);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  const [isOpen, setIsOpen] = useState(false);

  const handleSearch = (query) => {
    setQuery(query.target.value);
  };

  const onClear = () => {
    setQuery("");
  };
  useEffect(() => {
    if (query?.length >= 3) {
      searchMovieHandler(query);
    } else {
      setSearchedContent([]);
    }
  }, [query]);

  const searchMovieHandler = async (query) => {
    let response = await searchMovieApi({ textToSearchMovie: query });
    const {
      data: { success, content },
    } = response;
    if (response && success) {
      setSearchedContent(content || []);
    }
  };

  const checkSession = async () => {
    if (isLoggedIn) {
      navigate(path.watchList);
    } else {
      openModal();
    }
  };


  const movies = [
    {
      id: "9117f422-70fb-44a5-b4b3-2dc2a64d4bdc",
      title: "It Ends with Us",
      released: "09 Aug 2024",
      runtime: "N/A",
      yearOfRelease: "2024",
      rated: "N/A",
      plot: "Adapted from the Colleen Hoover novel, Lily overcomes a traumatic childhood to embark on a new life. A chance meeting with a neurosurgeon sparks a connection but Lily begins to see sides of him that remind her of her parents'.",
      awards: "N/A",
      poster:
        "https://m.media-amazon.com/images/M/MV5BYzM2NGMzNGQtZjNhMi00MTVkLTg2ZGQtN2M4OTllYzU1Y2Y0XkEyXkFqcGc@._V1_SX300.jpg",
      totalSeasons: null,
      isActive: false,
      cast: [],
      genres: [
        {
          id: "b3aae334-7d2b-491b-b8ed-53a7dd54fdac",
          createdAt: "0001-01-01T00:00:00",
          updatedAt: null,
          name: "Romance",
        },
        {
          id: "317c222d-67d8-4b27-aff5-c0599becb9bb",
          createdAt: "0001-01-01T00:00:00",
          updatedAt: null,
          name: "Drama",
        },
      ],
      externalRatings: [],
      omdbRatings: [],
      movieRatings: [],
      rating: null,
      userRating: null,
      createdAt: "2024-07-26T06:09:45.5279011",
      updatedAt: "2024-07-26T06:53:15.9430908",
    },
    {
      id: "1425dc35-fcb4-4981-82a5-6e44d7838d24",
      title: "Bad Newz",
      released: "19 Jul 2024",
      runtime: "N/A",
      yearOfRelease: "2024",
      rated: "N/A",
      plot: "A crazy laugh riot which will show the outcomes of two sophisticated Punjabi men and a Christian-Hindu girl. One of the men has a one night stand with the girl and somehow, craziness happens when she is pregnant unexpectedly.",
      awards: "N/A",
      poster:
        "https://m.media-amazon.com/images/M/MV5BZjIzYjY3ZTQtNjA3Yi00MTFiLWExM2ItNjYxZmI1ZjcyMTYxXkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_SX300.jpg",
      totalSeasons: null,
      isActive: true,
      cast: [],
      genres: [
        {
          id: "e91a6fd1-f102-4b18-8944-98fa78f15a1f",
          createdAt: "0001-01-01T00:00:00",
          updatedAt: null,
          name: "Romance",
        },
        {
          id: "4030135e-6938-460c-9d04-de5b47d3d11f",
          createdAt: "0001-01-01T00:00:00",
          updatedAt: null,
          name: "Comedy",
        },
      ],
      externalRatings: [],
      omdbRatings: [
        {
          source: "Rotten Tomatoes",
          value: "33%",
        },
      ],
      movieRatings: [],
      rating: null,
      userRating: null,
      createdAt: "2024-07-25T14:55:27.347241",
      updatedAt: "2024-07-25T14:55:27.347305",
    },
    {
      id: "c050ee11-cd9e-44fe-9983-969184dfbc40",
      title: "Crew",
      released: "29 Mar 2024",
      runtime: "118 min",
      yearOfRelease: "2024",
      rated: "N/A",
      plot: "Follows three hard-working women as their destinies lead to some unwarranted situations and they end up caught in a web of lies.",
      awards: "N/A",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMGNhNTYwNjMtYjFkOC00MWQzLTgyNTMtMmIxNWU2MWUyMDQ5XkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_SX300.jpg",
      totalSeasons: null,
      isActive: true,
      cast: [],
      genres: [
        {
          id: "eeb9d5ce-3ae5-46df-ba7a-20a00973a34a",
          createdAt: "0001-01-01T00:00:00",
          updatedAt: null,
          name: "Comedy",
        },
        {
          id: "8eb1fa41-6579-48e2-a2aa-557f8a570cb8",
          createdAt: "0001-01-01T00:00:00",
          updatedAt: null,
          name: "Drama",
        },
      ],
      externalRatings: [],
      omdbRatings: [
        {
          source: "Internet Movie Database",
          value: "5.9/10",
        },
        {
          source: "Rotten Tomatoes",
          value: "64%",
        },
      ],
      movieRatings: [],
      rating: null,
      userRating: null,
      createdAt: "2024-07-25T14:59:21.1841614",
      updatedAt: "2024-07-25T14:59:21.184165",
    },
    {
      id: "f1f5e39b-abbc-4dba-a504-a991d89148a9",
      title: "Alien: Romulus",
      released: "16 Aug 2024",
      runtime: "119 min",
      yearOfRelease: "2024",
      rated: "R",
      plot: "While scavenging the deep ends of a derelict space station, a group of young space colonizers come face to face with the most terrifying life form in the universe.",
      awards: "1 nomination",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMDU0NjcwOGQtNjNjOS00NzQ3LWIwM2YtYWVmODZjMzQzN2ExXkEyXkFqcGc@._V1_SX300.jpg",
      totalSeasons: null,
      isActive: true,
      cast: [],
      genres: [
        {
          id: "ea556643-52bf-42b2-b306-016640ff547d",
          createdAt: "0001-01-01T00:00:00",
          updatedAt: null,
          name: "Thriller",
        },
        {
          id: "63213aeb-4630-4581-bb7d-3045155689b5",
          createdAt: "0001-01-01T00:00:00",
          updatedAt: null,
          name: "Horror",
        },
        {
          id: "5d009ce1-0b59-4bc4-b576-adc901804d4c",
          createdAt: "0001-01-01T00:00:00",
          updatedAt: null,
          name: "Sci-Fi",
        },
      ],
      externalRatings: [],
      omdbRatings: [],
      movieRatings: [],
      rating: null,
      userRating: null,
      createdAt: "2024-07-26T06:09:27.2245548",
      updatedAt: "2024-07-26T06:09:27.224559",
    },
    {
      id: "870b165a-be2f-43d4-85e0-c32b654f3a05",
      title: "A Family Affair",
      released: "28 Jun 2024",
      runtime: "111 min",
      yearOfRelease: "2024",
      rated: "PG-13",
      plot: "An unexpected romance triggers comic consequences for a young woman, her mother, and her boss, grappling with the complications of love, sex, and identity.",
      awards: "N/A",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMDQyMWFkMGMtNjhiMS00MzgyLWFmOGYtNzA3MGNjNGVhMGI4XkEyXkFqcGc@._V1_SX300.jpg",
      totalSeasons: null,
      isActive: true,
      cast: [],
      genres: [
        {
          id: "9169ae38-b4c3-4c8c-9acb-2d64735438ed",
          createdAt: "0001-01-01T00:00:00",
          updatedAt: null,
          name: "Romance",
        },
        {
          id: "d7b0fc6d-61f3-47a4-95e6-6ee19b39983e",
          createdAt: "0001-01-01T00:00:00",
          updatedAt: null,
          name: "Drama",
        },
        {
          id: "d471473c-1948-4aaa-948b-ea118f5ddd69",
          createdAt: "0001-01-01T00:00:00",
          updatedAt: null,
          name: "Comedy",
        },
      ],
      externalRatings: [],
      omdbRatings: [
        {
          source: "Rotten Tomatoes",
          value: "40%",
        },
      ],
      movieRatings: [],
      rating: null,
      userRating: null,
      createdAt: "2024-07-26T06:09:14.4049069",
      updatedAt: "2024-07-26T06:09:14.4050165",
    },
    {
      id: "2a927a03-caa6-4f35-ab3b-e35184464072",
      title: "Longlegs",
      released: "12 Jul 2024",
      runtime: "101 min",
      yearOfRelease: "2024",
      rated: "R",
      plot: "In pursuit of a serial killer, an FBI agent uncovers a series of occult clues that she must solve to end his terrifying killing spree.",
      awards: "N/A",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMmVkZWY2ODEtYTMyYy00MDg2LWFkMGUtMjYwOTBhOGViODQzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
      totalSeasons: null,
      isActive: true,
      cast: [],
      genres: [
        {
          id: "5fdc20a4-795a-4c29-ae5d-2d116821ce75",
          createdAt: "0001-01-01T00:00:00",
          updatedAt: null,
          name: "Horror",
        },
        {
          id: "6adc0c19-f2cb-45e7-a299-ccb6e3105695",
          createdAt: "0001-01-01T00:00:00",
          updatedAt: null,
          name: "Thriller",
        },
        {
          id: "2778a319-8cfe-4de5-bdce-fcdb7e1ed925",
          createdAt: "0001-01-01T00:00:00",
          updatedAt: null,
          name: "Crime",
        },
      ],
      externalRatings: [],
      omdbRatings: [
        {
          source: "Internet Movie Database",
          value: "7.2/10",
        },
        {
          source: "Rotten Tomatoes",
          value: "92%",
        },
      ],
      movieRatings: [],
      rating: null,
      userRating: null,
      createdAt: "2024-07-25T15:01:25.6976773",
      updatedAt: "2024-07-25T15:01:25.6976812",
    },
  ];

  return (
    <>
      <nav className="bg-darkBlue-900 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-end  space-x-4 w-1/2    ">
            <a href="/" className="text-white text-2xl font-bold ">
              <img src={movieLogo} className=" w-24  " alt="logo" />
            </a>
            <div className="hidden w-full  md:block">
              <SearchBar
                value={query}
                onChange={handleSearch}
                isLoading={isLoading}
                onClear={onClear}
              />
            </div>
          </div>
          <div className="hidden md:flex space-x-4">
            <button
              className={`hover:text-gray-300 ${
                pathname == path.watchList && "bg-gray-600"
              } shadow p-1 rounded-md text-white flex`}
              onClick={checkSession}
            >
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                className="ipc-icon ipc-icon--watchlist ipc-btn__icon ipc-btn__icon--pre"
                viewBox="0 0 24 24"
                fill="currentColor"
                role="presentation"
              >
                <path
                  d="M17 3c1.05 0 1.918.82 1.994 1.851L19 5v16l-7-3-7 3V5c0-1.05.82-1.918 1.851-1.994L7 3h10zm-4 4h-2v3H8v2h3v3h2v-3h3v-2h-3V7z"
                  fill="currentColor"
                ></path>
              </svg>
              Watchlist
            </button>

            {isLoggedIn && isAdmin && (
              <>
                <a
                  href="/movies-list"
                  className={`hover:text-gray-300 ${
                    pathname == path.moviesList && "bg-gray-600"
                  } shadow p-1 rounded-md text-white flex`}
                >
                  Titles List
                </a>
                <button
                  className={`hover:text-gray-300 ${
                    open && "bg-gray-600"
                  } shadow p-1 rounded-md text-white flex`}
                  onClick={handleOpen}
                >
                  Add Top Ten Movies
                </button>
              </>
            )}
            {isLoggedIn ? (
              <>
                <a
                  href={"/create-movie"}
                  className={`hover:text-gray-300 ${
                    pathname == path.createMovie && "bg-gray-600"
                  } shadow p-1 rounded-md text-white flex`}
                >
                  {"Advanced Search"}
                </a>
                <button
                  onClick={() => {
                    setUserName("");
                    setIsAdmin(false);
                    setToken("");
                    window.location.replace(path.home);
                  }}
                  className="hover:text-gray-300 p-1 text-white"
                >
                  Log Out
                </button>
              </>
            ) : (
              <a
                href="/sign-up"
                className={`hover:text-gray-300 ${
                  pathname == path.signUp && "bg-gray-600"
                } shadow p-1 rounded-md text-white flex`}
              >
                Sign Up
              </a>
            )}
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
          <div className="px-4 py-2">
            <SearchBar onSearch={onSearch} />
          </div>

          <a
            href="/watch-list"
            className="block px-4 py-2 hover:text-gray-300 text-white"
          >
            <button onClick={checkSession} className="flex">
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                className="ipc-icon ipc-icon--watchlist ipc-btn__icon ipc-btn__icon--pre"
                viewBox="0 0 24 24"
                fill="currentColor"
                role="presentation"
              >
                <path
                  d="M17 3c1.05 0 1.918.82 1.994 1.851L19 5v16l-7-3-7 3V5c0-1.05.82-1.918 1.851-1.994L7 3h10zm-4 4h-2v3H8v2h3v3h2v-3h3v-2h-3V7z"
                  fill="currentColor"
                ></path>
              </svg>
              Watchlist
            </button>
          </a>
          {isLoggedIn && isAdmin && (
            <>
              <a
                href={"/create-movie"}
                className="block px-4 py-2 hover:text-gray-300 text-white"
              >
                Advanced Search
              </a>
              <a
                href="/movies-list"
                className="block px-4 py-2 hover:text-gray-300 text-white"
              >
                Movies List
              </a>
              <button
                className="block px-4 py-2 hover:text-gray-300 text-white"
                onClick={handleOpen}
              >
                Top Ten Movies
              </button>
            </>
          )}
          {isLoggedIn ? (
            <button
              onClick={() => {
                setUserName("");
                setIsAdmin(false);
                setToken("");
                window.location.replace(path.home);
              }}
              className="block px-4 py-2 hover:text-gray-300 text-white"
            >
              Log Out
            </button>
          ) : (
            <a
              href="/sign-up"
              className="block px-4 py-2 hover:text-gray-300 text-white"
            >
              Create Account
            </a>
          )}
        </div>
      </nav>
      <MovieSelectionPopup
        open={open}
        handleClose={handleClose}
        movies={movies}
      />
      <RegisterModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
      {serachedContent?.length > 0 ? (
        <div className="relative max-w-7xl mx-auto z-50">
          <div className="absolute top-0 left-0  cursor-pointer bg-cardBg-400 w-1/2  p-5">
            {serachedContent?.map((item) => {
              return (
                <button
                  onClick={() => {
                    setQuery("");
                    navigate(`/movie/${item?.id}`);
                  }}
                  className=" flex  w-full bg-cardBg-400 hover:bg-[#313131] mb-3 text-white gap-3 "
                >
                  <div className=" h-52  w-60">
                    <img
                      src={item?.poster}
                      className="h-full w-full rounded-lg"
                      alt="Something went wrong"
                    />
                  </div>
                  <div className=" gap-4">
                    <div className="flex items-center gap-2">
                      <strong>Title: </strong>
                      <p className="text-sm ">{item?.title}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <strong>Release Year: </strong>
                      <p className="text-sm">{item?.released}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      ) : query?.length > 2 ? (
        <div className="relative max-w-7xl mx-auto z-50">
          <div className="absolute top-0 left-0  cursor-pointer bg-cardBg-400 w-1/2  p-5">
            <div className="text-white text-center">
              {isLoading ? (
                <CircularProgress
                  size={30}
                  thickness={5}
                  sx={{ color: "black" }}
                />
              ) : (
                " No results found"
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default NavBar;
