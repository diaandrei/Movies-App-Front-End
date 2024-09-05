import React from "react";
import { IoClose } from "react-icons/io5";
import { WatchListMovieCard } from "../watchlist-movie-card/WatchlistMovieCard";

export const WatchListItem = ({
  activeTab,
  onLeftPress,
  onRightPress,
  leftTitle,
  rightTitle,
  handleSearchChange,
  searchQuery,
  onClear,
  leftItem,
  openModal,
  rightItem,
}) => {
  return (
    <div className="w-full mx-auto mt-10">
      <div className="flex justify-around bg-darkBlue-900 p-2 rounded-full">
        <button
          className={`py-2 px-4 w-full rounded-full transition-colors duration-300 ${
            activeTab !== 1 && "text-white"
          } ${activeTab === 1 && "border-b-2 bg-white text-black-600"}`}
          onClick={onLeftPress}
        >
          {leftTitle}
        </button>
        <button
          className={`py-2 px-4 w-full rounded-full transition-colors duration-300 ${
            activeTab !== 2 && "text-white"
          }  ${activeTab === 2 && "border-b-2 bg-white text-black-600"}`}
          onClick={onRightPress}
        >
          {rightTitle}
        </button>
      </div>

      <div
        className={`transition-opacity duration-300 ${
          activeTab === 1 ? "opacity-100" : "opacity-0 hidden"
        }`}
      >
        <div className="flex flex-col md:flex-row bg-white">
          <div className="w-full my-4">
            <div className="mb-4 flex border px-2 py-1 rounded-full border-gray-700 items-center">
              <input
                type="text"
                placeholder="Search watchlist"
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
            {leftItem?.length > 0 ? (
              <div className="rounded-md mb-4 border">
                {leftItem?.map((movie, index) => (
                  <WatchListMovieCard
                    key={movie.id}
                    movie={movie}
                    index={index}
                    openModal={openModal}
                    totalLength={leftItem?.length}
                    showDeleteButton={true}
                  />
                ))}
              </div>
            ) : (
              <div className="text-black flex items-center w-full font-semibold justify-center h-[50vh]">
                No titles found
              </div>
            )}
          </div>
        </div>
      </div>

      <div
        className={`transition-opacity duration-300 ${
          activeTab === 2 ? "opacity-100" : "opacity-0 hidden"
        }`}
      >
        <div className="flex flex-col md:flex-row bg-white transition-opacity duration-300">
          <div className="w-full my-4">
            <div className="mb-4 flex border px-2 py-1 rounded-full border-gray-700 items-center">
              <input
                type="text"
                placeholder="Search rated titles"
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
            {rightItem?.length > 0 ? (
              <div className="rounded-md mb-4 border">
                {rightItem?.map((movie, index) => (
                  <WatchListMovieCard
                    key={movie.id}
                    movie={movie}
                    index={index}
                    openModal={openModal}
                    totalLength={rightItem?.length}
                    showDeleteButton={false}
                  />
                ))}
              </div>
            ) : (
              <div className="text-black flex items-center w-full font-semibold justify-center h-[50vh]">
                No titles found
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
