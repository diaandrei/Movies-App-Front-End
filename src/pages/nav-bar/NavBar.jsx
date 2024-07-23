import React, { useState } from "react";
import { InputField } from "../../components/input-field/InputField";
import { SearchBar } from "../../components/search-bar/SearchBar";
import Modal from "react-modal";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { images } from "../../common/images";

const NavBar = ({ onSearch }) => {
  const { movieLogo } = images;
  const [query, setQuery] = useState(null);
  const [modalIsOpen, setIsModalOpen] = React.useState(false);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "40%",
      backgroundColor: "transparent",
      border: "0px",
    },
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
    setQuery(null);
  };

  const dummyJson = {
    id: 0,
    img: "https://media.istockphoto.com/id/1799053923/photo/happy-black-family-laughing-while-watching-funny-movie-at-the-cinema.jpg?s=2048x2048&w=is&k=20&c=DFfL52ZNWyE5Nm42wjYfbCHYy44-tG0vkxDEG3lQ90Q=",
    title: "Movie Title 1",
    description: "Description for movie 1",
  };

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
                onClear={onClear}
              />
            </div>
          </div>
          <div className="hidden md:flex space-x-4">
            <div>
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
              >
                <div className="flex items-center justify-center ">
                  <div className="circular-gradient p-10 mt-8 sm:mx-auto sm:w-full sm:max-w-md drop-shadow rounded-lg ">
                    <button
                      onClick={closeModal}
                      className=" absolute  right-3 top-3"
                    >
                      <IoIosCloseCircleOutline color="white" size={30} />
                    </button>
                    <div className="sm:mx-auto sm:w-full sm:max-w-md mb-4">
                      <h2 className=" text-3xl font-extrabold text-white">
                      Sign In Required
                      </h2>
                      <p className="mt-1  text-sm text-white">
                      Please sign in to access your Watchlist
                      </p>
                    </div>
                    <InputField
                      placeholder={"Enter your Email"}
                      label={"Email Address"}
                    />
                    <InputField
                      placeholder={"Enter your password"}
                      label={"Password"}
                    />
                    <div>
                      <button
                        type="submit"
                        className="w-full bg-blue-900 mt-5 rounded-full text-white py-3 px-4 border border-transparent  shadow-sm hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm"
                      >
                        <a href="/watch-list" className="">
                          Sign in
                        </a>
                      </button>
                      <p className="text-white text-center my-2">Or</p>
                      <p className="mt-1 cursor-pointer hover:text-blue-800  hover:underline text-sm text-blue-900 text-center">
                        <a href="/sign-up">Create a new account</a>
                      </p>
                    </div>
                  </div>
                </div>
              </Modal>
            </div>
            <button
              className="hover:text-gray-300 text-white flex"
              onClick={openModal}
            >
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                class="ipc-icon ipc-icon--watchlist ipc-btn__icon ipc-btn__icon--pre"
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
            <a href="/sign-up" className="hover:text-gray-300 text-white">
              Sign in
            </a>
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
            <div className="flex">
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                class="ipc-icon ipc-icon--watchlist ipc-btn__icon ipc-btn__icon--pre"
                viewBox="0 0 24 24"
                fill="currentColor"
                role="presentation"
              >
                <path
                  d="M17 3c1.05 0 1.918.82 1.994 1.851L19 5v16l-7-3-7 3V5c0-1.05.82-1.918 1.851-1.994L7 3h10zm-4 4h-2v3H8v2h3v3h2v-3h3v-2h-3V7z"
                  fill="currentColor"
                ></path>
              </svg>
              WatchList
            </div>
          </a>
          <a
            href="/sign-up"
            className="block px-4 py-2 hover:text-gray-300 text-white"
          >
            Sign in
          </a>
        </div>
      </nav>
      {query?.length > 0 && (
        <div className="relative max-w-7xl mx-auto z-50">
          <div className="absolute top-0 left-0  cursor-pointer bg-cardBg-400 hover:bg-[#313131] w-1/2 flex p-5">
            <div className=" flex  w-full text-white gap-3 ">
              <div className=" h-52  w-60">
                <img
                  src={dummyJson?.img}
                  className="h-full w-full rounded-lg"
                />
              </div>
              <div className=" gap-4">
                <div className="flex items-center gap-2">
                  <strong>Title: </strong>
                  <p className="text-sm ">{dummyJson?.title}</p>
                </div>
                <div className="flex items-center gap-2">
                  <strong>Description: </strong>
                  <p className="text-sm">{dummyJson?.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
