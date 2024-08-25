import React, { useEffect, useRef, useState } from "react";
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
import logoImage from "./movies-logo.svg";

const NavBar = ({ onSearch, isLoggedIn }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchBarRef = useRef(null);
  const location = useLocation();
  const { pathname } = location;
  const checkIsAdmin = getIsAdmin();
  const isAdmin = checkIsAdmin ? JSON?.parse(getIsAdmin()) : false;
  const [searchMovieApi, { isLoading }] = useLazyGetApiMoviesSearchMovieQuery();
  const navigate = useNavigate();
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target)
      ) {
        setQuery("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setQuery]);

  useEffect(() => {
    if (query?.length > 2) {
      setIsSearchOpen(true);
    } else {
      setIsSearchOpen(false);
    }
  }, [query]);

  return (
    <>
      <nav className="bg-darkBlue-900 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-end  space-x-4 w-1/2    ">
            <a href="/" className="text-white text-2xl font-bold ">
              <img src={logoImage} className=" w-24  " alt="logo" />
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
                <button
                  className={`hover:text-gray-300 ${
                    open && "bg-gray-600"
                  } shadow p-1 rounded-md text-white flex`}
                  onClick={handleOpen}
                >
                  Add Top Ten Titles
                </button>
              </>
            )}
            {isLoggedIn ? (
              <>
                <a
                  href={"/create-title"}
                  className={`hover:text-gray-300 ${
                    pathname == path.createMovie && "bg-gray-600"
                  } shadow p-1 rounded-md text-white flex`}
                >
                  {"Create"}
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
            <SearchBar
              value={query}
              onChange={handleSearch}
              isLoading={isLoading}
              onClear={onClear}
            />
          </div>
          <a
            href="/watchlist"
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
                href={"/create-title"}
                className="block px-4 py-2 hover:text-gray-300 text-white"
              >
                Create Title
              </a>
              <button
                className="block px-4 py-2 hover:text-gray-300 text-white"
                onClick={handleOpen}
              >
                Top Ten Titles
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
              Sign Up
            </a>
          )}
        </div>
      </nav>
      <MovieSelectionPopup open={open} handleClose={handleClose} />
      <RegisterModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
      <div>
        {isSearchOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => {
              setIsSearchOpen(false);
              setQuery("");
            }}
          ></div>
        )}
        {serachedContent?.length > 0 ? (
          <div className="relative max-w-7xl mx-auto z-50" ref={searchBarRef}>
            <div className="absolute top-0 left-0 cursor-pointer bg-cardBg-400 w-1/2 p-5 max-h-[35rem] overflow-y-auto scrollbar">
              {serachedContent?.map((item) => (
                <button
                  key={item?.id}
                  onClick={() => {
                    setIsSearchOpen(false);
                    setQuery("");
                    navigate(`/movie/${item?.id}`);
                  }}
                  className="flex w-full bg-cardBg-400 hover:bg-[#313131] mb-3 text-white gap-3"
                >
                  <div className="h-52 w-60">
                    <img
                      src={item?.poster}
                      className="h-full w-full rounded-lg"
                      alt={item?.title}
                    />
                  </div>
                  <div className="gap-4">
                    <div className="flex items-center gap-2">
                      <strong>Title: </strong>
                      <p className="text-sm text-start">{item?.title}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <strong>Release Year: </strong>
                      <p className="text-sm">{item?.released}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ) : query?.length > 2 ? (
          <div className="relative max-w-7xl mx-auto z-50">
            <div className="absolute top-0 left-0 cursor-pointer bg-cardBg-400 w-1/2 p-5">
              <div className="text-white text-center">
                {isLoading ? (
                  <CircularProgress
                    size={30}
                    thickness={5}
                    sx={{ color: "black" }}
                  />
                ) : (
                  "No results found"
                )}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default NavBar;
