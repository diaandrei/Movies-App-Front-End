import React from "react";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import StarIcon from "@mui/icons-material/Star";

export const WatchListMovieCard = ({
  movie,
  index,
  onDelete,
  openModal,
  totalLength,
}) => {
  return (
    <div className="relative p-4 rounded-md bg-white shadow-lg">
      <div
        className="absolute top-2 right-2 cursor-pointer"
        onClick={() =>
          openModal(
            "confirmation",
            "Are you sure you want to delete this title from the watchlist?",
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
                  <a className="  text-black  ">{star.name}</a>
                </li>
              ))}
            </ul>
          </div>
          {movie?.movieRatings?.length > 0 && (
            <div className="mt-2 flex items-center text-sm ">
              <h3 className="font-bold text-black ">Title Ratings: </h3>
              <div className="text-yellow-600 mx-1">
                <StarIcon style={{ opacity: 1 }} fontSize="inherit" />
              </div>
              <span className="text-black">
                {movie?.movieRatings[0]?.rating}
              </span>
            </div>
          )}
        </div>
      </Link>
      {totalLength - 1 !== index && <div className="border-b px-4 mt-4" />}
    </div>
  );
};
