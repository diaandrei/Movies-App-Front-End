import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdModeEdit, MdDeleteOutline } from "react-icons/md";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { CircularProgress } from "@mui/material";

export const MovieListCard = ({
  movies,
  onDelete,
  onEdit,
  setPageNo,
  pageCount,
  paginationLoader,
}) => {
  const handleEditPress = (movie) => {
    onEdit(movie);
  };
  const handlePageChange = (event, page) => {
    setPageNo(page);
  };

  return (
    <>
      {paginationLoader ? (
        <div className=" flex items-center justify-center h-[100vh]">
          <CircularProgress size={30} thickness={5} sx={{ color: "black" }} />
        </div>
      ) : (
        <div className="container mx-auto py-4">
          <div className="flex flex-col space-y-4">
            {movies?.map((movie) => {
              return (
                <div
                  key={movie.id}
                  className="flex flex-col md:flex-row items-start md:items-center p-4 bg-white rounded-lg shadow-md border border-gray-200"
                >
                  <div className="flex flex-col md:flex-row items-start  w-full">
                    <Link
                      to={`/title/${movie?.id}`}
                      className="flex flex-col md:flex-row items-start md:items-center w-full"
                    >
                      <img
                        src={movie.poster}
                        alt={movie.title}
                        className="w-full md:w-32 h-48 object-cover rounded-md mb-4 md:mb-0 md:mr-4"
                      />
                      <div className="flex-1">
                        <h2 className="text-xl font-semibold mb-2">
                          {movie.title}
                        </h2>
                        <p className="text-gray-700 mb-2">{movie.plot}</p>
                        <p className="text-gray-600 mb-1">
                          <strong>Released:</strong> {movie.yearOfRelease}
                        </p>
                        <p className="text-gray-600 mb-1 flex gap-1">
                          <strong>Genre:</strong>
                          {movie?.genres?.map((item) => {
                            return <div>{`${item?.name},`}</div>;
                          })}
                        </p>
                        <p className="text-gray-600 mb-1 flex gap-1">
                          <strong>Cast:</strong>
                          {movie?.cast?.map((actor, index) => (
                            <div>
                              {`${actor?.name} ${
                                index < movie?.cast?.length - 1 ? "," : ""
                              }` || "N/A"}
                            </div>
                          ))}
                        </p>
                        <p className="text-gray-600 mb-1">
                          <strong>IMDb Rating: </strong>
                          {movie?.omdbRatings[0]?.value || "N/A"}
                        </p>
                        <p className="text-gray-600 mb-1">
                          <strong>User Rating: </strong>
                          {movie?.userRating?.toFixed(1) || "N/A"}
                        </p>
                      </div>
                    </Link>
                    <button
                      onClick={() => {
                        handleEditPress(movie);
                      }}
                      className="mt-4 md:mt-0 flex items-center justify-center bg-darkBlue-800 h-11 w-12 text-white rounded-md  focus:outline-none focus:ring-2 focus:ring-green-500 mr-2 hover:scale-110 transition-transform"
                    >
                      <MdModeEdit size={20} />
                    </button>
                    <button
                      onClick={() => onDelete(movie.id)}
                      className="mt-4 md:mt-0 flex items-center justify-center h-11 w-12 bg-red-700 shadow-md text-white rounded-md  hover:scale-110 transition-transform"
                    >
                      <MdDeleteOutline size={20} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      <div className="fixed bottom-0 left-0 w-full bg-white py-3 shadow-md flex justify-center">
        <Stack spacing={2}>
          <Pagination
            onChange={handlePageChange}
            count={pageCount}
            renderItem={(item) => (
              <PaginationItem
                slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                {...item}
              />
            )}
          />
        </Stack>
      </div>
      <div className="pb-16"></div>
    </>
  );
};
