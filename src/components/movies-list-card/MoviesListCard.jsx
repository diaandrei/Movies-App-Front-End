import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdModeEdit, MdDeleteOutline } from "react-icons/md";

export const MovieListCard = ({ movies, onDelete, onEdit }) => {
  const [editId, setEditId] = useState(null);
  const [editMovie, setEditMovie] = useState({
    title: "",
    description: "",
    year: "",
    rating: "",
    genre: "",
    poster: "",
  });

  const handleEditClick = (movie) => {
    setEditId(movie.id);
    setEditMovie(movie);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditMovie({ ...editMovie, [name]: value });
  };

  const handleClose = () => {
    setEditId(null);
  };
  const handleSaveClick = () => {
    onEdit(editMovie);
    setEditId(null);
  };

  return (
    <div className="container mx-auto py-4">
      <div className="flex flex-col space-y-4">
        {movies?.map((movie) => {
          return (
            <div
              key={movie.id}
              className="flex flex-col md:flex-row items-start md:items-center p-4 bg-white rounded-lg shadow-md border border-gray-200"
            >
              {editId === movie.id ? (
                <div className="w-full">
                  <div className="flex flex-col md:flex-row items-start md:items-center w-full">
                    <img
                      src={editMovie.poster}
                      alt={editMovie.title}
                      className="w-full md:w-32 h-48 object-cover rounded-md mb-4 md:mb-0 md:mr-4"
                    />
                    <div className="flex-1">
                      <input
                        disabled={true}
                        type="text"
                        name="title"
                        value={editMovie.title}
                        onChange={handleInputChange}
                        className="w-full p-2 mb-2 border border-gray-300 rounded-md"
                        placeholder="Title"
                      />
                      <textarea
                        name="plot"
                        value={editMovie.plot}
                        onChange={handleInputChange}
                        className="w-full p-2 mb-2 border border-gray-300 rounded-md focus:outline-darkBlue-800"
                        placeholder="Plot"
                      />
                    </div>
                  </div>
                  <div className=" flex  justify-end gap-2">
                    <button
                      onClick={handleClose}
                      className="mt-4 md:mt-0 px-6 py-2 bg-transparent text-black rounded-md border-[1.5px] border-gray-400 hover:scale-110 transition-transform focus:outline-none "
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSaveClick}
                      className="mt-4 md:mt-0 px-6 py-2 bg-darkBlue-800 text-white rounded-md hover:bg-darkBlue-900 focus:outline-none hover:scale-110 transition-transform "
                    >
                      Save
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col md:flex-row items-start  w-full">
                  <Link
                    to={`/movie/${movie?.id}`}
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
                      <p className="text-gray-600 mb-1">
                        <strong>Imdb Rating: </strong>
                        {movie?.omdbRatings[1]?.value || "N/A"}
                      </p>
                      <p className="text-gray-600 mb-1">
                        <strong>User Rating: </strong>
                        {movie?.userRating || "N/A"}
                      </p>
                    </div>
                  </Link>
                  <button
                    onClick={() => handleEditClick(movie)}
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
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
